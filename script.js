const menu=document.getElementById('menu');
const nav=document.getElementById('nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();
  alert('Thank you for contacting NutriNest! 🌿');
  this.reset();
});
