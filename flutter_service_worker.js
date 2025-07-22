'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3fd2a02cc59050373507d46a73d2258c",
"assets/assets/images/byun_1.jpeg": "d6387825395a730b058ee59528b17771",
"assets/assets/images/flutter_dash.png": "d59d0e8266b087a7a7f8a61c50ad4f6e",
"assets/assets/images/logo.svg": "ff334617cf26a0ac1874bcae3634a932",
"assets/assets/images/main_bg.jpeg": "c55c5e25d9197af04cc8caac2bb70a57",
"assets/assets/lottie/loading_lottie.json": "6c191cad7d414b0a9176a440c6727219",
"assets/assets/fonts/NanumSquareNeo-dEb.ttf": "7775f17c10a169509b8fca4156c621b6",
"assets/assets/fonts/NanumSquareNeo-eHv.ttf": "f7b7b6ffc8b5f20ed73cdb8f19f279d2",
"assets/assets/fonts/NanumSquareNeo-aLt.ttf": "e7218dfd0284a5e5b4a9ce231f88db65",
"assets/assets/fonts/NanumSquareNeo-bRg.ttf": "8e204e046fce31563177dd08b27ce94b",
"assets/assets/fonts/NanumSquareNeoOTF-Rg.otf": "4ba733bc5941db853a333f11ee65ba01",
"assets/assets/fonts/NanumSquareNeoOTF-Lt.otf": "09cca6769e48ef5564154dbfca1a746d",
"assets/assets/fonts/NanumSquareNeo-Variable.ttf": "d22e2a9d7ed6b5317bedc5efae07798b",
"assets/assets/fonts/AppleGothic.ttf": "0ea7b1729d77e972529ca686db8ea06f",
"assets/assets/fonts/Pretendard-Regular.otf": "84c0ea9d65324c758c8bd9686207afea",
"assets/assets/fonts/Pretendard-SemiBold.otf": "6fe301765c4f438e2034a0a47b609c61",
"assets/assets/fonts/NanumSquareNeoOTF-Eb.otf": "669013195bb11b943952ac23bae56070",
"assets/assets/fonts/Pretendard-Bold.otf": "f8a9b84216af5155ffe0e8661203f36f",
"assets/assets/fonts/NanumSquareNeoOTF-Bd.otf": "ac2c6dd4698f65fb1e799efc81b8d77a",
"assets/assets/fonts/NanumSquareNeo-cBd.ttf": "d437afc2ea82bd95d2bc0c4b88de9573",
"assets/assets/fonts/Pretendard-Medium.otf": "13a352bd44156de92cce335ce93cd02d",
"assets/assets/fonts/D2Coding-Ver1.3.2-20180524-all.ttc": "82726eb9d269cce323be1e68e1eb79a1",
"assets/assets/fonts/NotoSansKR-Bold.otf": "e2406ff1791c401bc93e73d9e44e6d2b",
"assets/assets/fonts/NanumSquareNeoOTF-Hv.otf": "facd5b49ad23a067a6e894ac983a0405",
"assets/assets/icon/i_minus.svg": "9302796f2e6ac4ebdc4ef66ecd0a8bc5",
"assets/assets/icon/i_pencil.svg": "af9a49a6fd65cc087ffcd36d78b00b58",
"assets/assets/icon/i_hamburger.svg": "796cad6d5064256ae02169e709374710",
"assets/assets/icon/i_sidebar.svg": "7522b11c48f8fb4764fa7c2006bda670",
"assets/assets/icon/i_linkcopy.svg": "9f60e6ad0ac6fa3b309420fb656f6494",
"assets/assets/icon/i_canceling.svg": "e4141fca2d9e6a3437e175dc464a535a",
"assets/assets/icon/i_disk.svg": "4129f726db85e1f1626d3716ab6a4aa9",
"assets/assets/icon/i_next_page.svg": "939e25a10f02f2b315f93638798697e0",
"assets/assets/icon/i_pdf_download.svg": "96b61ba7b5f795f25faaf91683939a5d",
"assets/assets/icon/i_erase.svg": "30c88ecc78097561b0a6eff49c561ad1",
"assets/assets/icon/i_attachment.svg": "9849a81b6771317ae87e7b9dc00dc716",
"assets/assets/icon/i_message.svg": "d1d6778752bf19baeb05215ca50eae94",
"assets/assets/icon/i_move.svg": "39d5fb65bbfa4bf9c6819ff1e831af1e",
"assets/assets/icon/i_download.svg": "dd19de2f79dcda53b8853035d4ab37d6",
"assets/assets/icon/i_file.svg": "99c9e48340d49f2d821bfb2a8b5552fe",
"assets/assets/icon/i_alarm_off.svg": "80f491baf4c042444f19638327171de6",
"assets/assets/icon/i_arrow_left.svg": "5178995f2a0b45f43f4a2d9ab5476af9",
"assets/assets/icon/i_down.svg": "457d63b41620fac5b4896a09ef8fa206",
"assets/assets/icon/i_enter.svg": "6c1f03a5c1f9752bc98554921230218c",
"assets/assets/icon/i_help.svg": "44f63dc6577a42b62ac814294017b9af",
"assets/assets/icon/i_calendar.svg": "b132ca38224d0586230ca0033fd6d733",
"assets/assets/icon/i_upload.svg": "1f3c69358d4ad53bb0d2ba5b315aa5d7",
"assets/assets/icon/i_unlock.svg": "e52694c3f09207f524cba3dc94578f71",
"assets/assets/icon/i_checkbox.svg": "a81c6b3730a8595dc47c5ce4a0aa1eeb",
"assets/assets/icon/i_pin.svg": "16ded0e3630303d57df806c88bdc4f3d",
"assets/assets/icon/i_kebap.svg": "ea2cf615434bf492d07a2a90822cb061",
"assets/assets/icon/i_bracket.svg": "c29e4b3c0ad743474f113847d5232ba4",
"assets/assets/icon/i_text_delete.svg": "a0badbda734e81a920975a41129462c2",
"assets/assets/icon/i_credit_card.svg": "dc333345ec8597731e7a49b99a0b9d84",
"assets/assets/icon/i_logo.svg": "69e70abc56bdfd6bb81c814fa602f004",
"assets/assets/icon/i_undo.svg": "3694a863993dec16c178076bfe755a72",
"assets/assets/icon/i_newtab.svg": "867f78cf967c9bf2ac5d43d81a7fb7a1",
"assets/assets/icon/i_payment.svg": "255822952bddbd095cb51e5b3530df85",
"assets/assets/icon/i_hide.svg": "5c1fb87527e6aff51c0d64214f7795c3",
"assets/assets/icon/i_planner.svg": "308afae0370d83bbabff12b51f676f24",
"assets/assets/icon/i_unsync.svg": "29ce3abd1a7effa2e92a769418e9ce2a",
"assets/assets/icon/i_pin_fill.svg": "92c04b77ab6521cee04ea6374a01a431",
"assets/assets/icon/i_video.svg": "69bd8ea8984af2fb622012ebbb949862",
"assets/assets/icon/i_trash.svg": "88af699b6f9088b216033854a2c7613d",
"assets/assets/icon/i_cloud_upload.svg": "ba8f286e6db5ff897167288e5820eb7c",
"assets/assets/icon/i_order.svg": "04134b8262928e0eb617c79a6f68d47d",
"assets/assets/icon/i_graph.svg": "fea2d3570e581ffd395e932ece1a1851",
"assets/assets/icon/i_personal_fill.svg": "35c34e98f15385cd48c44c171f7fb582",
"assets/assets/icon/i_swap.svg": "aeee7227344b1c88c36b1b7d5be3a3a1",
"assets/assets/icon/i_search.svg": "b4234b0e12a433641a2d4dad9c34b41d",
"assets/assets/icon/i_back.svg": "473351caebcb6606878f4e856fb5a5a3",
"assets/assets/icon/i_arrow_right.svg": "0f8d2aae79285403047698f7ea8fdfe5",
"assets/assets/icon/i_arrow_up.svg": "86b3ecb405a33dbf970b3922854e9694",
"assets/assets/icon/i_group_fill.svg": "93838be2dfa4d56004d5ad6dc9e1f1a3",
"assets/assets/icon/i_phone.svg": "84582eb4ee49deb2895315a5e8b19071",
"assets/assets/icon/i_mail.svg": "6937cfdad5f7d1c104d79a1934ee9a5a",
"assets/assets/icon/i_color.svg": "9256f3af7bc2ab4385c4f5170ef1bc91",
"assets/assets/icon/i_section_title.svg": "d3b313bedb360f650c5945efee480cf4",
"assets/assets/icon/i_memo.svg": "31cdd921cbc92db2ba0d9962bf0c394c",
"assets/assets/icon/i_check.svg": "e214ac82222a9bb86685911f05382284",
"assets/assets/icon/i_vendor.svg": "b58f7eb052252994ccbd69060c9e5292",
"assets/assets/icon/i_link.svg": "bafb98c35837f08b93ec5b1dbdb7a5cb",
"assets/assets/icon/i_detail.svg": "5f4e5a8af7730caeed14ea6e29711730",
"assets/assets/icon/i_close.svg": "28483632c8dda6db4adae9bfb9341961",
"assets/assets/icon/i_personal.svg": "0991c998f70713e7dcba57080426b10f",
"assets/assets/icon/i_arrow_updown.svg": "4c74467d3528404fe9e666fc16f36f59",
"assets/assets/icon/i_written.svg": "d35ecd4b66f4238786c39b995ac15368",
"assets/assets/icon/i_copy_item.svg": "2622df8d0edf8d3789222df26c81320f",
"assets/assets/icon/i_next.svg": "88adc693203b52fc1e9c3209ccd78a44",
"assets/assets/icon/i_view.svg": "ee493482f8bbfad8ee7821da46851f2e",
"assets/assets/icon/i_cloud.svg": "f1ad03861f3f612e58f7769303eac09f",
"assets/assets/icon/i_amount.svg": "fdef3ce65a62394cb574f5bcce7def4c",
"assets/assets/icon/i_input_image.svg": "952890b8d57471379c90d67646774645",
"assets/assets/icon/i_clock.svg": "5891c91128d3c3f1121cbbf943125589",
"assets/assets/icon/i_location_search.svg": "3b396b1c0b8c55fe593288c52a34b338",
"assets/assets/icon/i_alarm_on.svg": "c862e241c9a1a7f90cb4cff167a68a9b",
"assets/assets/icon/i_excel_download.svg": "d65b6ecd6d7eabe95e14fff5566e9cfa",
"assets/assets/icon/i_copy.svg": "dbdc58de70de33627b749190600d6e17",
"assets/assets/icon/i_social_monitor.svg": "ffdffe348c5967e20135625289454128",
"assets/assets/icon/i_choices.svg": "8f2d6fef76c4c3f406715d523fb79feb",
"assets/assets/icon/i_sign.svg": "081503f07c24625ac2929dbf80930464",
"assets/assets/icon/i_home.svg": "464c51a9b13faf7646bfd48bc0131acd",
"assets/assets/icon/i_product.svg": "209d9b229457d30f94433abc39dd10ec",
"assets/assets/icon/i_warning_circle.svg": "753fe330709f9a58b7a93887c6976715",
"assets/assets/icon/i_chart.svg": "fa4621c2d5beed99488c784578aa2065",
"assets/assets/icon/i_send.svg": "83a41e13b82604d4af826d8cdd0ba039",
"assets/assets/icon/i_up.svg": "c18a71894fa32485576839448c96336c",
"assets/assets/icon/i_account.svg": "6a2af7347bd02374eefa5c71afefa581",
"assets/assets/icon/i_phone_check.svg": "d1170433ad887c8c757457359310d910",
"assets/assets/icon/i_plus.svg": "e2024561b49cf17cc433ea21929052b4",
"assets/assets/icon/i_info.svg": "c327c2319767a702a38795c87e25ccad",
"assets/assets/icon/i_refresh.svg": "e53ce33957058a24b29311536dfc0631",
"assets/assets/icon/i_arrow_down.svg": "f84e54c8023bbc4f4efc6e0211b82d44",
"assets/assets/icon/i_unlink.svg": "5af5a5716320f59477608b2a1274f95d",
"assets/assets/icon/i_filter.svg": "7ebd1eb401d6bafbe4af2c0d45b8a13a",
"assets/assets/icon/i_sync.svg": "dbc8891f0b224bb552d608dfb938b5f5",
"assets/assets/icon/i_flag.svg": "0c0a9028517c0e8f1bb90f1e7db6858d",
"assets/assets/icon/i_logout.svg": "0459e7b4387aefca632588b964c722fa",
"assets/assets/icon/i_setting.svg": "3c428bf1cd1998c45c96dc9b813300fa",
"assets/assets/icon/i_item_setting.svg": "d0100b10e20fede8146008e407a26802",
"assets/assets/icon/i_arrow_fill.svg": "5911fce1c4dfe75682cd3d689662159f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "b430fb47fcbe794b6ebd8ae46652ce9a",
"assets/AssetManifest.json": "0d11b90e0d917726e7af628e3dff22ef",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/AssetManifest.bin.json": "264e13ce4c97b2b13c55ef6b6639b748",
"assets/NOTICES": "3ec2c4beab0d155bf690c5f8d2cdfa3f",
"assets/packages/syncfusion_flutter_datepicker/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"version.json": "aee4bd6e3a3ba68d594eac780900ad18",
"manifest.json": "b2552f3cb19f1fae3a0aea3918105bd2",
"flutter_bootstrap.js": "cea411e01e1163097c153632cab28855",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"index.html": "0dc7fa3a330ee73cc386c51d9966e168",
"/": "0dc7fa3a330ee73cc386c51d9966e168",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"main.dart.js": "372a39740918e5b8e874ad84d5bde401"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
