const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const nav = $('#mainNav');
$('#menuToggle').addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  $('#menuToggle').setAttribute('aria-expanded', String(open));
});
$$('#mainNav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); $('#menuToggle').setAttribute('aria-expanded','false');
}));

let activeFilter = 'all';
const search = $('#productSearch');
function filterCards() {
  const term = search.value.trim().toLowerCase();
  let shown = 0;
  $$('.category-card').forEach(card => {
    const categoryMatch = activeFilter === 'all' || card.dataset.category === activeFilter;
    const textMatch = !term || (card.dataset.search + ' ' + card.innerText).toLowerCase().includes(term);
    const visible = categoryMatch && textMatch;
    card.hidden = !visible;
    if (visible) shown++;
  });
  $('#noResults').hidden = shown !== 0;
}
search.addEventListener('input', filterCards);
$$('.filter').forEach(btn => btn.addEventListener('click', () => {
  $$('.filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active'); activeFilter = btn.dataset.filter; filterCards();
}));

const modal = $('#enquiryModal');
function openEnquiry(item='') {
  $('#customerProduct').value = item;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden'; setTimeout(()=>$('#customerName').focus(),50);
}
function closeEnquiry() {
  modal.classList.remove('open'); modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
$$('.enquire-link').forEach(link => link.addEventListener('click', e => {
  e.preventDefault(); openEnquiry(link.dataset.item);
}));
$('#modalClose').addEventListener('click', closeEnquiry);
modal.addEventListener('click', e => { if(e.target === modal) closeEnquiry(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeEnquiry(); });
$('#enquiryForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#customerName').value.trim();
  const product = $('#customerProduct').value.trim();
  const message = $('#customerMessage').value.trim();
  const text = `Hello Satyam Traders, I would like to make an enquiry.%0A%0AName: ${encodeURIComponent(name || 'Not provided')}%0AProduct: ${encodeURIComponent(product)}%0AMessage: ${encodeURIComponent(message || 'Please share availability and price.')}`;
  window.open(`https://wa.me/917903201038?text=${text}`, '_blank', 'noopener');
  closeEnquiry();
});
$('#year').textContent = new Date().getFullYear();
const backTop = $('#backTop');
window.addEventListener('scroll', () => backTop.classList.toggle('visible', window.scrollY > 500), {passive:true});
backTop.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(()=>{}));
}
