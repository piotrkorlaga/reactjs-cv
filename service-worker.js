"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/reactjs-cv/index.html","a4ab73d7524fa07516ae9d700d357989"],["/reactjs-cv/static/css/main.462e5879.css","5f3f9302745dbcbeec6a9df33c90bbe3"],["/reactjs-cv/static/js/main.c82d63eb.js","8c20325c96a37e2d082fcbb9387c4614"],["/reactjs-cv/static/media/AboutDescription.3c2d738a.scss","3c2d738a3d541dc27820fc41de23f93c"],["/reactjs-cv/static/media/App.4f7e1d1c.scss","4f7e1d1ca22fa6748c5c582f89f46ad5"],["/reactjs-cv/static/media/EducationBox.8681e7e0.scss","8681e7e0a2639a939f9b18720d2d33f5"],["/reactjs-cv/static/media/HeadSection.0007d04e.scss","0007d04ea39593ace70cd5a7563516ff"],["/reactjs-cv/static/media/HeadSidebar.99988eff.scss","99988effe0104775c8e0237fd236a6ac"],["/reactjs-cv/static/media/Main.0f754e76.scss","0f754e767e07235e0dd9c690681b7132"],["/reactjs-cv/static/media/ParralaxFooter.951969a5.scss","951969a50c279e04e560c19e3b44614b"],["/reactjs-cv/static/media/PersonalDetails.77570704.scss","77570704222b134234703b047ef07c9e"],["/reactjs-cv/static/media/SectionAdditional.cae4027e.scss","cae4027e273c8923fb9bb64ced2d49d8"],["/reactjs-cv/static/media/SectionEducation.4120cb57.scss","4120cb57b2f24d24f66c955a6e05dbfd"],["/reactjs-cv/static/media/SectionExperience.0fca2f7f.scss","0fca2f7f079cebdc8eb9d7d6bf9b894a"],["/reactjs-cv/static/media/SectionGoal.41c0cb6e.scss","41c0cb6eaaee0c16a83418d51bb2b627"],["/reactjs-cv/static/media/SectionSkills.cb7122b3.scss","cb7122b3f5077000e72538ed72a0d9b5"],["/reactjs-cv/static/media/Sidebar.5ed86a0f.scss","5ed86a0ffc72670428675bec791c88bd"],["/reactjs-cv/static/media/Skill.44f60bb9.scss","44f60bb90f8be75d436241afdf25d3f8"],["/reactjs-cv/static/media/foto.c20cbfc1.jpg","c20cbfc11809cc8b2a5e5fa8ea9aa41b"],["/reactjs-cv/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,c,a){var s=new URL(e);return a&&s.pathname.match(a)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),s=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/reactjs-cv/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});