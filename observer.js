const button = document.querySelector("button")

function observer1(){
    console.log("observer 1 notified");
}

function observer2(){
    console.log("observer 2 notified");
}

button.addEventListener("click",observer1)
button.addEventListener("click",observer2)

const count = document.getElementById("count")

function observer1(){
    console.log("observer1 notified")
}

function observer2(){
    console.log("observer2 notified")
}

function observer3(){
    console.log("observer3 notified")
}