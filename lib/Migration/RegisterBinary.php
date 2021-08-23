<?php
declare(strict_types=1);
/**
 * @copyright Copyright (c) 2020, Joas Schilling <coding@schilljs.com>
 * @copyright Copyright (c) 2021, Marcel Klehr <mklehr@gmx.net>
 *
 * @author Joas Schilling <coding@schilljs.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Recognize\Migration;

use OCA\Recognize\Helper\TAR;
use OCP\IConfig;
use OCP\Migration\IOutput;
use OCP\Migration\IRepairStep;

class RegisterBinary implements IRepairStep
{

    public const VERSION = 'v14.17.4';

    /** @var IConfig */
    protected $config;

    public function __construct(IConfig $config)
    {
        $this->config = $config;
        $this->binaryDir = dirname(__DIR__, 2) . '/bin/';
    }

    public function getName(): string
    {
        return 'Register the node binary';
    }

    public function run(IOutput $output): void
    {
        if (PHP_INT_SIZE === 8) {
            $binaryPath = $this->downloadBinary(self::VERSION, 'arm64');
            $version = $this->testBinary($binaryPath);
            if ($version === null) {
                $binaryPath = $this->downloadBinary(self::VERSION, 'x64');
                $version = $this->testBinary($binaryPath);
                if ($version === null) {
                    $output->warning('Failed to read version from node binary');
                }
            }
        } else {
            $binaryPath = $this->downloadBinary(self::VERSION, 'armv7l');
            $version = $this->testBinary($binaryPath);

            if ($version === null) {
                $output->warning('Failed to read version from node binary');
            }
        }

        // Write the app config
        $this->config->setAppValue('recognize', 'node_binary', $binaryPath);
    }

    protected function testBinary(string $binaryPath): ?string
    {
        // Make binary executable
        chmod($binaryPath, 0755);

        $cmd = escapeshellcmd($binaryPath) . ' ' . escapeshellarg('--version');
        try {
            @exec($cmd, $output, $returnCode);
        } catch (\Throwable $e) {
        }

        if ($returnCode !== 0) {
            return null;
        }

        return trim(implode("\n", $output));
    }

    protected function downloadBinary(string $version, string $arch) : string {
        $url = 'https://nodejs.org/dist/'.$version.'/node-'.$version.'-linux-'.$arch.'.tar.gz';
        $file = $this->binaryDir.'/'.$arch.'.tar.gz';
        $archive = file_get_contents($url);
        if ($archive === FALSE) {
            throw new \Exception('Downloading of node binary failed');
        }
        $saved = file_put_contents($file, $archive);
        if ($saved === FALSE) {
            throw new \Exception('Saving of node binary failed');
        }
        $tar = new TAR($file);
        $tar->extractFile('node-'.$version.'-linux-'.$arch.'/bin/node', $this->binaryDir.'/'.'node-'.$version.'-linux-'.$arch);
        return $this->binaryDir.'/'.'node-'.$version.'-linux-'.$arch;
    }
}
