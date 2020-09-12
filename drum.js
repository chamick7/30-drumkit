document.addEventListener('keydown',event => {

    const key = event.key.toUpperCase().toString();
    
    document.querySelector('#'+key).classList.add('playing');
    const audio = document.querySelector(`audio[key = "${key}"]`)

    audio.currentTime = 0;
    audio.play();


});


function removetrans(e){
    if(e.propertyName != 'transition') return;
    console.log('remove');
    e.target.classList.remove('playing');
}

const drums = document.querySelectorAll('.drum');

drums.forEach(drum => {
    drum.addEventListener('transitionend',()=>{drum.classList.remove('playing')});
})
