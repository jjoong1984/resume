var elOpen = document.querySelector('.open-gnb')
var elHeader = document.querySelector('#header')
var elOutlayer = document.querySelector('.outlayer')

function openGnb(){ 
    elHeader.classList.toggle('on')
    // if (elHeader.classList.contains('on')) { 
    //     elHeader.classList.remove('on')
    // } else { 
    //     elHeader.classList.add('on')
    // }
    elOutlayer.classList.toggle('on')   
}
elOpen.addEventListener('click',openGnb)
elOutlayer.addEventListener('click', openGnb)

function winResize() { 
    var winWidth = this.innerWidth
    if(winWidth>800) {
        elHeader.classList.remove('on')
        elOutlayer.classList.remove('on')
    }   
}
window.addEventListener('resize', winResize)

