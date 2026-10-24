(()=>{"use strict";const toast=document.getElementById("toast"),modal=document.getElementById("promoModal"),timerText=document.getElementById("countdown");let toastTimer,seconds=120,clock,shown=false;function notice(t){clearTimeout(toastTimer);toast.textContent=t;toast.classList.add("show");toastTimer=setTimeout(()=>toast.classList.remove("show"),3000)}function openModal(){modal.classList.add("open");modal.setAttribute("aria-hidden","false");if(!clock)clock=setInterval(()=>{seconds=seconds>0?seconds-1:120;timerText.textContent=String(Math.floor(seconds/60)).padStart(2,"0")+":"+String(seconds%60).padStart(2,"0")},1000)}function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");notice("Campaign reminder dismissed. The page remains in preview mode.")}function claim(prize){document.getElementById("modalCopy").textContent="You selected "+prize+". Review the campaign screen before making any decision.";openModal()}document.querySelectorAll(".claim").forEach(b=>b.addEventListener("click",()=>claim(b.dataset.prize)));["topClaim","heroClaim"].forEach(id=>document.getElementById(id).addEventListener("click",()=>claim("the featured reward")));document.getElementById("details").addEventListener("click",()=>{notice("Campaign details opened in this preview.");document.querySelector(".steps").scrollIntoView({behavior:"smooth",block:"center"})});document.getElementById("modalClose").addEventListener("click",closeModal);document.getElementById("modalLater").addEventListener("click",closeModal);document.getElementById("modalContinue").addEventListener("click",()=>{closeModal();notice("No claim was submitted. This is a local-only interaction.")});setTimeout(()=>{if(!shown){shown=true;document.getElementById("modalCopy").textContent="A limited campaign banner is being simulated. Review details before responding to urgent offers.";openModal()}},18000);modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});})();

/* Aggressive stacked popup simulation; local-only and responsive. */
(()=>{"use strict";window.__demoPopupTheme="gold";window.__demoPopupItems=[["HADIAH TERSEDIA","Klaim hadiah simulasi sebelum waktu habis.","Periksa hadiah"],["PROMO TERBATAS","Penawaran contoh masih ditampilkan.","Lihat promo"],["PESAN MEMBER","Ada pesan kampanye yang belum dibaca.","Buka pesan"],["PENGINGAT KAMPANYE","Jangan terburu-buru. Periksa syarat penawaran.","Lihat syarat"]];})();

(()=>{"use strict";
const items=window.__demoPopupItems||[]; if(!items.length)return;
const style=document.createElement("style");
style.textContent=`
.demo-ad-layer{position:fixed;inset:0;z-index:9000;pointer-events:none;font-family:Arial,sans-serif}
.demo-ad-pop{position:fixed;width:min(310px,calc(100vw - 28px));padding:15px 15px 13px;background:#fff;color:#202636;border:1px solid #d6dbe5;border-radius:12px;box-shadow:0 18px 55px #10182842;pointer-events:auto;animation:demoPopIn .22s ease-out;overflow-wrap:anywhere}
.demo-ad-pop:before{content:"SIMULASI POPUP";display:block;font-size:9px;letter-spacing:1.2px;font-weight:800;color:#667085;margin-bottom:9px}
.demo-ad-pop .demo-ad-x{position:absolute;right:8px;top:7px;width:27px;height:27px;border:0;border-radius:50%;background:#eef1f6;color:#344054;font-size:20px;line-height:1;cursor:pointer}
.demo-ad-pop strong{display:block;padding-right:22px;font-size:14px;line-height:1.3;margin-bottom:6px}
.demo-ad-pop p{font-size:12px;line-height:1.45;color:#596579;margin:0 0 12px}
.demo-ad-pop .demo-ad-action{border:0;border-radius:7px;padding:9px 11px;width:100%;font-size:11px;font-weight:800;cursor:pointer;background:#344f9b;color:#fff}
.demo-ad-pop .demo-ad-foot{display:block;font-size:9px;color:#8a93a3;margin-top:9px}
.demo-ad-pop.gold .demo-ad-action{background:#a66a13}.demo-ad-pop.green .demo-ad-action{background:#08795e}.demo-ad-pop.purple .demo-ad-action{background:#6844b5}
.demo-ad-pop:nth-child(1){right:20px;top:94px}.demo-ad-pop:nth-child(2){left:22px;top:42%;transform:rotate(-1deg)}.demo-ad-pop:nth-child(3){right:7%;bottom:30px;transform:rotate(1deg)}.demo-ad-pop:nth-child(4){left:9%;top:18%;transform:rotate(1deg)}
@keyframes demoPopIn{from{opacity:0;translate:0 12px;scale:.96}to{opacity:1;translate:0 0;scale:1}}
@media(max-width:600px){.demo-ad-pop{width:min(270px,calc(100vw - 24px));padding:13px}.demo-ad-pop:nth-child(1){right:12px;top:82px}.demo-ad-pop:nth-child(2){left:12px;top:34%;transform:rotate(-1deg)}.demo-ad-pop:nth-child(3){right:12px;bottom:18px;transform:rotate(1deg)}.demo-ad-pop:nth-child(4){left:12px;top:17%;transform:rotate(1deg)}.demo-ad-pop strong{font-size:13px}.demo-ad-pop p{font-size:11px}}
@media(prefers-reduced-motion:reduce){.demo-ad-pop{animation:none}}
`;
document.head.appendChild(style);
const layer=document.createElement("div");layer.className="demo-ad-layer";layer.setAttribute("aria-label","Simulasi popup agresif");document.body.appendChild(layer);
let next=0;const delays=[1200,2450,3900,5600];
function spawn(){if(next>=items.length)return;const data=items[next];const card=document.createElement("section");card.className="demo-ad-pop "+(window.__demoPopupTheme||"blue");card.setAttribute("role","dialog");card.setAttribute("aria-label",data[0]);card.style.zIndex=String(9001+next);card.innerHTML='<button class="demo-ad-x" type="button" aria-label="Tutup popup">×</button><strong></strong><p></p><button class="demo-ad-action" type="button"></button><small class="demo-ad-foot">Contoh antarmuka · tidak membuka situs lain</small>';
card.querySelector("strong").textContent=data[0];card.querySelector("p").textContent=data[1];card.querySelector(".demo-ad-action").textContent=data[2];
card.querySelector(".demo-ad-x").addEventListener("click",()=>{card.remove();if(next<items.length)setTimeout(spawn,500)});
card.querySelector(".demo-ad-action").addEventListener("click",()=>{card.querySelector("p").textContent="Ini hanya simulasi. Tidak ada akun, hadiah, atau transaksi sungguhan.";card.querySelector(".demo-ad-action").textContent="Mengerti";card.querySelector(".demo-ad-action").onclick=()=>card.remove()});
layer.appendChild(card);next++}
delays.forEach(delay=>setTimeout(spawn,delay));
})();