'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ad2a34dec63a47e41e29ba0e03f0e898",
"assets/assets/audio/action_clap1.mp3": "7b6f0ee2bc6673c6e3aba8ccc6cafc58",
"assets/assets/audio/action_clap2.mp3": "ffea680d4c22263a4a7eca7e71987860",
"assets/assets/audio/action_hurt0.mp3": "c9ac592024dd77825ce38546147c0ce3",
"assets/assets/audio/action_hurt1.mp3": "a06e6c510d33e3ff0466f4adb083a0bc",
"assets/assets/audio/action_hurt2.mp3": "bcd260cfc16d7bdbe2fcf88e8cba7f21",
"assets/assets/audio/action_hurt3.mp3": "13cc77ef51d6ac13632cc20d21cd8e9c",
"assets/assets/audio/action_put.mp3": "22196c0c05a89730cdff0a27eb19e264",
"assets/assets/audio/action_reload.mp3": "eaa7d70160ac3a8167135b6a45009fdb",
"assets/assets/audio/action_shoot.mp3": "4698fea3984918d9ba4a9dfeb1cc93be",
"assets/assets/audio/action_whip.mp3": "2fbc699a34012aef1fe5b9d815a6e5d5",
"assets/assets/audio/action_wield.mp3": "af31a9daaab95b8cf121b840fa4730fd",
"assets/assets/audio/bgm_audrey.mp3": "bbfeee4ac30dba039c6a196966dd86f9",
"assets/assets/audio/bgm_iq300.mp3": "02d6c93ddc47045aa3ef730f68e70753",
"assets/assets/audio/bgm_mama.mp3": "8e09fa0de955a64fed48cb9d68057d39",
"assets/assets/audio/bgm_queen.mp3": "e1514ca662d397fc02ee563ce53fba81",
"assets/assets/audio/dropoff.mp3": "06de1d44707a0a60470f574aae4f9e39",
"assets/assets/audio/pickup.mp3": "04291a1f6fa01203011bd67b9727e82b",
"assets/assets/fonts/BungeeInline/BungeeInline-Regular.ttf": "4152729d3cc033542060221b7449bd42",
"assets/assets/images/a/Audrey_Icon_01.png": "0019ab87dffd9754946f729de1662be3",
"assets/assets/images/a/Audrey_Icon_02.png": "85e9c25856e727277ac0bf470a845283",
"assets/assets/images/a/BG_01.png": "cd99071151560cfcaf219cc29f3a2e6a",
"assets/assets/images/a/BG_02.png": "062789b24bc9990128e0e8fa7a0e04c9",
"assets/assets/images/a/EFE_001.png": "e95a36bc970ef237f127561a32ececda",
"assets/assets/images/a/EFE_002.png": "954c98467a5216a2e1ac00f8023b2422",
"assets/assets/images/a/PRC_Blue.png": "89467e3098fc03734d4a242afbde1935",
"assets/assets/images/a/PRC_Flower.png": "a48fc3e889bb883177fbcc1e6937fbd8",
"assets/assets/images/a/PRC_Red.png": "a2755fae8741c1164ef266097f656985",
"assets/assets/images/a/SLAP_EFE_001.png": "758487f044d84f479efd9561c75375fc",
"assets/assets/images/a/SLAP_EFE_002.png": "dc3e256433615aefacd4fe0e514682ce",
"assets/assets/images/Audrey_Tachie_01.png": "41d6f0501280572f505af2eb6f6ce408",
"assets/assets/images/a_butt.png": "3c6b5cd9b78a547a29a40a5f87595c75",
"assets/assets/images/a_butt_apple.png": "e8d28f38cf503c3a8547ca2cb1d9da30",
"assets/assets/images/a_character.png": "86e222c41ad15ea010c577efe38268f9",
"assets/assets/images/a_emotions.jpg": "d405e004bd304ac3d23355a779f7ca3c",
"assets/assets/images/a_emotion_crop.jpg": "c20d37d578fb3399bbfa2271c14186ac",
"assets/assets/images/a_face_emotions.webp": "e88cb00614d965e2af5a7fc9cdb981df",
"assets/assets/images/a_head.webp": "4d24fdf02412512193515e79bb5f1500",
"assets/assets/images/BG_02.png": "e9315aa32603bf278a410e1ae8a103a8",
"assets/assets/images/bg_complete.png": "2564cb75f756af1b06fbc817fca02db9",
"assets/assets/images/bg_ending.png": "4fac2a9521a8c35e27098c876124c9c1",
"assets/assets/images/bg_fashion1.jpg": "e8f6def0b225ca92e356547a97741bb6",
"assets/assets/images/bg_fashion2.png": "ea5fa5c99c7e0dde7a610e99c94daa38",
"assets/assets/images/bg_fashion3.png": "59c569c4878dcf3629bd682e48cdad6e",
"assets/assets/images/bg_fashion4.png": "538941f4ac2eecd8015bf6292d56d59c",
"assets/assets/images/bg_fashions.jpg": "0b7448f80a403cd224a277f63663fae2",
"assets/assets/images/bg_info.png": "bc0d710fb675397f63329c714acd8046",
"assets/assets/images/bg_option.png": "ac9baf1d74edeb693b9845a33938ec2c",
"assets/assets/images/bg_thanks.png": "f2e2a00586f03a218e2a37f27998a8e4",
"assets/assets/images/bg_top.png": "97291c9c24d95976ae28f664ef76382f",
"assets/assets/images/Button_001.png": "c89b78f100c21f37efbb3617b0309c19",
"assets/assets/images/Button_002.png": "e616cb6c0dec4e650a03e2c4e57975ca",
"assets/assets/images/Button_003.png": "1db96884e79ff44268fe0268790107e7",
"assets/assets/images/butt_bg.jpg": "ccd30e298dc661f47da4839d73e9e88e",
"assets/assets/images/img.png": "4f5c3dd3ed91669fd639fbbe549a8cc7",
"assets/assets/images/IQ300_Tachie_01.png": "c126fa01af5aa14e634eef39d42e7dc2",
"assets/assets/images/logo_red.png": "c3ff5a2f3dadfa1b7c0e4166e9a5f6d3",
"assets/assets/images/logo_white.png": "72646ee304018a59bd90903be019b14e",
"assets/assets/images/Mama_Tachie_01.png": "739930ac4e17a37aaf77aec5f638ad81",
"assets/assets/images/play_button_E.png": "dae9b402bb052d91f64255ef3293445d",
"assets/assets/images/property_audrey.jpg": "3ae46804c2a6c64d319ec1bcb059fc7f",
"assets/assets/images/property_iq300.jpg": "75ecd7e40740e52d9c486f64ee7f2152",
"assets/assets/images/property_mama.jpg": "9ad4ba69385a44a987e22e6c07f668c1",
"assets/assets/images/property_queen.jpg": "708e00ec2677fb5d7a458d2a552867fe",
"assets/assets/images/Queen_Tachie_01.png": "3f3c9ce8dbf7fc56a9733b8880827165",
"assets/assets/json/translations.json": "641260cf9c93c512b96ab284e46193e1",
"assets/assets/videos/audrey1.mp4": "189673e458b0bed055392591e73cfe6f",
"assets/assets/videos/audrey2.mp4": "786d988eed4c939fd499863ac8496271",
"assets/assets/videos/audrey3.mp4": "7642d087c654a372ddacbb120b57d21a",
"assets/assets/videos/audrey4.mp4": "84841fac8518ff90773b706f7f3247cd",
"assets/assets/videos/iq3001.mp4": "e9bc27517d8cbee15d05736d709d4177",
"assets/assets/videos/iq3002.mp4": "84c5d931216cae034c2498ad78412d8e",
"assets/assets/videos/iq3003.mp4": "db0b3848c95909684ff54a63307f798a",
"assets/assets/videos/iq3004.mp4": "d8a6ffe300c5708d33e5c8d585b6e85d",
"assets/assets/videos/mama1.mp4": "126a70b3fdce44039a05afb5f65b133b",
"assets/assets/videos/mama2.mp4": "16f003f0b1c0ad4332f6d170dcb2d220",
"assets/assets/videos/mama3.mp4": "20179a826cd699ac8e5de9d8a28e64c2",
"assets/assets/videos/mama4.mp4": "2250987794d8969b864f7bcbf66ef163",
"assets/assets/videos/queen1.mp4": "863d5d2326fe9dc857924374f759d506",
"assets/assets/videos/queen2.mp4": "f4ad01aa995d594a702009225df10b03",
"assets/assets/videos/queen3.mp4": "952e2dcba2a7e525b64a831248b92f5b",
"assets/assets/videos/queen4.mp4": "8b7534ca66d1a8eac270e6c47c23efeb",
"assets/assets/videos/toptop1.mp4": "b23a917652163ac180a3dfdf97bf9bc5",
"assets/FontManifest.json": "66decfe0364b843cd039e0e780828fb8",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "20cd35eadddfd07948257bcc370a2f5a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c7b8e2970b6f5cf95456c8061487752b",
"/": "c7b8e2970b6f5cf95456c8061487752b",
"main.dart.js": "ceb833823fddf282c2e175fdf2686974",
"manifest.json": "c95146b47ed79efca72edf2dba078390",
"version.json": "35a4df3de8e123efa436bc8c745735e8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
