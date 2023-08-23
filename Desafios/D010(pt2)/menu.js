window.addEventListener('scroll', function(){
    let header = window.document.querySelector('header#header')
    header.classList.toggle('rolagem', window.scrollY > 100)
})