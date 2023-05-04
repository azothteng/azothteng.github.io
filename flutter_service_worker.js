'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1cf2a10704afacead64e81b7160e8759",
"assets/assets/audio/action_clap1.mp3": "7b6f0ee2bc6673c6e3aba8ccc6cafc58",
"assets/assets/audio/action_clap2.mp3": "ffea680d4c22263a4a7eca7e71987860",
"assets/assets/audio/action_hurt0.mp3": "c9ac592024dd77825ce38546147c0ce3",
"assets/assets/audio/action_hurt1.mp3": "a06e6c510d33e3ff0466f4adb083a0bc",
"assets/assets/audio/action_hurt2.mp3": "bcd260cfc16d7bdbe2fcf88e8cba7f21",
"assets/assets/audio/action_hurt3.mp3": "13cc77ef51d6ac13632cc20d21cd8e9c",
"assets/assets/audio/action_punch1.mp3": "73ffb4f59c5b43c1c8f56911f3d6bf41",
"assets/assets/audio/action_put.mp3": "22196c0c05a89730cdff0a27eb19e264",
"assets/assets/audio/action_reload.mp3": "eaa7d70160ac3a8167135b6a45009fdb",
"assets/assets/audio/action_shoot.mp3": "4698fea3984918d9ba4a9dfeb1cc93be",
"assets/assets/audio/action_slap1.mp3": "b594ac7836eadf34855ed9bf564e54eb",
"assets/assets/audio/action_slap2.mp3": "f4b1b400d1ec0f855056963670263f8e",
"assets/assets/audio/action_slap3.mp3": "95f885655531ddb9b895eb60f90c8373",
"assets/assets/audio/action_slap4.mp3": "fea2a9f4575de685b383fea0b34525ee",
"assets/assets/audio/action_slap5.mp3": "9997f5937f165ebc87b56742f52c1c38",
"assets/assets/audio/action_whip.mp3": "2fbc699a34012aef1fe5b9d815a6e5d5",
"assets/assets/audio/action_whip1.mp3": "53efd58b922b30e5a6013f52362417de",
"assets/assets/audio/action_whip2.mp3": "2526188c0d4607f5953518b64700795c",
"assets/assets/audio/action_wield.mp3": "af31a9daaab95b8cf121b840fa4730fd",
"assets/assets/audio/bgm_audrey.mp3": "bbfeee4ac30dba039c6a196966dd86f9",
"assets/assets/audio/bgm_iq300.mp3": "02d6c93ddc47045aa3ef730f68e70753",
"assets/assets/audio/bgm_mama.mp3": "8e09fa0de955a64fed48cb9d68057d39",
"assets/assets/audio/bgm_queen.mp3": "e1514ca662d397fc02ee563ce53fba81",
"assets/assets/audio/dropoff.mp3": "06de1d44707a0a60470f574aae4f9e39",
"assets/assets/audio/pickup.mp3": "04291a1f6fa01203011bd67b9727e82b",
"assets/assets/fonts/BungeeInline/BungeeInline-Regular.ttf": "4152729d3cc033542060221b7449bd42",
"assets/assets/images/audrey01_slap_efe_001.png": "dbf879a900c46a103a24ad01077299b4",
"assets/assets/images/audrey02_slap_efe_002.png": "dc3e256433615aefacd4fe0e514682ce",
"assets/assets/images/audrey03_efe_001.png": "e95a36bc970ef237f127561a32ececda",
"assets/assets/images/audrey04_efe_002.png": "954c98467a5216a2e1ac00f8023b2422",
"assets/assets/images/audrey05_icon_00.png": "1e0b773764c989d2ae6e1b94aadd111b",
"assets/assets/images/audrey06_icon_01.png": "e19624f600e3530c5efc108fcc9e89fd",
"assets/assets/images/audrey07_icon_02.png": "1f89d9ef847cbea7f54f41ceadf732c8",
"assets/assets/images/audrey08_icon_03.png": "48a75f9411b0c473e53402e5700ba1d0",
"assets/assets/images/audrey09_icon_04.png": "24974dba239ea95872f6aff088157ded",
"assets/assets/images/audrey10_prc_flower.png": "a48fc3e889bb883177fbcc1e6937fbd8",
"assets/assets/images/audrey11_prc_red.png": "6d64bce2d5df85cad275dc2b2e84184a",
"assets/assets/images/audrey12_prc_blue.png": "3b3ecbde8bda2bd324b658fecc2d128f",
"assets/assets/images/audrey13_bg.png": "062789b24bc9990128e0e8fa7a0e04c9",
"assets/assets/images/audrey14_msmefe_001.png": "beec72e0834452d33cf2b20c39bc1f9a",
"assets/assets/images/audrey15_msmefe_002.png": "eeb433bf5c35d808cde6f7e70aa40d0e",
"assets/assets/images/audrey16_msm_01.png": "74a59f4f43d91911bc416d3d533311be",
"assets/assets/images/audrey17_msm_02.png": "5d1bea287f69085aa1d5087756b34039",
"assets/assets/images/audrey18_msm_03.png": "e3101220bacfe5df560f184801a9e8a2",
"assets/assets/images/audrey19_msm_04.png": "c32fee40babb96cbbeaaee9d61b626a2",
"assets/assets/images/audrey20_msm_05.png": "b7b70e13b1b3d526692e57e331e0fb83",
"assets/assets/images/audrey21_msm_06.png": "51e8315324607d08850bb2c8b5277c31",
"assets/assets/images/audrey22_msm_07.png": "9dde8b421ff62481a05db9e9fa96df13",
"assets/assets/images/audrey23_msm_08.png": "7a6b153a19245b49724f04566e302eae",
"assets/assets/images/audrey24_msm_09.png": "76d62bebc44571a8ddf962e599b03352",
"assets/assets/images/audrey25_msm_10.png": "fedcaa60f5ac933824fcb0402feccd7e",
"assets/assets/images/audrey26_bg_01.png": "cd99071151560cfcaf219cc29f3a2e6a",
"assets/assets/images/audrey_tachie_01.png": "41d6f0501280572f505af2eb6f6ce408",
"assets/assets/images/a_butt.png": "3c6b5cd9b78a547a29a40a5f87595c75",
"assets/assets/images/a_butt0.png": "4ad72bc95079ae28a0a86983e1095d74",
"assets/assets/images/a_butt_apple.png": "e8d28f38cf503c3a8547ca2cb1d9da30",
"assets/assets/images/a_character.png": "86e222c41ad15ea010c577efe38268f9",
"assets/assets/images/a_emotions.jpg": "d405e004bd304ac3d23355a779f7ca3c",
"assets/assets/images/a_emotion_crop.jpg": "c20d37d578fb3399bbfa2271c14186ac",
"assets/assets/images/a_face_emotions.webp": "e88cb00614d965e2af5a7fc9cdb981df",
"assets/assets/images/a_head.webp": "4d24fdf02412512193515e79bb5f1500",
"assets/assets/images/bg_02.png": "e9315aa32603bf278a410e1ae8a103a8",
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
"assets/assets/images/button_003.png": "1db96884e79ff44268fe0268790107e7",
"assets/assets/images/butt_bg.jpg": "ccd30e298dc661f47da4839d73e9e88e",
"assets/assets/images/headphones1.png": "7c3e1fa5b80e20621789255e384d8a9b",
"assets/assets/images/headphones2.png": "2214eb908076f7967810a59e584b388f",
"assets/assets/images/img.png": "4f5c3dd3ed91669fd639fbbe549a8cc7",
"assets/assets/images/iq300_tachie_01.png": "c126fa01af5aa14e634eef39d42e7dc2",
"assets/assets/images/logo_red.png": "c3ff5a2f3dadfa1b7c0e4166e9a5f6d3",
"assets/assets/images/logo_white.png": "72646ee304018a59bd90903be019b14e",
"assets/assets/images/mama_tachie_01.png": "739930ac4e17a37aaf77aec5f638ad81",
"assets/assets/images/play_button_down.png": "e616cb6c0dec4e650a03e2c4e57975ca",
"assets/assets/images/play_button_E.png": "dae9b402bb052d91f64255ef3293445d",
"assets/assets/images/play_button_up.png": "c89b78f100c21f37efbb3617b0309c19",
"assets/assets/images/property_audrey.jpg": "3ae46804c2a6c64d319ec1bcb059fc7f",
"assets/assets/images/property_iq300.jpg": "75ecd7e40740e52d9c486f64ee7f2152",
"assets/assets/images/property_mama.jpg": "9ad4ba69385a44a987e22e6c07f668c1",
"assets/assets/images/property_queen.jpg": "708e00ec2677fb5d7a458d2a552867fe",
"assets/assets/images/queen_tachie_01.png": "3f3c9ce8dbf7fc56a9733b8880827165",
"assets/assets/json/translations.json": "fec2ab36ffe0b6f4b1a43477e9f28eac",
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
"assets/NOTICES": "4a0a86803bc79e41aaa55e7c727353bd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "f36b119f30b6447bd830c4ad9ecdf392",
"icons/Icon-512.png": "1e06a76148c8d398c7f3b8709a9c912a",
"icons/Icon-maskable-192.png": "f36b119f30b6447bd830c4ad9ecdf392",
"icons/Icon-maskable-512.png": "1e06a76148c8d398c7f3b8709a9c912a",
"index.html": "90ba9f21e026bfeaad4eee8a5f715c59",
"/": "90ba9f21e026bfeaad4eee8a5f715c59",
"main.dart.js": "e8b7e36cb17d9c9976d99b98eff92027",
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
