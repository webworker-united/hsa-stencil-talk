!function(e,t,n,i,r,s,c,a,o,l,u,d,m,p){for(u=e.ClientFacingImage=e.ClientFacingImage||{},(d=t.createElement("style")).innerHTML="client-facing-image{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),m=t.head.querySelector("meta[charset]"),t.head.insertBefore(d,m?m.nextSibling:t.head.firstChild),function(e,t,n){(e["s-apps"]=e["s-apps"]||[]).push("ClientFacingImage"),n.componentOnReady||(n.componentOnReady=function(){var t=this;function n(n){if(t.nodeName.indexOf("-")>0){for(var i=e["s-apps"],r=0,s=0;s<i.length;s++)if(e[i[s]].componentOnReady){if(e[i[s]].componentOnReady(t,n))return;r++}if(r<i.length)return void(e["s-cr"]=e["s-cr"]||[]).push([t,n])}n(null)}return e.Promise?new e.Promise(n):{then:n}})}(e,0,l),r=r||u.resourcesUrl,d=(m=t.querySelectorAll("script")).length-1;d>=0&&!(p=m[d]).src&&!p.hasAttribute("data-resources-url");d--);m=p.getAttribute("data-resources-url"),!r&&m&&(r=m),!r&&p.src&&(r=(m=p.src.split("/").slice(0,-1)).join("/")+(m.length?"/":"")+"client-facing-image/"),d=t.createElement("script"),function(e,t,n,i){return!(t.search.indexOf("core=esm")>0)&&(!(!(t.search.indexOf("core=es5")>0||"file:"===t.protocol)&&e.customElements&&e.customElements.define&&e.fetch&&e.CSS&&e.CSS.supports&&e.CSS.supports("color","var(--c)")&&"noModule"in n)||function(e){try{return new Function('import("")'),!1}catch(e){}return!0}())}(e,e.location,d)?d.src=r+"client-facing-image.i0qrcadu.js":(d.src=r+"client-facing-image.ued3yx8b.js",d.setAttribute("type","module"),d.setAttribute("crossorigin",!0)),d.setAttribute("data-resources-url",r),d.setAttribute("data-namespace","client-facing-image"),t.head.appendChild(d)}(window,document,0,0,0,0,0,0,0,HTMLElement.prototype);