// Cleveland Commando — offline cache. Version: 20261017-0853
const V='cc-20261017-0853';
const CORE=['./','./index.html','./manifest.json','./icon-180.png','./icon-192.png','./icon-512.png','./icon-512m.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{ if(e.request.method!=='GET') return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>{
    const net=fetch(e.request).then(r=>{ if(r&&(r.ok||r.type==='opaque')){ const copy=r.clone(); caches.open(V).then(c=>c.put(e.request,copy)); } return r; }).catch(()=>hit);
    return hit||net; })); });
