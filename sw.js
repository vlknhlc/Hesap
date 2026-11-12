const C='butce-v1';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  const ok=e.request.method==='GET'&&(u.origin===location.origin||/cdn\.tailwindcss\.com|gstatic\.com/.test(u.host));
  if(!ok)return;
  e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)));
});
