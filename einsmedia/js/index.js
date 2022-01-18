$(function() {
    const $btnHam = $('.btnHam');
    const $btnClose = $('.btn-close');
    $btnHam.on('click',function() {
        $('.pop').fadeToggle();
        $('.header').fadeToggle();
        $('.quick-service').fadeToggle();
        $('main').fadeToggle();
        $('.footer').fadeToggle();
    }) 

    $btnClose.on('click',function() {
        $('.pop').fadeToggle();
        $('.header').fadeToggle();
        $('.quick-service').fadeToggle();
        $('main').fadeToggle();
        $('.footer').fadeToggle();
    }) 
})

const viewModal = document.querySelector('.view-modal')
const dimm = document.querySelector('.dimm')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal-close')

viewModal.addEventListener('click', function() {
    dimm.style.display = 'block'
    modal.style.display = 'block'
})

modalClose.addEventListener('click', function() {
    dimm.style.display = 'none'
    modal.style.display = 'none'
})

window.onclick = function (event) {
    if (event.target === dimm) {
        dimm.style.display = 'none'
        modal.style.display = 'none'
    }
}