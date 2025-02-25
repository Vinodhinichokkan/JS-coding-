function throttle(func,delay){
    let lastCall = 0;

    return function(...args){
        const now = new Date().getTime();

        if(now - lastCall >= delay){
            lastCall = now;
            func.apply(this,args);
        }
    }
}

function onResize() {
    console.log('window resized',newDate().toLocalTimeString());
}

const throttledReSize = throttle(onResize,2000);
window.addEventListener('resize',throttledReSize);