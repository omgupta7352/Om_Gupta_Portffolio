let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('ri-menu-fill');
})

let typed = new Typed('.auto-input', {
    strings:['Back-End Developer', 'Full Stack Developer', 'Competitive Programmer'],
    typeSpeed:100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})