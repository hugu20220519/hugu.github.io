let MyImage = document.querySelector('img');

MyImage.onclick = function (){
    let mySrc = MyImage.getAttribute('src');
    if (mySrc === 'images/0.jpg') {
        MyImage.setAttribute('src', 'images/11.jpg')
    } else {
        MyImage.setAttribute('src', 'images/0.jpg')
    }
}

function multiply(num1, num2){
    return num1 * num2;
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('请输入你的名字')
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem('name', myName)
        myHeading.textContent = 'Mozilla is cool,' + myName + '！'
    }
}

if (!localStorage.getItem('name')) {
    setUserName()
} else {
    let storedName = localStorage.getItem('name')
    myHeading.textContent = 'Mozilla is cool,' + storedName + '！'
}

myButton.onclick = function (){
    setUserName()
}