OC.L10N.register(
    "recognize",
    {
    "Recognize" : "ئېتىراپ قىلىڭ",
    "Smart media tagging and face recognition with on-premises machine learning models" : "نەق مەيدان ماشىنا ئۆگىنىش ئەندىزىسى بىلەن ئەقلىي ئىقتىدارلىق مېدىيا بەلگىسى ۋە چىراي تونۇش",
    "Smart media tagging and face recognition with on-premises machine learning models.\nThis app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* 🎥 🤸 Recognizes human actions on video\n\n⚡ Tagging works via Nextcloud's Collaborative Tags\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos and videos with the photos app\n\nModel sizes:\n\n * Object recognition: 1GB\n * Landmark recognition: 300MB\n * Video action recognition: 50MB\n * Music genre recognition: 50MB\n\n## Ethical AI Rating\n### Rating for Photo object detection: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Photo face recognition: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Video action recognition: 🟢\n\nPositive:\n* the software for training and inferencing of this model is open source\n* the trained model is freely available, and thus can be ran on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n## Ethical AI Rating\n### Rating Music genre recognition: 🟡\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- php 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; FreeBSD, Alpine linux and thus also the official Nextcloud Docker container and Nextcloud AIO are *not* such systems)\n- For sub-native speed (using WASM mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux and thus also the official Nextcloud Docker container and also Nextcloud AIO)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n- This app is currently incompatible with the *Suspicious Login* app due to a dependency conflict (ie. you can only have one of the two installed)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js." : "نەق مەيدان ماشىنا ئۆگىنىش ئەندىزىسى بىلەن ئەقلىي ئىقتىدارلىق مېدىيا بەلگىسى ۋە چىراي تونۇش.\nبۇ ئەپ سىزنىڭ مېدىيا توپلىمىڭىزدىن ئۆتىدۇ ھەمدە ماس كېلىدىغان بەلگىلەرنى قوشىدۇ ، رەسىم ۋە مۇزىكىڭىزنى ئاپتوماتىك تۈرگە ئايرىيدۇ.\n\n* 📷 contact ئالاقىلىشىش رەسىملىرىدىكى چىرايلارنى تونۇيدۇ\n* Animals animals ھايۋانات ، مەنزىرە ، يېمەكلىك ، ماشىنا ، بىنا ۋە باشقا نەرسىلەرنى تونۇيدۇ\n* 📷 mark بەلگە ۋە ئابىدىلەرنى تونۇيدۇ\n* 👂 music مۇزىكا ژانىرىنى تونۇيدۇ\n* 🎥 video سىندىكى ئىنسانلارنىڭ ھەرىكىتىنى تونۇيدۇ\n\n⚡ خەتكۈچ Nextcloud نىڭ ھەمكارلىق خەتكۈچلىرى ئارقىلىق ئىشلەيدۇ\n  * Audi ئۈندىدار دېتالى ئارقىلىق بەلگە قويۇلغان مۇزىكىڭىزنى ئاڭلاڭ\n  * Photos رەسىم ئەپى بىلەن بەلگە قويۇلغان رەسىم ۋە سىنلىرىڭىزنى كۆرۈڭ\n\nمودېل چوڭلۇقى:\n\n * ئوبيېكت تونۇش: 1GB\n بەلگە خاراكتېرلىك تونۇش: 300MB\n * سىن ھەرىكىتىنى تونۇش: 50MB\n * مۇزىكا ژانىرىنى تونۇش: 50MB\n\n## ئەخلاقىي AI دەرىجىسى\n### رەسىم ئوبيېكتىنى بايقاشنىڭ دەرىجىسى: 🟢\n\nئاكتىپ:\n* بۇ مودېلنى تەربىيىلەش ۋە يەكۈنلەش يۇمشاق دېتالى ئوچۇق مەنبە\n* تەربىيەلەنگەن مودېلنى ھەقسىز ئىشلەتكىلى بولىدۇ ، شۇڭا نەق مەيداندا ئىجرا قىلغىلى بولىدۇ\n* تەربىيىلەش سانلىق مەلۇماتلىرى ھەقسىز بولۇپ ، بىر تەرەپلىمە قاراشنى تەكشۈرۈش ياكى تۈزىتىش ياكى ئىقتىدار ۋە CO2 ئىشلىتىشنى ئەلالاشتۇرۇش ئىمكانىيىتىگە ئىگە قىلىدۇ.\n\n### رەسىم چىراي تونۇشنىڭ دەرىجىسى: 🟢\n\nئاكتىپ:\n* بۇ مودېلنى تەربىيىلەش ۋە يەكۈنلەش يۇمشاق دېتالى ئوچۇق مەنبە\n* تەربىيەلەنگەن مودېلنى ھەقسىز ئىشلەتكىلى بولىدۇ ، شۇڭا نەق مەيداندا ئىجرا قىلغىلى بولىدۇ\n* تەربىيىلەش سانلىق مەلۇماتلىرى ھەقسىز بولۇپ ، بىر تەرەپلىمە قاراشنى تەكشۈرۈش ياكى تۈزىتىش ياكى ئىقتىدار ۋە CO2 ئىشلىتىشنى ئەلالاشتۇرۇش ئىمكانىيىتىگە ئىگە قىلىدۇ.\n\n### سىن ھەرىكىتىنى تونۇش دەرىجىسى: 🟢\n\nئاكتىپ:\n* بۇ مودېلنى تەربىيىلەش ۋە يەكۈنلەش يۇمشاق دېتالى ئوچۇق مەنبە\n* تەربىيەلەنگەن مودېلنى ھەقسىز ئىشلەتكىلى بولىدۇ ، شۇڭا نەق مەيداندا ئىجرا قىلغىلى بولىدۇ\n* تەربىيىلەش سانلىق مەلۇماتلىرى ھەقسىز بولۇپ ، بىر تەرەپلىمە قاراشنى تەكشۈرۈش ياكى تۈزىتىش ياكى ئىقتىدار ۋە CO2 ئىشلىتىشنى ئەلالاشتۇرۇش ئىمكانىيىتىگە ئىگە قىلىدۇ.\n\n## ئەخلاقىي AI دەرىجىسى\n### باھالاش مۇزىكا ژانىرىنى تونۇش: 🟡\n\nئاكتىپ:\n* بۇ مودېلنى تەربىيىلەش ۋە يەكۈنلەش يۇمشاق دېتالى ئوچۇق مەنبە\n* تەربىيەلەنگەن مودېلنى ھەقسىز ئىشلەتكىلى بولىدۇ ، شۇڭا نەق مەيداندا ئىجرا قىلغىلى بولىدۇ\n\nسەلبىي:\n* تەربىيىلەش سانلىق مەلۇماتلىرىنى ئەركىن ئىشلەتكىلى بولمايدۇ ، بۇ سىرتقى تەرەپلەرنىڭ بىر تەرەپلىمە قاراشنى تەكشۈرۈش ۋە تۈزىتىش ياكى مودېلنىڭ ئىقتىدارى ۋە CO2 ئىشلىتىلىشىنى ئەلالاشتۇرۇش ئىقتىدارىنى چەكلەيدۇ.\n\nNextcloud ئەخلاقىي AI دەرىجىسى [بىلوگىمىزدا] (https://nextcloud.com/blog/nextcloud-ethical-ai-rating/) ھەققىدىكى تەپسىلاتلار.\n\nقاچىلاپ بولغاندىن كېيىن ، باشقۇرۇش تەڭشىكىدە خەتكۈچنى قوزغىتالايسىز.\n\nتەلەپلەر:\n- php 7.4 and above\n- ئەپ «ھەمكارلىق بەلگىسى» قوزغىتىلدى\n- يەرلىك سۈرئەت ئۈچۈن:\n  بىر تەرەپ قىلغۇچ: x86 64 بىتلىق (AVX كۆرسەتمىسىنى قوللاپ)\n  - glibc سىستېمىسى (ئادەتتە لىنۇكىسنىڭ ئۆلچىمى ؛ FreeBSD ، Alpine linux ۋە شۇڭا رەسمىي Nextcloud Docker قاچىسى ۋە Nextcloud AIO * بۇ خىل سىستېمىلار ئەمەس).\n- يەرلىك تېز سۈرئەتتە (WASM ھالىتىنى ئىشلىتىپ)\n  - بىر تەرەپ قىلغۇچ: x86 64 بىتلىق ، arm64 ، armv7l (AVX لازىم ئەمەس)\n  - glibc ياكى مۇسكۇلى بار سىستېما (Alpine linux نى ئۆز ئىچىگە ئالىدۇ ، شۇڭا رەسمىي Nextcloud Docker قاچىسى ۋە Nextcloud AIO نىمۇ ئۆز ئىچىگە ئالىدۇ)\n- ~ 4GB لىق ھەقسىز RAM (ئەگەر ئۇنى ئۈزۈۋەتسىڭىز ، ئالماشتۇرۇشىڭىزنىڭ بار-يوقلۇقىنى جەزملەشتۈرۈڭ)\n- بۇ ئەپ تايىنىشچانلىقى سەۋەبىدىن * گۇمانلىق كىرىش * دېتالى بىلەن ماسلاشمايدۇ (يەنى سىز پەقەت ئىككىسىنىڭ بىرىنىلا قاچىلىيالايسىز)\n\nبۇ دېتال بۇلۇت تەمىنلىگۈچىلەر ياكى شۇنىڭغا ئوخشاش مۇلازىمەتلەرگە ھېچقانداق سەزگۈر سانلىق مەلۇمات ئەۋەتمەيدۇ. بارلىق بىر تەرەپ قىلىش Node.js. دا ئىجرا بولۇۋاتقان Tensorflow.js نى ئىشلىتىپ Nextcloud كومپيۇتېرىڭىزدا ئېلىپ بېرىلىدۇ.",
    "Status" : "ھالەت",
    "The machine learning models have been downloaded successfully." : "ماشىنا ئۆگىنىش مودېلى مۇۋەپپەقىيەتلىك چۈشۈرۈلدى.",
    "The machine learning models still need to be downloaded." : "ماشىنا ئۆگىنىش ئەندىزىسىنى يەنىلا چۈشۈرۈش كېرەك.",
    "Could not execute the Node.js binary. You may need to set the path to a working binary manually." : "Node.js ئىككىلىك سىستېمىنى ئىجرا قىلالمىدى. قولدا ئىشلەيدىغان ئىككىلىك سىستېمىغا قول سېلىشىڭىز كېرەك.",
    "Background Jobs are not executed via cron. Recognize requires background jobs to be executed via cron." : "تەگلىك خىزمەتلەر cron ئارقىلىق ئىجرا قىلىنمايدۇ. ئېتىراپ قىلىش تەگلىك خىزمەتلىرىنىڭ cron ئارقىلىق ئىجرا قىلىنىشىنى تەلەپ قىلىدۇ.",
    "The app is installed and will automatically classify files in background processes." : "بۇ دېتال قاچىلانغان بولۇپ ، ئارقا كۆرۈنۈش جەريانىدىكى ھۆججەتلەرنى ئاپتوماتىك تۈرگە ئايرىيدۇ.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "تۆۋەندىكى خەتكۈچ تاللاشلىرىنىڭ ھېچقايسىسى تاللانمىدى. بۇ دېتال ھازىر ھېچقانداق ئىش قىلمايدۇ.",
    "Face recognition" : "چىراي تونۇش",
    "Face recognition is working. " : "چىراي تونۇش خىزمىتى ئىشلەۋاتىدۇ. ",
    "An error occurred during face recognition, please check the Nextcloud logs." : "چىراي تونۇش جەريانىدا خاتالىق كۆرۈلدى ، Nextcloud خاتىرىسىنى تەكشۈرۈپ بېقىڭ.",
    "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "چىراي تونۇش توغرىسىدىكى ئەھۋال دوكلاتىنى ساقلاش. ئەگەر بۇ ئۇچۇر 15 مىنۇتتىن ئېشىپ كەتسە ، Nextcloud خاتىرىسىنى تەكشۈرۈپ بېقىڭ.",
    "Face recognition:" : "چىراي تونۇش:",
    "Queued files" : "ئۆچرەتتە تۇرغان ھۆججەتلەر",
    "Last classification: " : "ئاخىرقى تۈرگە ئايرىش: ",
    "Scheduled background jobs: " : "پىلانلانغان ئارقا كۆرۈنۈش خىزمەتلىرى: ",
    "Last background job execution: " : "ئاخىرقى تەگلىك خىزمەت ئىجراسى: ",
    "There are queued files in the face recognition queue but no background job is scheduled to process them." : "چىراي تونۇش لىنىيىسىدە ئۆچرەتتە تۇرغان ھۆججەتلەر بار ، ئەمما ئۇلارنى بىر تەرەپ قىلىش ئارقا كۆرۈنۈشى يوق.",
    "Face clustering:" : "يۈز توپى:",
    "faces left to cluster" : "چىرايلار توپىغا قالدى",
    "Last clustering run: " : "ئاخىرقى قېتىم توپلاش: ",
    "A minimum of 120 faces per user is necessary for clustering to kick in" : "توپلاش ئۈچۈن ھەر بىر ئىشلەتكۈچىگە كەم دېگەندە 120 يۈز لازىم",
    "Enable face recognition (groups photos by faces that appear in them; UI is in the photos app)" : "چىراي تونۇشنى قوزغىتىڭ (ئۇلاردا كۆرۈنگەن چىرايلارنىڭ رەسىملىرى ؛ UI رەسىم دېتالىدا)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)" : "ھەر بىر خىزمەتنى بىر تەرەپ قىلىدىغان ھۆججەت سانى (ھەر 5 مىنۇتتا بىر خىزمەت ئورۇنلاشتۇرۇلىدۇ ؛ نورمال مەشغۇلات ~ 500 ياكى ئۇنىڭدىن يۇقىرى ، WASM ھالەتتە ~ 50 تەۋسىيە قىلىنىدۇ)",
    "Object detection & landmark recognition" : "ئوبيېكتنى بايقاش ۋە بەلگە خاراكتېرلىك تونۇش",
    "Object recognition is working." : "ئوبيېكت تونۇش خىزمىتى ئىشلەۋاتىدۇ.",
    "An error occurred during object recognition, please check the Nextcloud logs." : "ئوبيېكت تونۇش جەريانىدا خاتالىق كۆرۈلدى ، Nextcloud خاتىرىسىنى تەكشۈرۈپ بېقىڭ.",
    "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "ئوبيېكت تونۇشتىكى ھالەت دوكلاتىنى ساقلاش. ئەگەر بۇ ئۇچۇر 15 مىنۇتتىن ئېشىپ كەتسە ، Nextcloud خاتىرىسىنى تەكشۈرۈپ بېقىڭ.",
    "Object recognition:" : "ئوبيېكت تونۇش:",
    "There are queued files in the object detection queue but no background job is scheduled to process them." : "ئوبيېكتنى بايقاش ئۆچرەتتە ئۆچرەتتە تۇرغان ھۆججەتلەر بار ، ئەمما ئۇلارنى بىر تەرەپ قىلىش ئارقا كۆرۈنۈشى يوق.",
    "Landmark recognition is working." : "بەلگە خاراكتېرلىك تونۇش خىزمىتى ئىشلەۋاتىدۇ.",
    "An error occurred during landmark recognition, please check the Nextcloud logs." : "بەلگە خاراكتېرلىك تونۇش جەريانىدا خاتالىق كۆرۈلدى ، Nextcloud خاتىرىسىنى تەكشۈرۈپ بېقىڭ.",
    "Waiting for status reports on landmark recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "بەلگە خاراكتېرلىك تونۇش توغرىسىدىكى ھالەت دوكلاتىنى ساقلاش. ئەگەر بۇ ئۇچۇر 15 مىنۇتتىن ئېشىپ كەتسە ، Nextcloud خاتىرىسىنى تەكشۈرۈپ بېقىڭ.",
    "Landmark recognition:" : "بەلگە خاراكتېرلىك تونۇش:",
    "There are queued files in the landmarks queue but no background job is scheduled to process them." : "بەلگە خاراكتېرلىك ئۆچرەتتە ئۆچرەتتە تۇرغان ھۆججەتلەر بار ، ئەمما ئۇلارنى بىر تەرەپ قىلىش ئارقا كۆرۈنۈشى يوق.",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "جىسىمنى تونۇشنى قوزغىتىڭ (مەسىلەن يېمەكلىك ، ماشىنا ، مەنزىرە)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)" : "ھەر بىر خىزمەتنى بىر تەرەپ قىلىدىغان ھۆججەت سانى (ھەر 5 مىنۇتتا بىر خىزمەت ئورۇنلاشتۇرۇلىدۇ ؛ نورمال مەشغۇلات ~ 100 ياكى ئۇنىڭدىن يۇقىرى ، WASM ھالىتى ~ 20 دە تەۋسىيە قىلىنىدۇ)",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "بەلگە خاراكتېرلىك تونۇشنى قوزغىتىڭ (مەسىلەن ئېيففېل مۇنارى ، ئالتۇن دەرۋازا كۆۋرۈكى)",
    "Audio tagging" : "ئاۋازلىق خەتكۈچ",
    "Audio recognition is working." : "ئاۋاز تونۇش خىزمىتى ئىشلەۋاتىدۇ.",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "ئاۋاز پەرقلەندۈرۈش جەريانىدا خاتالىق كۆرۈلدى ، Nextcloud خاتىرىسىنى تەكشۈرۈپ بېقىڭ.",
    "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "ئاۋاز تونۇشتىكى ھالەت دوكلاتىنى ساقلاش. ئەگەر بۇ ئۇچۇر 15 مىنۇتتىن ئېشىپ كەتسە ، Nextcloud خاتىرىسىنى تەكشۈرۈپ بېقىڭ.",
    "Music genre recognition:" : "مۇزىكا ژانىرىنى تونۇش:",
    "There are queued files but no background job is scheduled to process them." : "ئۆچىرەتتە تۇرغان ھۆججەتلەر بار ، ئەمما ئۇلارنى بىر تەرەپ قىلىدىغان ئارقا كۆرۈنۈش خىزمىتى يوق.",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "مۇزىكا ژانىرىنى تونۇشنى قوزغىتىڭ (مەسىلەن مودا ، تاش ، خەلق ، مېتال ، يېڭى دەۋر)",
    "Video tagging" : "سىن خەتكۈچ",
    "Video recognition is working." : "سىن تونۇش خىزمىتى ئىشلەۋاتىدۇ.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "سىن تونۇش جەريانىدا خاتالىق كۆرۈلدى ، Nextcloud خاتىرىسىنى تەكشۈرۈپ بېقىڭ.",
    "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "سىن تونۇشتىكى ھالەت دوكلاتىنى ساقلاش. ئەگەر بۇ ئۇچۇر 15 مىنۇتتىن ئېشىپ كەتسە ، Nextcloud خاتىرىسىنى تەكشۈرۈپ بېقىڭ.",
    "Video recognition:" : "سىن تونۇش:",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "ئىنسانلارنىڭ ھەرىكەت تونۇشىنى قوزغىتىڭ (مەسىلەن ، قول چېلىشىش ، ۋاسكېتبول ئويناش ، خۇلا ھالقا)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)" : "ھەر بىر خىزمەتنى بىر تەرەپ قىلىدىغان ھۆججەت سانى (ھەر 5 مىنۇتتا بىر خىزمەت ئورۇنلاشتۇرۇلىدۇ ؛ نورمال مەشغۇلات ~ 20 ياكى ئۇنىڭدىن يۇقىرى ، WASM ھالىتى ~ 5 دە تەۋسىيە قىلىنىدۇ)",
    "Reset" : "ئەسلىگە قايتۇرۇش",
    "Click the button below to remove all tags from all files that have been classified so far." : "تۆۋەندىكى كۇنۇپكىنى چېكىپ ھازىرغىچە تۈرگە ئايرىلغان بارلىق ھۆججەتلەردىن بارلىق خەتكۈچلەرنى ئۆچۈرۈڭ.",
    "Reset tags for classified files" : "تۈرگە ئايرىلغان ھۆججەتلەرنىڭ خەتكۈچلىرىنى ئەسلىگە كەلتۈرۈش",
    "Click the button below to remove all face detections from all files that have been classified so far." : "تۆۋەندىكى كۇنۇپكىنى چېكىپ ، ھازىرغا قەدەر تۈرگە ئايرىلغان بارلىق ھۆججەتلەردىن يۈز بايقاشنى ئۆچۈرۈڭ.",
    "Reset faces for classified files" : "مەخپىي ھۆججەتلەرنىڭ يۈزىنى ئەسلىگە كەلتۈرۈش",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "تۆۋەندىكى كۇنۇپكىنى چېكىپ ، بۇ ھۆججەتتىكى بارلىق ھۆججەتلەرنى ئەسلىگە كەلتۈرۈڭ ۋە ئۇلارنى تۈرگە ئايرىپ ئۆچرەتكە قوشۇڭ.",
    "Rescan all files" : "بارلىق ھۆججەتلەرنى ئەسلىگە كەلتۈرۈڭ",
    "Click the button below to clear the classifier queues and clear all background jobs. This is useful when you want to do the initial classification using the terminal command." : "تۆۋەندىكى كۇنۇپكىنى چېكىپ تۈرگە ئايرىپ ئۆچرەتلەرنى تازىلاپ ، بارلىق تەگلىك خىزمەتلىرىنى تازىلاڭ. تېرمىنال بۇيرۇقىنى ئىشلىتىپ دەسلەپكى تۈرگە ئايرىشنى ئويلىسىڭىز بۇ پايدىلىق.",
    "Clear queues and background jobs" : "ئۆچرەت ۋە ئارقا خىزمەتلەرنى ئېنىقلاش",
    "Resource usage" : "بايلىق ئىشلىتىش",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used. (Note: In WASM mode, currently only 1 core can be used at all times.)" : "سۈكۈتتىكى ھالەتتە بارلىق ئىشلەتكىلى بولىدىغان مەركىزى بىر تەرەپ قىلغۇچ ئىشلىتىلىدۇ ، بۇ سىستېمىڭىزنى خېلى كۆپ يۈككە يۈكلىشى مۇمكىن. بۇنىڭدىن ساقلىنىش ئۈچۈن ، سىز ئىشلىتىلگەن CPU مەركىزىنىڭ مىقدارىنى چەكلىيەلەيسىز. (ئەسكەرتىش: WASM ھالەتتە ، ھازىر پەقەت 1 يادرونى ھەر ۋاقىت ئىشلىتىشكە بولىدۇ.)",
    "Number of CPU Cores (0 for no limit)" : "مەركىزى بىر تەرەپ قىلغۇچنىڭ سانى (چەكسىز 0)",
    "By default, recognize will only ever run one classifier process at a time. If you have a lot of resources available and want to run as many processes in parallel as possible, you can turn on concurrency here." : "سۈكۈتتىكى ھالەتتە ، ھەر قېتىمدا پەقەت بىرلا تۈرگە ئايرىش جەريانىنى ئىجرا قىلىدىغانلىقىنى تونۇپ يېتىڭ. ئەگەر سىزدە نۇرغۇن مەنبەلەر بار ھەمدە ئىمكانقەدەر پاراللېل ھالدا نۇرغۇن جەريانلارنى ئىجرا قىلماقچى بولسىڭىز ، بۇ يەردىن تەڭلىكنى ئاچسىڭىز بولىدۇ.",
    "Enable unlimited concurrency of classifier processes" : "تۈرگە ئايرىش جەريانىنىڭ چەكلىمىسىز ماسلىشىشچانلىقىنى قوزغىتىڭ",
    "Tensorflow WASM mode" : "Tensorflow WASM ھالىتى",
    "Checking CPU" : "CPU نى تەكشۈرۈش",
    "Could not check whether your machine supports native TensorFlow operation. Make sure your OS has GNU lib C, your CPU supports AVX instructions and you are running on x86. If one of these things is not the case, you will need to run in WASM mode." : "كومپيۇتېرىڭىزنىڭ يەرلىك TensorFlow مەشغۇلاتىنى قوللايدىغان ياكى قوللىمايدىغانلىقىنى تەكشۈرەلمىدىڭىز. مەشغۇلات سىستېمىڭىزدا GNU lib C بارلىقىغا كاپالەتلىك قىلىڭ ، مەركىزى بىر تەرەپ قىلغۇچ AVX كۆرسەتمىسىنى قوللايدۇ ، x86 دە ئىجرا بولۇۋاتىسىز. ئەگەر بۇ ئىشلارنىڭ بىرى بولمىسا ، WASM ھالەتتە ئىجرا قىلىشىڭىز كېرەك.",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "كومپيۇتېرىڭىز يەرلىك TensorFlow مەشغۇلاتىنى قوللايدۇ ، سىزگە WASM ھالىتى لازىم ئەمەس.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "WASM ھالىتى ئاپتوماتىك قوزغىتىلدى ، چۈنكى كومپيۇتېرىڭىز يەرلىك TensorFlow مەشغۇلاتىنى قوللىمايدۇ:",
    "Enable WASM mode" : "WASM ھالىتىنى قوزغىتىڭ",
    "Recognize uses Tensorflow for running the machine learning models. Not all installations support Tensorflow, either because the CPU does not support AVX instructions, or because the platform is not x86 (ie. on a Raspberry Pi, which is ARM), or because the Operating System that your nextcloud runs on (when using docker, then that is the OS within the docker image) does not come with GNU lib C (for example Alpine Linux, which is also used by Nextcloud AIO). In most cases, even if your installation does not support native Tensorflow operation, you can still run Tensorflow using WebAssembly (WASM) in Node.js. This is somewhat slower but still works." : "ماشىنا ئۆگىنىش ئەندىزىسىنى ئىجرا قىلىشتا Tensorflow نى ئىشلىتىدىغانلىقىنى ئېتىراپ قىلىڭ. مەركىزى بىر تەرەپ قىلغۇچ AVX كۆرسەتمىسىنى قوللىمىغاچقا ، ياكى سۇپا x86 ئەمەسلىكى ئۈچۈن (يەنى ARM بولغان Raspberry Pi دا) ياكى كېيىنكى بۇلۇت ئىجرا قىلىدىغان مەشغۇلات سىستېمىسى (Docker نى ئىشلەتكەندە) بارلىق قاچىلاشلار Tensorflow نى قوللىمايدۇ. ، ئۇنداقتا ئۇ دوكتۇر رەسىمىدىكى OS) GNU lib C بىلەن بىللە كەلمەيدۇ (مەسىلەن Alpine Linux ، ئۇ Nextcloud AIO تەرىپىدىنمۇ ئىشلىتىلىدۇ). كۆپىنچە ئەھۋاللاردا ، سىزنىڭ قاچىلىشىڭىز يەرلىك Tensorflow مەشغۇلاتىنى قوللىمىسىمۇ ، Node.js. دىكى WebAssembly (WASM) ئارقىلىق يەنىلا Tensorflow نى ئىجرا قىلالايسىز. بۇ بىر ئاز ئاستا بولسىمۇ يەنىلا ئىشلەيدۇ.",
    "Tensorflow GPU mode" : "Tensorflow GPU ھالىتى",
    "Enable GPU mode" : "GPU ھالىتىنى قوزغىتىڭ",
    "Like most machine learning models, Recognize will run even faster when using a GPU. Setting this up is non-trivial but works well when everything is setup correctly." : "كۆپىنچە ماشىنا ئۆگىنىش مودېللىرىغا ئوخشاش ، GPU ئىشلەتكەندە ئېتىراپ قىلىش تېخىمۇ تېز ئىجرا بولىدۇ. بۇنى تەڭشەش ئەرزىمەس ئىش ، ئەمما ھەممە نەرسە توغرا تەڭشەلگەندە ياخشى ئىشلەيدۇ.",
    "Learn how to setup GPU mode with Recognize" : "تونۇش ئارقىلىق GPU ھالىتىنى قانداق تەڭشەشنى ئۆگىنىۋېلىڭ",
    "Node.js" : "Node.js",
    "Checking Node.js" : "Node.js نى تەكشۈرۈش",
    "Node.js {version} binary was installed successfully." : "Node.js {version} ئىككىلىك مۇۋەپپەقىيەتلىك ئورنىتىلدى.",
    "Checking libtensorflow" : "Libtensorflow نى تەكشۈرۈش",
    "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode." : "Node.js. دا libtensorflow نى يۈكلىيەلمىدى. Libtensorflow نى قولدا ئورنىتىپ ياكى WASM ھالەتتە ئىجرا قىلسىڭىز بولىدۇ.",
    "Successfully loaded libtensorflow in Node.js, but couldn't load GPU. Make sure CUDA Toolkit and cuDNN are installed and accessible, or turn off GPU mode." : "Node.js غا libtensorflow نى مۇۋەپپەقىيەتلىك يۈكلىدى ، ئەمما GPU نى يۈكلىيەلمىدى. CUDA قورال قوراللىرى ۋە cuDNN نىڭ ئورنىتىلغان ۋە زىيارەت قىلىنىدىغانلىقىنى جەزملەشتۈرۈڭ ياكى GPU ھالىتىنى ئېتىۋېتىڭ.",
    "Libtensorflow was loaded successfully into Node.js." : "Libtensorflow مۇۋەپپەقىيەتلىك ھالدا Node.js. غا يۈكلەندى.",
    "Could not load Tensorflow WASM in Node.js. Something is wrong with your setup." : "Node.js. دا Tensorflow WASM نى يۈكلىيەلمىدى. سىزنىڭ تەڭشىشىڭىزدە خاتالىق بار.",
    "Tensorflow WASM was loaded successfully into Node.js." : "Tensorflow WASM مۇۋەپپەقىيەتلىك ھالدا Node.js. غا يۈكلەندى.",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v20.9 and newer v20 releases." : "ئەگەر ئەۋەتىلگەن Node.js ئىككىلىك سىستېمىسى مەلۇم سەۋەبلەر تۈپەيلىدىن سىستېمىڭىزدا ئىشلىمىسە ، ئىختىيارى node.js ئىككىلىك يولىغا يول قويالايسىز. ھازىر قوللايدىغان Node v20.9 ۋە يېڭى v20 ئېلان قىلىندى.",
    "For Nextcloud Snap users, you need to adjust this path to point to the snap's \"current\" directory as the pre-configured path will change with each update. For example, set it to \"/var/snap/nextcloud/current/nextcloud/extra-apps/recognize/bin/node\" instead of \"/var/snap/nextcloud/9337974/nextcloud/extra-apps/recognize/bin/node\"" : "Nextcloud Snap ئىشلەتكۈچىلىرىگە نىسبەتەن ، بۇ يولنى تەڭشەپ ، رەسىمنىڭ «نۆۋەتتىكى» مۇندەرىجىسىنى كۆرسىتىشىڭىز كېرەك ، چۈنكى ھەر بىر يېڭىلاش بىلەن ئالدىن تەڭشەلگەن يول ئۆزگىرىدۇ. مەسىلەن ، ئۇنى «/ var / snap / nextcloud / 9337974 / nextcloud / extra-apps / recognize / bin /» نىڭ ئورنىغا «/ var / snap / nextcloud / current / nextcloud / extra-apps / recognize / bin / node» قىلىپ تەڭشەڭ. node \"",
    "Classifier process priority" : "تۈرگە ئايرىش جەريانىنىڭ مۇھىم نۇقتىسى",
    "Checking Nice binary" : "Nice binary نى تەكشۈرۈش",
    "Could not find the Nice binary. You may need to set the path to a working binary manually." : "Nice ئىككىلىك سىستېمىنى تاپالمىدى. قولدا ئىشلەيدىغان ئىككىلىك سىستېمىغا قول سېلىشىڭىز كېرەك.",
    "Nice binary path" : "ياخشى ئىككىلىك يول",
    "Nice value to set the priority of the Node.js processes. The value can only be from 0 to 19 since the Node.js process runs without superuser privileges. The higher the nice value, the lower the priority of the process." : "Node.js جەريانلىرىنىڭ مۇھىم نۇقتىسىنى بەلگىلەيدىغان ياخشى قىممەت. Node.js جەريانى ئادەتتىن تاشقىرى ئىمتىيازسىز يۈرگەچكە ، قىممىتى پەقەت 0 دىن 19 گىچە بولىدۇ. چىرايلىق قىممەت قانچە يۇقىرى بولسا ، جەرياننىڭ مۇھىملىقى شۇنچە تۆۋەن بولىدۇ.",
    "Terminal commands" : "تېرمىنال بۇيرۇقلىرى",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "تۈرگە ئايرىش خىزمىتىنى ئىجرا قىلىشنىڭ دەسلەپكى بارلىق مودېللىرىنى چۈشۈرۈش ئۈچۈن ، مۇلازىمېتىر تېرمىنالىدا تۆۋەندىكى بۇيرۇقنى ئىجرا قىلىڭ.",
    "To trigger a full classification run, run the following command on the server terminal. (The classification will run in multiple background jobs which can run in parallel.)" : "تولۇق تۈرگە ئايرىشنى قوزغىتىش ئۈچۈن ، مۇلازىمېتىر تېرمىنالىدا تۆۋەندىكى بۇيرۇقنى ئىجرا قىلىڭ. (تۈرگە ئايرىش كۆپ خىل ئارقا كۆرۈنۈش خىزمىتىدە ئىجرا بولىدۇ.)",
    "To run a full classification run on the terminal, run the following. (The classification will run in sequence inside your terminal.)" : "تېرمىنالدا تولۇق تۈرگە ئايرىش ئۈچۈن تۆۋەندىكىنى ئىجرا قىلىڭ. (تۈرگە ئايرىش تېرمىنالىڭىزدا تەرتىپلىك ئىجرا بولىدۇ.)",
    "Before running a full initial classification run on the terminal, you should stop all background processing that Recognize scheduled upon installation to avoid interference." : "تېرمىنالدا دەسلەپكى دەسلەپكى تۈرگە ئايرىشنى ئىجرا قىلىشتىن بۇرۇن ، قاچىلاشتىن كېيىن تونۇغان بارلىق تەگلىك بىر تەرەپ قىلىشنى توختىتىشىڭىز كېرەك.",
    "To run a face clustering run on for each user in the terminal, run the following. Consider adding the parameter --batch-size 10000 for large libraries to avoid PHP memory exhaustion. (The clustering will run in sequence inside your terminal.)" : "تېرمىنالدىكى ھەر بىر ئىشلەتكۈچىگە يۈز توپلاشنى ئىجرا قىلىش ئۈچۈن تۆۋەندىكىلەرنى ئىجرا قىلىڭ. PHP ئىچكى ساقلىغۇچنىڭ خورىشىدىن ساقلىنىش ئۈچۈن ، چوڭ كۈتۈپخانىلارغا پارامېتىر - 10000 پارامېتىر قوشۇشنى ئويلاڭ. (توپلاش تېرمىنالىڭىزنىڭ ئىچىدە تەرتىپلىك ئىجرا بولىدۇ.)",
    "To remove all face clusters but keep the raw detected faces run the following on the terminal:" : "بارلىق يۈز گۇرۇپپىسىنى چىقىرىۋېتىش ، ئەمما خام بايقالغان چىرايلارنى تېرمىنالدا ئىجرا قىلىڭ:",
    "To remove all detected faces and face clusters run the following on the terminal:" : "بايقالغان بارلىق يۈز ۋە يۈز گۇرۇپپىسىنى ئۆچۈرۈش ئۈچۈن تېرمىنالدا تۆۋەندىكىدەك مەشغۇلات قىلىڭ:",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "تۆۋەندىكى بۇيرۇق بىلەن تونۇش ئارقىلىق تۈرگە ئايرىلغان بارلىق ھۆججەتلەرنىڭ خەتكۈچلىرىنى قايتا تەڭشىيەلەيسىز:",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "تۆۋەندىكى بۇيرۇق بىلەن ئۇلار بىلەن مۇناسىۋەتلىك ھۆججەت يوق بارلىق خەتكۈچلەرنى ئۆچۈرەلەيسىز:",
    "To remove tags that were created by Recognize version 2 from all files run the following on the terminal:" : "بارلىق ھۆججەتلەردىن 2-نەشرىنى تونۇش ئارقىلىق قۇرغان بەلگىلەرنى تېرمىنالدا ئىجرا قىلىڭ:",
    "Your server does not support AVX instructions" : "مۇلازىمېتىرىڭىز AVX كۆرسەتمىسىنى قوللىمايدۇ",
    "Your server does not have an x86 64-bit CPU" : "مۇلازىمېتىرىڭىزدا x86 64 بىتلىق مەركىزى بىر تەرەپ قىلغۇچ يوق",
    "Your server uses musl libc" : "مۇلازىمېتىرىڭىز musl libc نى ئىشلىتىدۇ",
    "Failed to load settings" : "تەڭشەكلەرنى يۈكلىيەلمىدى",
    "Failed to save settings" : "تەڭشەكلەرنى ساقلىيالمىدى",
    "never" : "ھەرگىز",
    "{time} ago" : "{time} ago",
    "Cat" : "مۈشۈك",
    "Animal" : "Animal",
    "Wildlife" : "ياۋايى ھايۋانلار",
    "Nature" : "تەبىئەت",
    "Puma" : "Puma",
    "Leopard" : "يىلپىز",
    "Lion" : "شىر",
    "Wild cat" : "ياۋا مۈشۈك",
    "Cheetah" : "چىتا",
    "Seashore" : "Seashore",
    "Beach" : "دېڭىز ساھىلى",
    "Water" : "سۇ",
    "Lakeside" : "Lakeside",
    "Flower" : "گۈل",
    "Plant" : "ئۆسۈملۈك",
    "Window" : "كۆزنەك",
    "Architecture" : "بىناكارلىق",
    "Stairs" : "باسقالار",
    "Building" : "بىنا",
    "Field" : "مەيدان",
    "Farm" : "دېھقانچىلىق مەيدانى",
    "Landscape" : "مەنزىرە",
    "Portrait" : "Portrait",
    "People" : "كىشىلەر",
    "Fashion" : "مودا",
    "Ship" : "پاراخوت",
    "Vehicle" : "ماشىنا",
    "Grasshopper" : "Grasshopper",
    "Insect" : "ھاشارات",
    "Fish" : "Fish",
    "Shark" : "Shark",
    "Chicken" : "توخۇ",
    "Bird" : "قۇش",
    "Ostrich" : "Ostrich",
    "Owl" : "Owl",
    "Salamander" : "Salamander",
    "Frog" : "پاقا",
    "Turtle" : "تاشپاقا",
    "Reptile" : "Reptile",
    "Lizard" : "كەسلەنچۈك",
    "Chameleon" : "Chameleon",
    "Crocodile" : "تىمساھ",
    "Alligator" : "Alligator",
    "Scorpion" : "چايان",
    "Spider" : "ئۆمۈچۈك",
    "Duck" : "ئۆردەك",
    "Worm" : "قۇرت",
    "Shell" : "Shell",
    "Snail" : "Snail",
    "Crab" : "قىسقۇچپاقا",
    "Lobster" : "Lobster",
    "Cooking" : "تاماق ئېتىش",
    "Penguin" : "Penguin",
    "Whale" : "Whale",
    "Dog" : "ئىت",
    "Wolf" : "بۆرە",
    "Fox" : "تۈلكە",
    "Bear" : "ئېيىق",
    "Beetle" : "Beetle",
    "Butterfly" : "كېپىنەك",
    "Rabbit" : "توشقان",
    "Hippo" : "Hippo",
    "Cow" : "كالا",
    "Buffalo" : "Buffalo",
    "Sheep" : "قوي",
    "Ape" : "Ape",
    "Monkey" : "مايمۇن",
    "Lemur" : "Lemur",
    "Elephant" : "پىل",
    "Panda" : "Panda",
    "Instrument" : "Instrument",
    "Music" : "مۇزىكا",
    "Aircraft" : "ئايروپىلان",
    "Airport" : "ئايرودروم",
    "Tractor" : "تىراكتور",
    "Weapon" : "قورال",
    "Backpack" : "سومكا",
    "Shop" : "دۇكان",
    "Office" : "Office",
    "Outdoor" : "سىرتتا",
    "Living" : "ياشاش",
    "Tower" : "مۇنار",
    "Drinks" : "ئىچىملىكلەر",
    "Beverage" : "ئىچىملىك",
    "Food" : "يېمەكلىك",
    "Shelter" : "Shelter",
    "Furniture" : "ئۆي جاھازلىرى",
    "Book" : "كىتاب",
    "Train" : "پويىز",
    "Butcher" : "قاسساپ",
    "Car" : "ماشىنا",
    "Historic" : "تارىخى",
    "Boat" : "كېمە",
    "Electronics" : "ئېلېكترون مەھسۇلاتلىرى",
    "Indoor" : "ئۆي ئىچى",
    "Church" : "چېركاۋ",
    "Shoe" : "ئاياغ",
    "Candle" : "شام",
    "Coffee" : "قەھۋە",
    "Keyboard" : "كۇنۇپكا تاختىسى",
    "Computer" : "Computer",
    "Helmet" : "Helmet",
    "Wall" : "تام",
    "Clock" : "سائەت",
    "Dining" : "تاماق",
    "Kitchen" : "ئاشخانا",
    "Snow" : "قار",
    "Dome" : "گۈمبەز",
    "Screen" : "ئېكران",
    "Flag" : "بايراق",
    "Truck" : "يۈك ماشىنىسى",
    "Store" : "دۇكان",
    "Tool" : "قورال",
    "Pumpkin" : "كاۋا",
    "Vegetables" : "كۆكتاتلار",
    "Photography" : "فوتوگراف",
    "Library" : "كۈتۈپخانا",
    "Display" : "كۆرسىتىش",
    "Bag" : "سومكا",
    "Cup" : "لوڭقا",
    "Rocks" : "تاش",
    "Bus" : "ئاپتوبۇس",
    "Bowl" : "قاچا",
    "Monitor" : "نازارەتچى",
    "Bike" : "ۋېلىسىپىت",
    "Scooter" : "Scooter",
    "Camping" : "Camping",
    "Cart" : "ھارۋا",
    "Piggy bank" : "چوشقا بانكىسى",
    "Bottle" : "بوتۇلكا",
    "Plate" : "تەخسە",
    "Camera" : "كامېرا",
    "Camper" : "Camper",
    "Barbecue" : "Barbecue",
    "Basket" : "سېۋەت",
    "Diving" : "Diving",
    "Snowmobile" : "قار ماشىنىسى",
    "Bridge" : "كۆۋرۈك",
    "Couch" : "Couch",
    "Theater" : "تىياتىرخانا",
    "Spoon" : "قوشۇق",
    "Comic" : "Comic",
    "Soup" : "شورپا",
    "Dessert" : "Dessert",
    "Bakery" : "ناۋايخانا",
    "Fruit" : "مېۋە",
    "Pasta" : "Pasta",
    "Meat" : "گۆش",
    "Pizza" : "Pizza",
    "Wine" : "Wine",
    "Alpine" : "Alpine",
    "Mountains" : "تاغلار",
    "Sand" : "قۇم",
    "Wool" : "يۇڭ",
    "Glass" : "ئەينەك",
    "Moment" : "دەقىقە",
    "Info" : "Info",
    "Document" : "پۈتۈك",
    "Puzzle" : "تېپىشماق",
    "Heritage" : "مىراس",
    "Safe" : "بىخەتەر",
    "Bucket" : "چېلەك",
    "Baby" : "بالام",
    "Cradle" : "بۆشۈك",
    "Patio" : "Patio",
    "Mountain" : "تاغ",
    "Radio telescope" : "رادىئو تېلېسكوپى",
    "Theme park" : "تېما باغچىسى",
    "Festival" : "فېستىۋال",
    "Event" : "Event",
    "Monument" : "Monument",
    "Balloon" : "بالون",
    "Crib" : "Crib",
    "Fan" : "فەن",
    "Gas station" : "ماي قاچىلاش پونكىتى",
    "Wood" : "ياغاچ",
    "Bench" : "Bench",
    "Parking" : "ماشىنا توختىتىش",
    "Traffic" : "قاتناش",
    "Public transport" : "ئاممىۋى قاتناش",
    "Umbrella" : "Umbrella",
    "Stage" : "باسقۇچ",
    "Toy" : "ئويۇنچۇق",
    "Vase" : "Vase",
    "Mailbox" : "خەت ساندۇقى",
    "Sign" : "ئىمزا",
    "Gallery" : "Gallery",
    "Park" : "باغچا"
},
"nplurals=2; plural=(n != 1);");
