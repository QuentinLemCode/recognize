OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Recognise",
    "Smart media tagging for Nextcloud" : "Smart media tagging for Nextcloud",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\n## Ethical AI Rating\n### Rating for Photo object detection: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Photo face recognition: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Video action recognition: 🟢\n\nPositive:\n* the software for training and inferencing of this model is open source\n* the trained model is freely available, and thus can be ran on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n## Ethical AI Rating\n### Rating Music genre recognition: 🟡\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- php 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; FreeBSD, Alpine linux and thus also the official Nextcloud Docker container and Nextcloud AIO are *not* such systems)\n- For sub-native speed (using WASM mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux and thus also the official Nextcloud Docker container and also Nextcloud AIO)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n- This app is currently incompatible with the *Suspicious Login* app due to a dependency conflict (ie. you can only have one of the two installed)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js." : "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognises faces from contact photos\n* 📷 🏔 Recognises animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\n## Ethical AI Rating\n### Rating for Photo object detection: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Photo face recognition: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Video action recognition: 🟢\n\nPositive:\n* the software for training and inferencing of this model is open source\n* the trained model is freely available and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n## Ethical AI Rating\n### Rating Music genre recognition: 🟡\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available and thus can be run on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- PHP 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; FreeBSD, Alpine Linux and thus also the official Nextcloud Docker container and Nextcloud AIO are *not* such systems)\n- For sub-native speed (using WASM mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine Linux and thus also the official Nextcloud Docker container and also Nextcloud AIO)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n- This app is currently incompatible with the *Suspicious Login* app due to a dependency conflict (ie. you can only have one of the two installed)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js.",
    "Status" : "Status",
    "The machine learning models have been downloaded successfully." : "The machine learning models have been downloaded successfully.",
    "The machine learning models still need to be downloaded." : "The machine learning models still need to be downloaded.",
    "Could not execute the Node.js binary. You may need to set the path to a working binary manually." : "Could not execute the Node.js binary. You may need to set the path to a working binary manually.",
    "Background Jobs are not executed via cron. Recognize requires background jobs to be executed via cron." : "Background Jobs are not executed via cron. Recognise requires background jobs to be executed via cron.",
    "The app is installed and will automatically classify files in background processes." : "The app is installed and will automatically classify files in background processes.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "None of the tagging options below are currently selected. The app will currently do nothing.",
    "Face recognition is working. " : "Face recognition is working. ",
    "An error occurred during face recognition, please check the Nextcloud logs." : "An error occurred during face recognition, please check the Nextcloud logs.",
    "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs.",
    "Face recognition:" : "Face recognition:",
    "Queued files" : "Queued files",
    "Last classification: " : "Last classification: ",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)" : "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)",
    "Object recognition is working." : "Object recognition is working.",
    "An error occurred during object recognition, please check the Nextcloud logs." : "An error occurred during object recognition, please check the Nextcloud logs.",
    "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs.",
    "Object recognition:" : "Object recognition:",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "Enable object recognition (e.g. food, vehicles, landscapes)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)" : "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)",
    "Audio tagging" : "Audio tagging",
    "Audio recognition is working." : "Audio recognition is working.",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "An error occurred during audio recognition, please check the Nextcloud logs.",
    "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs.",
    "Music genre recognition:" : "Music genre recognition:",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)",
    "Video tagging" : "Video tagging",
    "Video recognition is working." : "Video recognition is working.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "An error occurred during video recognition, please check the Nextcloud logs.",
    "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs.",
    "Video recognition:" : "Video recognition:",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)" : "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)",
    "Reset" : "Reset",
    "Click the button below to remove all tags from all files that have been classified so far." : "Click the button below to remove all tags from all files that have been classified so far.",
    "Reset tags for classified files" : "Reset tags for classified files",
    "Click the button below to remove all face detections from all files that have been classified so far." : "Click the button below to remove all face detections from all files that have been classified so far.",
    "Reset faces for classified files" : "Reset faces for classified files",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "Click the button below to rescan all files in this instance and add them to the classifier queues.",
    "Rescan all files" : "Rescan all files",
    "Click the button below to clear the classifier queues and clear all background jobs. This is useful when you want to do the initial classification using the terminal command." : "Click the button below to clear the classifier queues and clear all background jobs. This is useful when you want to do the initial classification using the terminal command.",
    "Clear queues and background jobs" : "Clear queues and background jobs",
    "CPU cores" : "CPU cores",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used. (Note: In WASM mode, currently only 1 core can be used at all times.)" : "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used. (Note: In WASM mode, currently only 1 core can be used at all times.)",
    "Number of CPU Cores (0 for no limit)" : "Number of CPU Cores (0 for no limit)",
    "Tensorflow WASM mode" : "Tensorflow WASM mode",
    "Checking CPU" : "Checking CPU",
    "Could not check whether your machine supports native TensorFlow operation. Make sure your OS has GNU lib C, your CPU supports AVX instructions and you are running on x86. If one of these things is not the case, you will need to run in WASM mode." : "Could not check whether your machine supports native TensorFlow operation. Make sure your OS has GNU lib C, your CPU supports AVX instructions and you are running on x86. If one of these things is not the case, you will need to run in WASM mode.",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "Your machine supports native TensorFlow operation, you do not need WASM mode.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:",
    "Enable WASM mode" : "Enable WASM mode",
    "Recognize uses Tensorflow for running the machine learning models. Not all installations support Tensorflow, either because the CPU does not support AVX instructions, or because the platform is not x86 (ie. on a Raspberry Pi, which is ARM), or because the Operating System that your nextcloud runs on (when using docker, then that is the OS within the docker image) does not come with GNU lib C (for example Alpine Linux, which is also used by Nextcloud AIO). In most cases, even if you installation does not support native Tensorflow operation, you can still run Tensorflow using WebAssembly (WASM) in Node.js. This is somewhat slower but still works." : "Recognize uses Tensorflow for running the machine learning models. Not all installations support Tensorflow, either because the CPU does not support AVX instructions, or because the platform is not x86 (ie. on a Raspberry Pi, which is ARM), or because the Operating System that your nextcloud runs on (when using docker, then that is the OS within the docker image) does not come with GNU lib C (for example Alpine Linux, which is also used by Nextcloud AIO). In most cases, even if you installation does not support native Tensorflow operation, you can still run Tensorflow using WebAssembly (WASM) in Node.js. This is somewhat slower but still works.",
    "Tensorflow GPU mode" : "Tensorflow GPU mode",
    "Enable GPU mode" : "Enable GPU mode",
    "Like most machine learning models, recognize will run even faster when using a GPU. Setting this up is non-trivial but works well when everything is setup correctly." : "Like most machine learning models, recognize will run even faster when using a GPU. Setting this up is non-trivial but works well when everything is setup correctly.",
    "Learn how to setup GPU mode with recognize" : "Learn how to setup GPU mode with recognize",
    "Node.js" : "Node.js",
    "Checking Node.js" : "Checking Node.js",
    "Node.js {version} binary was installed successfully." : "Node.js {version} binary was installed successfully.",
    "Checking libtensorflow" : "Checking libtensorflow",
    "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode." : "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode.",
    "Successfully loaded libtensorflow in Node.js, but couldn't load GPU. Make sure CUDA Toolkit and cuDNN are installed and accessible, or turn off GPU mode." : "Successfully loaded libtensorflow in Node.js, but couldn't load GPU. Make sure CUDA Toolkit and cuDNN are installed and accessible, or turn off GPU mode.",
    "Libtensorflow was loaded successfully into Node.js." : "Libtensorflow was loaded successfully into Node.js.",
    "Could not load Tensorflow WASM in Node.js. Something is wrong with your setup." : "Could not load Tensorflow WASM in Node.js. Something is wrong with your setup.",
    "Tensorflow WASM was loaded successfully into Node.js." : "Tensorflow WASM was loaded successfully into Node.js.",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v14.17 and newer v14 releases." : "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v14.17 and newer v14 releases.",
    "Terminal commands" : "Terminal commands",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "To download all models preliminary to executing the classification jobs, run the following command on the server terminal.",
    "To trigger a full classification run, run the following command on the server terminal. (The classification will run in multiple background jobs which can run in parallel.)" : "To trigger a full classification run, run the following command on the server terminal. (The classification will run in multiple background jobs which can run in parallel.)",
    "To run a full classification run on the terminal, run the following. (The classification will run in sequence inside your terminal.)" : "To run a full classification run on the terminal, run the following. (The classification will run in sequence inside your terminal.)",
    "Before running a full initial classification run on the terminal, you should stop all background processing that recognize scheduled upon installation to avoid interference." : "Before running a full initial classification run on the terminal, you should stop all background processing that recognize scheduled upon installation to avoid interference.",
    "To run a face clustering run on for each user in the terminal, run the following. (The clustering will run in sequence inside your terminal.)" : "To run a face clustering run on for each user in the terminal, run the following. (The clustering will run in sequence inside your terminal.)",
    "To remove all face clusters but keep the raw detected faces run the following on the terminal:" : "To remove all face clusters but keep the raw detected faces run the following on the terminal:",
    "To remove all detected faces and face clusters run the following on the terminal:" : "To remove all detected faces and face clusters run the following on the terminal:",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "You can reset the tags of all files that have been previously classified by Recognise with the following command:",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "You can delete all tags that no longer have any files associated with them with the following command:",
    "To remove tags that were created by recognize version 2 from all files run the following on the terminal:" : "To remove tags that were created by recognize version 2 from all files run the following on the terminal:",
    "Your server does not support AVX instructions" : "Your server does not support AVX instructions",
    "Your server does not have an x86 64-bit CPU" : "Your server does not have an x86 64-bit CPU",
    "Your server uses musl libc" : "Your server uses musl libc",
    "Failed to load settings" : "Failed to load settings",
    "Failed to save settings" : "Failed to save settings",
    "never" : "never",
    "{time} ago" : "{time} ago",
    "Cat" : "Cat",
    "Animal" : "Animal",
    "Wildlife" : "Wildlife",
    "Nature" : "Nature",
    "Puma" : "Puma",
    "Leopard" : "Leopard",
    "Lion" : "Lion",
    "Wild cat" : "Wild cat",
    "Cheetah" : "Cheetah",
    "Seashore" : "Seashore",
    "Beach" : "Beach",
    "Water" : "Water",
    "Lakeside" : "Lakeside",
    "Flower" : "Flower",
    "Plant" : "Plant",
    "Window" : "Window",
    "Architecture" : "Architecture",
    "Stairs" : "Stairs",
    "Building" : "Building",
    "Field" : "Field",
    "Farm" : "Farm",
    "Landscape" : "Landscape",
    "Portrait" : "Portrait",
    "People" : "People",
    "Fashion" : "Fashion",
    "Ship" : "Ship",
    "Vehicle" : "Vehicle",
    "Grasshopper" : "Grasshopper",
    "Insect" : "Insect",
    "Fish" : "Fish",
    "Shark" : "Shark",
    "Chicken" : "Chicken",
    "Bird" : "Bird",
    "Ostrich" : "Ostrich",
    "Owl" : "Owl",
    "Salamander" : "Salamander",
    "Frog" : "Frog",
    "Turtle" : "Turtle",
    "Reptile" : "Reptile",
    "Lizard" : "Lizard",
    "Chameleon" : "Chameleon",
    "Crocodile" : "Crocodile",
    "Alligator" : "Alligator",
    "Scorpion" : "Scorpion",
    "Spider" : "Spider",
    "Duck" : "Duck",
    "Worm" : "Worm",
    "Shell" : "Shell",
    "Snail" : "Snail",
    "Crab" : "Crab",
    "Lobster" : "Lobster",
    "Cooking" : "Cooking",
    "Penguin" : "Penguin",
    "Whale" : "Whale",
    "Dog" : "Dog",
    "Wolf" : "Wolf",
    "Fox" : "Fox",
    "Bear" : "Bear",
    "Beetle" : "Beetle",
    "Butterfly" : "Butterfly",
    "Rabbit" : "Rabbit",
    "Hippo" : "Hippo",
    "Cow" : "Cow",
    "Buffalo" : "Buffalo",
    "Sheep" : "Sheep",
    "Ape" : "Ape",
    "Monkey" : "Monkey",
    "Lemur" : "Lemur",
    "Elephant" : "Elephant",
    "Panda" : "Panda",
    "Instrument" : "Instrument",
    "Music" : "Music",
    "Aircraft" : "Aircraft",
    "Airport" : "Airport",
    "Tractor" : "Tractor",
    "Weapon" : "Weapon",
    "Backpack" : "Backpack",
    "Shop" : "Shop",
    "Office" : "Office",
    "Outdoor" : "Outdoor",
    "Living" : "Living",
    "Tower" : "Tower",
    "Drinks" : "Drinks",
    "Beverage" : "Beverage",
    "Food" : "Food",
    "Shelter" : "Shelter",
    "Furniture" : "Furniture",
    "Book" : "Book",
    "Train" : "Train",
    "Butcher" : "Butcher",
    "Car" : "Car",
    "Historic" : "Historic",
    "Boat" : "Boat",
    "Electronics" : "Electronics",
    "Indoor" : "Indoor",
    "Church" : "Church",
    "Shoe" : "Shoe",
    "Candle" : "Candle",
    "Coffee" : "Coffee",
    "Keyboard" : "Keyboard",
    "Computer" : "Computer",
    "Helmet" : "Helmet",
    "Wall" : "Wall",
    "Clock" : "Clock",
    "Dining" : "Dining",
    "Kitchen" : "Kitchen",
    "Snow" : "Snow",
    "Dome" : "Dome",
    "Screen" : "Screen",
    "Flag" : "Flag",
    "Truck" : "Truck",
    "Store" : "Store",
    "Tool" : "Tool",
    "Pumpkin" : "Pumpkin",
    "Vegetables" : "Vegetables",
    "Photography" : "Photography",
    "Library" : "Library",
    "Display" : "Display",
    "Bag" : "Bag",
    "Cup" : "Cup",
    "Rocks" : "Rocks",
    "Bus" : "Bus",
    "Bowl" : "Bowl",
    "Monitor" : "Monitor",
    "Bike" : "Bike",
    "Scooter" : "Scooter",
    "Camping" : "Camping",
    "Cart" : "Cart",
    "Piggy bank" : "Piggy bank",
    "Bottle" : "Bottle",
    "Plate" : "Plate",
    "Camera" : "Camera",
    "Camper" : "Camper",
    "Barbecue" : "Barbecue",
    "Basket" : "Basket",
    "Diving" : "Diving",
    "Snowmobile" : "Snowmobile",
    "Bridge" : "Bridge",
    "Couch" : "Couch",
    "Theater" : "Theater",
    "Spoon" : "Spoon",
    "Comic" : "Comic",
    "Soup" : "Soup",
    "Dessert" : "Dessert",
    "Bakery" : "Bakery",
    "Fruit" : "Fruit",
    "Pasta" : "Pasta",
    "Meat" : "Meat",
    "Pizza" : "Pizza",
    "Wine" : "Wine",
    "Alpine" : "Alpine",
    "Mountains" : "Mountains",
    "Sand" : "Sand",
    "Wool" : "Wool",
    "Glass" : "Glass",
    "Moment" : "Moment",
    "Info" : "Info",
    "Document" : "Document",
    "Puzzle" : "Puzzle",
    "Heritage" : "Heritage",
    "Safe" : "Safe",
    "Bucket" : "Bucket",
    "Baby" : "Baby",
    "Cradle" : "Cradle",
    "Patio" : "Patio",
    "Mountain" : "Mountain",
    "Radio telescope" : "Radio telescope",
    "Theme park" : "Theme park",
    "Festival" : "Festival",
    "Event" : "Event",
    "Monument" : "Monument",
    "Balloon" : "Balloon",
    "Crib" : "Crib",
    "Fan" : "Fan",
    "Gas station" : "Gas station",
    "Wood" : "Wood",
    "Bench" : "Bench",
    "Parking" : "Parking",
    "Traffic" : "Traffic",
    "Public transport" : "Public transport",
    "Umbrella" : "Umbrella",
    "Stage" : "Stage",
    "Toy" : "Toy",
    "Vase" : "Vase",
    "Mailbox" : "Mailbox",
    "Sign" : "Sign",
    "Gallery" : "Gallery",
    "Park" : "Park"
},
"nplurals=2; plural=(n != 1);");
