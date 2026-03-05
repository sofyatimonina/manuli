$('.slider').bxSlider({
    auto: true,
    autoStart:true,
    speed: 500,
  slideWidth: 800,
  infiniteLoop: true,
  controls: false,
});

 let links = document.querySelectorAll('.scroll');
let targetID;
links.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})

$('html').on('mousemove', function (e) {
    let bubble = $('<div class="bubble"></div>');
    bubble.css({'left': e.clientX - 5, 'top': e.clientY - 5});
    $('.bubble').fadeOut(1000, "linear");
    $('body').append(bubble);
    let timer = setInterval(function () {
        bubble.remove()
    }, 1000);
});