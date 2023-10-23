const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('.nav_items');

// open nav menu 
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
})

// close nav menu 
closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
})

// Show/hide faq's 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');
    // change icon 
    const icon = faq.querySelector('.faq__icon i');
    if(icon.className === 'bx bx-plus') {
      icon.className = 'bx bx-minus';
    } else {
      icon.className = 'bx bx-plus';
    }
  })
})

// add background style to navbar 
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

