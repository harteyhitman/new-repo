
const btn1 = document.getElementById("btn1")

btn1.addEventListener('click', function onclick(event){
    console.log('clicked')
    const backgroundColor = btn1.style.backgroundColor

    if (backgroundColor === '#001334') {
        btn1.style.backgroundColor = 'black'
    }
})