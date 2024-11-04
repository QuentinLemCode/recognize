OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Tanıma",
    "Smart media tagging and face recognition with on-premises machine learning models" : "Özel kurulumda makine öğrenmesi modelleriyle akıllı ortam etiketleme ve yüz tanıma",
    "Smart media tagging and face recognition with on-premises machine learning models.\nThis app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* 🎥 🤸 Recognizes human actions on video\n\n⚡ Tagging works via Nextcloud's Collaborative Tags\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos and videos with the photos app\n\nModel sizes:\n\n * Object recognition: 1GB\n * Landmark recognition: 300MB\n * Video action recognition: 50MB\n * Music genre recognition: 50MB\n\n## Ethical AI Rating\n### Rating for Photo object detection: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Photo face recognition: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Video action recognition: 🟢\n\nPositive:\n* the software for training and inferencing of this model is open source\n* the trained model is freely available, and thus can be ran on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n## Ethical AI Rating\n### Rating Music genre recognition: 🟡\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- php 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; FreeBSD, Alpine linux and thus also the official Nextcloud Docker container and Nextcloud AIO are *not* such systems)\n- For sub-native speed (using WASM mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux and thus also the official Nextcloud Docker container and also Nextcloud AIO)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n- This app is currently incompatible with the *Suspicious Login* app due to a dependency conflict (ie. you can only have one of the two installed)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js." : "Özel kurulumlarda makine öğrenme modelleriyle akıllı ortam etiketleme ve yüz tanıma.\nBu uygulama, ortam koleksiyonunuzu gözden geçirir ve uygun etiketler ekleyerek fotoğraf ve müziklerinizi otomatik olarak gruplar.\n\n* 📷 👪 Kişi fotoğraflarındaki yüzleri tanır\n* 📷 🏔 Hayvanları, manzaraları, yiyecekleri, araçları, binaları ve diğer nesneleri tanır\n* 📷 🗼 Yer işaretlerini ve anıtları tanır\n* 👂 🎵 Müzik türlerini tanır\n* 🎥 🤸 Görüntülerdeki insan eylemlerini tanır\n* ⚡ Etiketleme, Nextcloud iş birlikli etiketleri ile yapılır\n* 👂 Audioplayer uygulamasıyla etiketlenmiş müziklerinizi dinleyebilirsiniz\n* 📷 Etiketlenmiş fotoğraf ve videolarınızı fotoğraflar uygulamasıyla görüntüleyebilirsiniz\n\nModel boyutları:\n\n* Nesne tanıma: 1GB\n* Manzara tanıma: 300MB\n* Görüntüde eylem tanıma: 50MB\n* Müzik türü tanıma: 50MB\n\n## Etik yapay zeka değerlendirmesi\n### Fotoğraf nesnesi algılaması için değerlendirme: 🟢\n\nOlumlu:\n* Bu modelin öğrenme ve etkileşim yazılımı açık kaynak kodludur.\n* Eğitilmiş model ücretsiz olarak alınabilir ve bu nedenle kuruluş içinde çalıştırılabilir\n* Eğitim verileri serbestçe kullanılabilir. Bu da önyargıyı kontrol etmeyi veya düzeltmeyi veya başarımı ve CO2 kullanımının iyileştirilmesini sağlayabilir.\n\n### Fotoğraf yüz tanıma değerlendirmesi: 🟢\n\nOlumlu:\n* Bu modelin öğrenme ve etkileşim yazılımı açık kaynak kodludur.\n* Eğitilmiş model ücretsiz olarak alınabilir ve bu nedenle kuruluş içinde çalıştırılabilir\n* Eğitim verileri serbestçe kullanılabilir. Bu da önyargıyı kontrol etmeyi veya düzeltmeyi veya başarımı ve CO2 kullanımının iyileştirilmesini sağlayabilir.\n\n### Video işlemlerini tanıma değerlendirmesi: 🟢\n\nOlumlu:\n* Bu modelin öğrenme ve etkileşim yazılımı açık kaynak kodludur\n* Eğitilmiş model ücretsiz olarak alınabilir ve bu nedenle kuruluş içinde çalıştırılabilir\n* Eğitim verileri serbestçe kullanılabilir. Bu da önyargıyı kontrol etmeyi veya düzeltmeyi veya başarımı ve CO2 kullanımının iyileştirilmesini sağlar.\n\n## Etik yapay zeka değerlendirmesi\n### Müzik türü tanıma değerlendirmesi: 🟡\n\nOlumlu:\n* Bu modelin öğrenme ve etkileşim yazılımı açık kaynak kodludur.\n* Eğitilmiş model ücretsiz olarak alınabilir ve bu nedenle kuruluş içinde çalıştırılabilir\n\nOlumsuz:\n* Eğitim verileri ücretsiz olarak alınamaz. Bu da dış tarafların önyargıyı kontrol etme ve düzeltme veya modelin başarımı ile CO2 kullanımını iyileştirme yeteneğini sınırlar.\n\n[Günülüğümüzden](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/) Nextcloud Ethical AI değerlendirmesi hakkında ayrıntılı bilgi alın.\n\nKurulumdan sonra yönetici ayarlarından etiketlemeyi kullanıma alabilirsiniz.\n\nGereksinimler:\n- PHP 7.4 ve üstü\n- Uygulama \"ortak çalışma etiketleri\" kullanıma alındı\n- Yerel hız için:\n- İşlemci: x86 64-bit (AVX komutları desteğiyle)\n- Glibc kurulu sistem (genellikle Linux üzerinde standart; FreeBSD, Alpine Linux ve dolayısıyla resmi Nextcloud Docker kapsayıcısı ve Nextcloud AIO bu tür sistemlerden *değildir*)\n- Doğal olmayan hız için (WASM kipini kullanarak)\n- İşlemci: x86 64 bit, arm64, armv7l (AVX gerekmez)\n- Glibc veya musl içeren sistem (Alpine Linux ve dolayısıyla resmi Nextcloud Docker kapsayıcısı ve ayrıca Nextcloud AIO ile birlikte)\n- ~4GB boş RAM (yakın değerdeyseniz, takas yapabileceğiniz bir miktar olduğundan emin olun)\n- Bu uygulama şu anda bir bağımlılık çakışması nedeniyle *Suspicious Login* uygulamasıyla uyumlu değil (yani, ikisinden yalnızca birini kurabilirsiniz)\n\nUygulama, bulut sağlayıcılarına veya benzer hizmetlere herhangi bir özeş veri göndermez. Tüm işlemler, Node.js ile çalışan Tensorflow.js kullanılarak Nextcloud bilgisayarınızda yapılır.",
    "Status" : "Durum",
    "The machine learning models have been downloaded successfully." : "Makine öğrenmesi modelleri indirildi.",
    "The machine learning models still need to be downloaded." : "Makine öğrenmesi modellerinin indirilmesi gerekiyor.",
    "Could not execute the Node.js binary. You may need to set the path to a working binary manually." : "Node.js binary dosyası yürütülemedi. Çalışan bir binary dosyasının yolunu el ile ayarlamanız gerekebilir.",
    "Background Jobs are not executed via cron. Recognize requires background jobs to be executed via cron." : "Arka plan görevleri cron zamanlanmış görevi ile yürütülmüyor. Recognize için arka plan görevlerinin cron ile yürütülmesi gereklidir.",
    "The app is installed and will automatically classify files in background processes." : "Uygulama kuruldu ve arka planda dosyaları otomatik olarak sınıflandıracak.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "Aşağıdaki etiketleme seçeneklerinden hiçbiri seçilmemiş Uygulama bir işlem yapmayacak.",
    "Face recognition" : "Yüz tanıma",
    "Face recognition is working. " : "Yüz tanıma çalışıyor.",
    "An error occurred during face recognition, please check the Nextcloud logs." : "Yüz tanıma sırasında bir sorun çıktı. Lütfen Nextcloud günlük kayıtlarına bakın.",
    "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Yüz tanıma ile ilgili durum raporları bekleniyor. Bu ileti 15 dakikadan uzun süredir görüntüleniyorsa, Nextcloud günlük kayıtlarına bakın.",
    "Face recognition:" : "Yüz tanıma:",
    "Queued files" : "İşlem sırasındaki dosyalar",
    "Last classification: " : "Son sınıflandırma:",
    "Scheduled background jobs: " : "Zamanlanmış arka plan görevleri:",
    "Last background job execution: " : "Görevin arka planda son yürütülme zamanı:",
    "There are queued files in the face recognition queue but no background job is scheduled to process them." : "Yüz tanıma kuyruğunda bekleyen dosyalar var ancak bunları işlemek için zamanlanmış bir arka plan görevi yok.",
    "Face clustering:" : "Yüz kümeleme:",
    "faces left to cluster" : "kümelenecek yüz var",
    "Last clustering run: " : "Son kümeleme işlemi:",
    "A minimum of 120 faces per user is necessary for clustering to kick in" : "Kümelemenin başlaması için kullanıcı başına en az 120 yüz olmalıdır",
    "Enable face recognition (groups photos by faces that appear in them; UI is in the photos app)" : "Yüz tanıma kullanılsın (fotoğrafları, fotoğraflar uygulamasında görünen kişilere göre gruplandırır)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)" : "Görevin bir kez çalıştırılmasında işlenecek dosya sayısı. Bir görev 5 dakikada bir çalışır. Normal çalışma için ~500 ya da üzeri, WASM kipinde ~50 önerilir",
    "Object detection & landmark recognition" : "Nesne ve yer tanıma ",
    "Object recognition is working." : "Nesne tanıma çalışıyor.",
    "An error occurred during object recognition, please check the Nextcloud logs." : "Nesne tanıma sırasında bir sorun çıktı. Lütfen Nextcloud günlük kayıtlarına bakın.",
    "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Nesne tanıma ile ilgili durum raporları bekleniyor. Bu ileti 15 dakikadan uzun süredir görüntüleniyorsa, Nextcloud günlük kayıtlarına bakın.",
    "Object recognition:" : "Nesne tanıma:",
    "There are queued files in the object detection queue but no background job is scheduled to process them." : "Nesne tanıma kuyruğunda bekleyen dosyalar var ancak bunları işlemek için zamanlanmış bir arka plan görevi yok.",
    "Landmark recognition is working." : "Yer tanıma çalışıyor.",
    "An error occurred during landmark recognition, please check the Nextcloud logs." : "Yer tanıma sırasında bir sorun çıktı. Lütfen Nextcloud günlük kayıtlarına bakın.",
    "Waiting for status reports on landmark recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Yer tanıma ile ilgili durum raporları bekleniyor. Bu ileti 15 dakikadan uzun süredir görüntüleniyorsa, Nextcloud günlük kayıtlarına bakın.",
    "Landmark recognition:" : "Yer tanıma:",
    "There are queued files in the landmarks queue but no background job is scheduled to process them." : "Yer tanıma kuyruğunda bekleyen dosyalar var ancak bunları işlemek için zamanlanmış bir arka plan görevi yok.",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "Nesne tanıma kullanılsın (yemek, otomobil, manzara gibi)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)" : "Görevin bir kez çalıştırılmasında işlenecek dosya sayısı. Bir görev 5 dakikada bir çalışır. Normal çalışma için ~100 ya da üzeri, WASM kipinde ~20 önerilir",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "Yer tanıma kullanılsın (Eyfel kulesi, Boğaziçi köprüsü gibi)",
    "Audio tagging" : "Ses etiketleme",
    "Audio recognition is working." : "Ses tanıma çalışıyor.",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "Ses tanıma sırasında bir sorun çıktı. Lütfen Nextcloud günlük kayıtlarına bakın.",
    "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Ses tanıma ile ilgili durum raporları bekleniyor. Bu ileti 15 dakikadan uzun süredir görüntüleniyorsa, Nextcloud günlük kayıtlarına bakın.",
    "Music genre recognition:" : "Müzik türü tanıma:",
    "There are queued files but no background job is scheduled to process them." : "Tanıma kuyruğunda bekleyen dosyalar var ancak bunları işlemek için zamanlanmış bir arka plan görevi yok.",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "Müzik türü tanıma kullanılsın (pop, rock, folk, metal gibi)",
    "Video tagging" : "Görüntü etiketleme",
    "Video recognition is working." : "Görüntü tanıma çalışıyor.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "Görüntü tanıma sırasında bir sorun çıktı. Lütfen Nextcloud günlük kayıtlarına bakın.",
    "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Görüntü tanıma ile ilgili durum raporları bekleniyor. Bu ileti 15 dakikadan uzun süredir görüntüleniyorsa, Nextcloud günlük kayıtlarına bakın.",
    "Video recognition:" : "Görüntü tanıma:",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "İnsan hareketi tanıma kullanılsın (bilek güreşi, basketbol dribling, hula hup gibi)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)" : "Görevin bir kez çalıştırılmasında işlenecek dosya sayısı. Bir görev 5 dakikada bir çalışır. Normal çalışma için ~20 ya da üzeri, WASM kipinde ~5 önerilir",
    "Reset" : "Sıfırla",
    "Click the button below to remove all tags from all files that have been classified so far." : "Şimdiye kadar sınıflandırılmış tüm dosyalardaki tüm etiketleri kaldırmak için aşağıdaki düğmeye tıklayın.",
    "Reset tags for classified files" : "Sınıflandırılmış dosyalardan etiketleri kaldır",
    "Click the button below to remove all face detections from all files that have been classified so far." : "Şimdiye kadar sınıflandırılmış tüm dosyalardaki tüm yüz tanımalarını kaldırmak için aşağıdaki düğmeye tıklayın.",
    "Reset faces for classified files" : "Sınıflandırılmış dosyalardan tanınan yüzleri kaldır",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "Bu Nextcloud kopyasındaki tüm dosyaları yeniden taramak ve bunları sınıflandırma sırasına eklemek için aşağıdaki düğmeye tıklayın.",
    "Rescan all files" : "Tüm dosyaları yeniden tara",
    "Click the button below to clear the classifier queues and clear all background jobs. This is useful when you want to do the initial classification using the terminal command." : "Sınıflandırıcı kuyruklarını ve tüm arka plan işlerini temizlemek için aşağıdaki düğmeye tıklayın. Bu seçenek, ilk sınıflandırmayı uç birim komutunu ile yapmak istediğinizde kullanışlıdır.",
    "Clear queues and background jobs" : "Kuyrukları ve arka plan görevlerini temizle",
    "Resource usage" : "Kaynak kullanımı",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used. (Note: In WASM mode, currently only 1 core can be used at all times.)" : "Varsayılan olarak, sisteminizin yükünü önemli ölçüde artırabilecek şekilde, var olan tüm işlemci çekirdekleri kullanılır. Bunu önlemek için kullanılacak işlemci çekirdeği sayısını sınırlayabilirsiniz. (Not: WASM kipinde şu anda her zaman yalnızca 1 işlemci çekirdeği kullanılabilir.)",
    "Number of CPU Cores (0 for no limit)" : "Kullanılacak işlemci çekirdeği sayısı (0 sınır yok)",
    "By default, recognize will only ever run one classifier process at a time. If you have a lot of resources available and want to run as many processes in parallel as possible, you can turn on concurrency here." : "Tanıma, varsayılan olarak aynı anda yalnızca bir sınıflandırma işlemi çalıştırır. Çok fazla kaynağınız varsa ve olabildiğince çok sayıda işlemi paralel olarak çalıştırmak istiyorsanız eş zamanlı çalışmayı açabilirsiniz.",
    "Enable unlimited concurrency of classifier processes" : "Sınırsız eş zamanlı sınıflandırma işlemi çalışabilsin",
    "Tensorflow WASM mode" : "Tensorflow WASM kipi",
    "Checking CPU" : "İşlemci denetleniyor",
    "Could not check whether your machine supports native TensorFlow operation. Make sure your OS has GNU lib C, your CPU supports AVX instructions and you are running on x86. If one of these things is not the case, you will need to run in WASM mode." : "Aygıtınızın yerel TensorFlow işlemini destekleyip desteklemediği belirlenemedi. İşletim sisteminde GNU lib C bulunduğundan, işlemcinin AVX komutlarını desteklediğinden ve x86 üzerinde çalıştığınızdan emin olun. Bunlardan biri eksikse, WASM kipini kullanmanız gerekir.",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "Bilgisayarınız yerel TensorFlow işlemini destekliyor. WASM kipine gerek duymayacaksınız.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "Bilgisayarınız yerel TensorFlow işlemini desteklemediğinden otomatik olarak WASM kipi kullanıma alındı:",
    "Enable WASM mode" : "WASM kipi kullanılsın",
    "Recognize uses Tensorflow for running the machine learning models. Not all installations support Tensorflow, either because the CPU does not support AVX instructions, or because the platform is not x86 (ie. on a Raspberry Pi, which is ARM), or because the Operating System that your nextcloud runs on (when using docker, then that is the OS within the docker image) does not come with GNU lib C (for example Alpine Linux, which is also used by Nextcloud AIO). In most cases, even if your installation does not support native Tensorflow operation, you can still run Tensorflow using WebAssembly (WASM) in Node.js. This is somewhat slower but still works." : "Recognize, makine öğrenme modellerini çalıştırmak için Tensorflow kullanır. İşlemcinin AVX komutlarını desteklememesi veya platformun x86 olmaması (yani ARM işlemcili bir Raspberry Pi üzerinde) veya Nextcloud kopyanızın üzerinde çalıştığı işletim sisteminin (docker kullanırken, docker kalıbındaki işletim sistemi) GNU lib C ile birlikte gelmemesi (örneğin Nextcloud AIO tarafından da kullanılan Alpine Linux) gibi nedenlerle tüm kurulumlarda Tensorflow desteklenmez. Çoğu durumda, kurulumunuz yerel Tensorflow işlemini desteklemese bile, Tensorflow Node.js üzerinde WebAssembly (WASM) kullanılarak çalıştırılabilir. Biraz daha yavaş olur ama çalışır.",
    "Tensorflow GPU mode" : "Tensorflow grafik işlemci kipi",
    "Enable GPU mode" : "Grafik işlemci kipi kullanılsın",
    "Like most machine learning models, Recognize will run even faster when using a GPU. Setting this up is non-trivial but works well when everything is setup correctly." : "Çoğu makine öğrenmesi modelinde olduğu gibi, bir grafik işlemci kullanıldığında Recognize daha hızlı çalışır. Tek başına bunu ayarlamak yetmez. Ancak her şey doğru ayarlandığında iyi çalışır.",
    "Learn how to setup GPU mode with Recognize" : "Recognize ile grafik işlemci (GPU) kipinin nasıl kurulacağını öğrenin",
    "Node.js" : "Node.js",
    "Checking Node.js" : "Node.js denetleniyor",
    "Node.js {version} binary was installed successfully." : "Node.js {version} binary dosyası kuruldu.",
    "Checking libtensorflow" : "libtensorflow denetleniyor",
    "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode." : "Libtensorflow node.js içine yüklenemedi. Libtensorflow uygulamasını el ile kurmayı ya da WASM kipinde çalıştırmauı deneyebilirsiniz.",
    "Successfully loaded libtensorflow in Node.js, but couldn't load GPU. Make sure CUDA Toolkit and cuDNN are installed and accessible, or turn off GPU mode." : "libtensorflow node.js içine yüklendi, ancak grafik işlemci yüklenemedi. CUDA Toolkit ve cuDNN uygulamalarının kurulu ve erişilebilir olduğundan emin olun ya da grafik işlemci kipini kapatın.",
    "Libtensorflow was loaded successfully into Node.js." : "Libtensorflow Node.js içine yüklendi.",
    "Could not load Tensorflow WASM in Node.js. Something is wrong with your setup." : "Tensorflow WASM, Node.js içine yüklenemedi. Kurulumunuzda bir sorun var.",
    "Tensorflow WASM was loaded successfully into Node.js." : "Tensorflow WASM, Node.js içine yüklendi.",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v20.9 and newer v20 releases." : "Birlikte verilen Node.js binary dosyası herhangi bir nedenle sisteminizde çalışmıyorsa, özel bir node.js binary dosyasının yolunu ayarlayabilirsiniz. Şu anda Node v20.19 ve daha yeni v20 sürümleri destekleniyor.",
    "For Nextcloud Snap users, you need to adjust this path to point to the snap's \"current\" directory as the pre-configured path will change with each update. For example, set it to \"/var/snap/nextcloud/current/nextcloud/extra-apps/recognize/bin/node\" instead of \"/var/snap/nextcloud/9337974/nextcloud/extra-apps/recognize/bin/node\"" : "Nextcloud Snap kullanıcıları için, önceden yapılandırılmış yol her güncellemede değişeceğinden, bu yolu \"geçerli\" snap klasörünü gösterecek şekilde ayarlamanız gerekir. Örneğin, \"/var/snap/nextcloud/9337974/nextcloud/extra-apps/recognize/bin/node\" yerine \"/var/snap/nextcloud/current/nextcloud/extra-apps/recognize/bin/node\" olarak ayarlamanız gerekir.",
    "Classifier process priority" : "Sınıflandırma işlemi önceliği",
    "Checking Nice binary" : "Nice kitaplığı denetleniyor",
    "Could not find the Nice binary. You may need to set the path to a working binary manually." : "Nice dosyası bulunamadı. Çalışan bir binary dosyasının yolunu el ile ayarlamanız gerekebilir.",
    "Nice binary path" : "Nice binary yolu",
    "Nice value to set the priority of the Node.js processes. The value can only be from 0 to 19 since the Node.js process runs without superuser privileges. The higher the nice value, the lower the priority of the process." : "Node.js işlemlerinin önceliğini ayarlayan Nice değeri. Node.js işlemi süper kullanıcı ayrıcalıkları olmadan çalıştığından değer yalnızca 0 ile 19 arasında olabilir. Nice değeri ne kadar yüksek olursa, işlemin önceliği o kadar düşük olur.",
    "Terminal commands" : "Uçbirim komutları",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "Sınıflandırma işlerini yürütmeye yönelik tüm modelleri indirmek için sunucu uçbiriminde şu komutu yürütün.",
    "To trigger a full classification run, run the following command on the server terminal. (The classification will run in multiple background jobs which can run in parallel.)" : "Tam bir sınıflandırma işlemini tetiklemek için, sunucu uç biriminde şu komutu yürütün. (Sınıflandırma, paralel olarak çalışabilen birden çok arka plan işleminde yapılır.)",
    "To run a full classification run on the terminal, run the following. (The classification will run in sequence inside your terminal.)" : "Uç birimde tam bir sınıflandırma işlemi yapmak için şu komutu yürütün. (Sınıflandırma, uç birimde sırayla yapılır.)",
    "Before running a full initial classification run on the terminal, you should stop all background processing that Recognize scheduled upon installation to avoid interference." : "Uç birimde tam bir ilk sınıflandırma komutunu yürütmeden önce, karışıklıkları önlemek için kurulum sırasında zamanlanmış tüm arka plan işlemlerini durdurmalısınız.",
    "To run a face clustering run on for each user in the terminal, run the following. Consider adding the parameter --batch-size 10000 for large libraries to avoid PHP memory exhaustion. (The clustering will run in sequence inside your terminal.)" : "Terminaldeki her kullanıcıya yüz tanıma işlemi yapmak için şunları çalıştırın. PHP belleğinin tükenmesini önlemek amacıyla büyük kitaplıklar için --batch-size 10000 parametresini eklemeyi düşünün. (Tanıma terminalinizde sırayla yapılır.)",
    "To remove all face clusters but keep the raw detected faces run the following on the terminal:" : "Tüm yüz kümelerini silmek ancak algılanmış ve işlenmemiş yüzleri korumak için uç birimde şu komutu yürütün:",
    "To remove all detected faces and face clusters run the following on the terminal:" : "Algılanmış tüm yüzleri ve yüz kümelerini silmek için uç birimde şu komutu yürütün:",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "Tanıma uygulaması tarafından daha önce sınıflandırılmış tüm dosyaların etiketlerini şu komutla sıfırlayabilirsiniz:",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "Daha önce tanınarak sınıflandırılmış tüm dosyaların etiketlerini şu komutla silebilirsiniz:",
    "To remove tags that were created by Recognize version 2 from all files run the following on the terminal:" : "Recognize 2 sürümü tarafından oluşturulmuş etiketleri tüm dosyalardan kaldırmak için uç birimde şu komutu yürütün:",
    "Your server does not support AVX instructions" : "Sunucunuz AVX komutlarını desteklemiyor",
    "Your server does not have an x86 64-bit CPU" : "Sunucunuzun işlemcisi x86 64 bit değil",
    "Your server uses musl libc" : "Sunucunuz musl linc kullanıyor",
    "Failed to load settings" : "Ayarlar yüklenemedi",
    "Failed to save settings" : "Ayarlar kaydedilemedi",
    "never" : "asla",
    "{time} ago" : "{time} önce",
    "Cat" : "Kedi",
    "Animal" : "Hayvan",
    "Wildlife" : "Vahşi yaşam",
    "Nature" : "Doğa",
    "Puma" : "Puma",
    "Leopard" : "Leopar",
    "Lion" : "Aslan",
    "Wild cat" : "Vahşi kedi",
    "Cheetah" : "Çita",
    "Seashore" : "Deniz kıyısı",
    "Beach" : "Plaj",
    "Water" : "Su",
    "Lakeside" : "Göl kıyısı",
    "Flower" : "Çiçek",
    "Plant" : "Bitki",
    "Window" : "Pencere",
    "Architecture" : "Mimari",
    "Stairs" : "Merdiven",
    "Building" : "Bina",
    "Field" : "Arazi",
    "Farm" : "Çiftlik",
    "Landscape" : "Manzara",
    "Portrait" : "Portre",
    "People" : "Kişiler",
    "Fashion" : "Moda",
    "Ship" : "Gemi",
    "Vehicle" : "Araç",
    "Grasshopper" : "Çekirge",
    "Insect" : "Böcek",
    "Fish" : "Balık",
    "Shark" : "Köpek balığı",
    "Chicken" : "Tavuk",
    "Bird" : "Kuş",
    "Ostrich" : "Devekuşu",
    "Owl" : "Baykuş",
    "Salamander" : "Semender",
    "Frog" : "Kurbağa",
    "Turtle" : "Kaplumbağa",
    "Reptile" : "Sürüngen",
    "Lizard" : "Kertenkele",
    "Chameleon" : "Bukalemun",
    "Crocodile" : "Timsahgil",
    "Alligator" : "Timsah",
    "Scorpion" : "Akrep",
    "Spider" : "Örümcek",
    "Duck" : "Ördek",
    "Worm" : "Solucan",
    "Shell" : "İstiridye",
    "Snail" : "Salyangoz",
    "Crab" : "Yengeç",
    "Lobster" : "Istakoz",
    "Cooking" : "Yemek pişirme",
    "Penguin" : "Penguen",
    "Whale" : "Balina",
    "Dog" : "Köpek",
    "Wolf" : "Kurt",
    "Fox" : "Tilki",
    "Bear" : "Ayı",
    "Beetle" : "Kabuklu böcek",
    "Butterfly" : "Kelebek",
    "Rabbit" : "Tavşan",
    "Hippo" : "Su aygırı",
    "Cow" : "İnek",
    "Buffalo" : "Bufalo",
    "Sheep" : "Koyun",
    "Ape" : "Goril",
    "Monkey" : "Maymun",
    "Lemur" : "Lemur",
    "Elephant" : "Fil",
    "Panda" : "Panda",
    "Instrument" : "Enstruman",
    "Music" : "Müzik",
    "Aircraft" : "Uçak",
    "Airport" : "Hava alanı",
    "Tractor" : "Traktör",
    "Weapon" : "Silah",
    "Backpack" : "Sırt çantası",
    "Shop" : "Dükkan",
    "Office" : "Ofis",
    "Outdoor" : "Açık hava",
    "Living" : "Yaşam",
    "Tower" : "Kule",
    "Drinks" : "İçki",
    "Beverage" : "Alkollü içki",
    "Food" : "Yemek",
    "Shelter" : "Barınak",
    "Furniture" : "Mobilya",
    "Book" : "Kitap",
    "Train" : "Tren",
    "Butcher" : "Kasap",
    "Car" : "Otomobil",
    "Historic" : "Tarihi",
    "Boat" : "Bot",
    "Electronics" : "Elektronik",
    "Indoor" : "Kapalı mekan",
    "Church" : "Kilise",
    "Shoe" : "Ayakkabı",
    "Candle" : "Kandil",
    "Coffee" : "Kahve",
    "Keyboard" : "Klavye",
    "Computer" : "Bilgisayar",
    "Helmet" : "Kask",
    "Wall" : "Duvar",
    "Clock" : "Saat",
    "Dining" : "Akşam yemeği",
    "Kitchen" : "Mutfak",
    "Snow" : "Kar",
    "Dome" : "Kubbe",
    "Screen" : "Ekran",
    "Flag" : "Bayrak",
    "Truck" : "Kamyon",
    "Store" : "Mağaza",
    "Tool" : "Araç",
    "Pumpkin" : "Bal kabağı",
    "Vegetables" : "Sebze",
    "Photography" : "Fotoğrafçılık",
    "Library" : "Kitaplık",
    "Display" : "Sergi",
    "Bag" : "Çanta",
    "Cup" : "Kupa",
    "Rocks" : "Kayalar",
    "Bus" : "Otobüs",
    "Bowl" : "Kase",
    "Monitor" : "Ekran",
    "Bike" : "Bisiklet",
    "Scooter" : "Skutır",
    "Camping" : "Kampçılık",
    "Cart" : "Araba",
    "Piggy bank" : "Kumbara",
    "Bottle" : "Şişe",
    "Plate" : "Tabak",
    "Camera" : "Kamera",
    "Camper" : "Kampçı",
    "Barbecue" : "Mangal",
    "Basket" : "Sepet",
    "Diving" : "Dalma",
    "Snowmobile" : "Kar aracı",
    "Bridge" : "Köprü",
    "Couch" : "Koltuk",
    "Theater" : "Tiyatro",
    "Spoon" : "Kaşık",
    "Comic" : "Karikatür",
    "Soup" : "Çorba",
    "Dessert" : "Tatlı",
    "Bakery" : "Fırın",
    "Fruit" : "Meyve",
    "Pasta" : "Makarna",
    "Meat" : "Et",
    "Pizza" : "Pizza",
    "Wine" : "Şarap",
    "Alpine" : "Alp",
    "Mountains" : "Dağlar",
    "Sand" : "Kum",
    "Wool" : "Yün",
    "Glass" : "Cam",
    "Moment" : "An",
    "Info" : "Bilgiler",
    "Document" : "Belge",
    "Puzzle" : "Yap boz",
    "Heritage" : "Miras",
    "Safe" : "Kasa",
    "Bucket" : "Buket",
    "Baby" : "Bebek",
    "Cradle" : "Beşik",
    "Patio" : "Veranda",
    "Mountain" : "Dağ",
    "Radio telescope" : "Radyo teleskop",
    "Theme park" : "Tema parkı",
    "Festival" : "Festival",
    "Event" : "Etkinlik",
    "Monument" : "Anıt",
    "Balloon" : "Balon",
    "Crib" : "Ahır",
    "Fan" : "Vantilatör",
    "Gas station" : "Yakıt istasyonu",
    "Wood" : "Ahşap",
    "Bench" : "Tezgah",
    "Parking" : "Park yeri",
    "Traffic" : "Trafik",
    "Public transport" : "Toplu taşıma",
    "Umbrella" : "Şemsiye",
    "Stage" : "Sahne",
    "Toy" : "Oyuncak",
    "Vase" : "Vazo",
    "Mailbox" : "E-posta kutusu",
    "Sign" : "İşaret",
    "Gallery" : "Galeri",
    "Park" : "Park"
},
"nplurals=2; plural=(n > 1);");
