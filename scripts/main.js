function handleLoad() {
    var numgrades;
    var rotateElement = document.querySelector('.container__line')
    var numprint = document.querySelector('.print')
    function handleRotate(){
        numgrades =Math.floor(Math.random()*(360));
        rotateElement.style.transform ='rotate('+numgrades+'deg)';
        numprint.textContent=numgrades;
    }
    setInterval(handleRotate,2000);
}

window.addEventListener('load',handleLoad);