const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menu?.addEventListener('click', () => {const expanded=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(expanded));nav.classList.toggle('open',expanded)});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus()}});
const filterButtons=document.querySelectorAll('[data-filter]');
filterButtons.forEach(button=>button.addEventListener('click',()=>{
 filterButtons.forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});let visible=0;
 document.querySelectorAll('.moment').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;if(!card.hidden)visible++});
 document.querySelector('#filter-status').textContent=`Showing ${visible} chapter moments.`;
}));
const answers={order:'Orders would arrive faster, but drinks would still leave at the same pace. Drink preparation is the bottleneck. Try adding capacity there.',make:'Exactly! Making drinks is the bottleneck: 20 drinks per hour. With two independent makers, that becomes 40 per hour. Ordering can already handle 60. Improve the constraint first.',sign:'A clearer sign can help people find the queue, but it does not change drink-making capacity. Look for the slowest step in the process.'};
document.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-answer]').forEach(x=>{x.classList.toggle('selected',x===b);x.setAttribute('aria-pressed',String(x===b))});document.querySelector('#quiz-result').textContent=answers[b.dataset.answer]}));
const guides=[['Operations Research',1],['Simulation Modeling & Analysis',2],['Finance & Accounting',3],['Human Factors Engineering',4],['Quality Engineering & Reliability',5],['Stochastic Processes',6],['Modern Methods of Manufacturing',7],['Business Analytics',8],['Supply Chain Management',10],['Energy Policy & Economics',11],['Data & Information Engineering',13],['Explore ESMA',12]];
const guideGrid=document.querySelector('#guides');
guides.forEach(([title,index])=>{const b=document.createElement('button');b.className='guide-card';b.dataset.photo=`assets/field-guide-${index}.webp`;b.dataset.caption=title+' · Chapter topic guide';b.innerHTML=`<span>${title}<small>OPEN VISUAL GUIDE</small></span><b aria-hidden="true">↗</b>`;guideGrid?.append(b)});
const galleryItems=[...document.querySelectorAll('.gallery-item')];let galleryFilter='all',galleryLimit=12;
const matchingGallery=()=>galleryItems.filter(card=>galleryFilter==='all'||card.dataset.galleryCategory===galleryFilter);
function renderGallery(){const matches=matchingGallery();galleryItems.forEach(card=>{card.hidden=!matches.includes(card)||matches.indexOf(card)>=galleryLimit});const shown=Math.min(galleryLimit,matches.length);document.querySelector('#gallery-status').textContent=`Showing ${shown} of ${matches.length} pictures`;document.querySelector('#gallery-more').hidden=shown===matches.length;}
document.querySelectorAll('[data-gallery-filter]').forEach(b=>b.addEventListener('click',()=>{galleryFilter=b.dataset.galleryFilter;galleryLimit=12;document.querySelectorAll('[data-gallery-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});renderGallery()}));
document.querySelector('#gallery-more')?.addEventListener('click',()=>{const firstNew=matchingGallery()[galleryLimit];galleryLimit+=12;renderGallery();firstNew?.querySelector('button').focus()});
if(galleryItems.length)renderGallery();
const lightbox=document.querySelector('#lightbox');let trigger=null,currentPhoto=null;
function showPhoto(b){currentPhoto=b;const img=document.querySelector('#lightbox-image');img.src=b.dataset.photo;img.alt=b.dataset.caption;document.querySelector('#lightbox-caption').textContent=b.dataset.caption;document.querySelector('#full-image').href=b.dataset.photo;document.querySelector('#gallery-prev').hidden=!b.hasAttribute('data-gallery-photo');document.querySelector('#gallery-next').hidden=!b.hasAttribute('data-gallery-photo');}
function stepPhoto(direction){if(!currentPhoto?.hasAttribute('data-gallery-photo'))return;const photos=matchingGallery().map(c=>c.querySelector('button'));const next=(photos.indexOf(currentPhoto)+direction+photos.length)%photos.length;showPhoto(photos[next]);}
document.querySelectorAll('[data-photo]').forEach(b=>b.addEventListener('click',()=>{trigger=b;showPhoto(b);lightbox.showModal()}));
document.querySelector('#gallery-prev')?.addEventListener('click',()=>stepPhoto(-1));document.querySelector('#gallery-next')?.addEventListener('click',()=>stepPhoto(1));
lightbox?.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();stepPhoto(-1)}if(e.key==='ArrowRight'){e.preventDefault();stepPhoto(1)}});
document.querySelector('#close-lightbox')?.addEventListener('click',()=>lightbox.close());
lightbox?.addEventListener('click',e=>{if(e.target===lightbox){const r=lightbox.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)lightbox.close()}});
lightbox?.addEventListener('close',()=>trigger?.focus());
const today=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Dubai',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
document.querySelectorAll('[data-end]').forEach(card=>{if(today>=card.dataset.end){card.querySelector('.event-status').textContent='PAST EVENT';if(card.dataset.end==='2026-09-24'){card.querySelector('h3').textContent='Club Fair 2026';card.querySelector('.text-link').textContent='See chapter updates ↗'}else{card.querySelector('h3').textContent='CIE53 at KU'}}});
