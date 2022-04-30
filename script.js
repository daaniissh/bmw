// hero swiper coment

var swiper = new Swiper(".mySwiper", {
    effect: 'fade',
    speed: 3000,
    spaceBetween: 0,
    loop: true,     
    pagination: {
      el: ".swiper-pagination",
      clickable: true, 
    },
    // autoplay:{
    //     delay:3000,
    // }
  });



  // mobile menu 

  let mobileMenu = document.querySelector('.fa-bars');
  let ul = document.querySelector('header .menu');
  

  mobileMenu.addEventListener('click', function(){
      ul.classList.toggle('open');
  })

// header menu active red underline

const items = document.querySelectorAll('ul li')


items.forEach((item) => {
    item.addEventListener('click', (e)=> {
      e.preventDefault()
      document.querySelector('li.active').classList.remove('active');
      item.classList.add('active');
    })
}); 



  




