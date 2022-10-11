require('dotenv').config()

document.getElementById("btn").addEventListener("click", ()=>{
    const el = document.getElementById("text");
    el.classList.toggle('purple')
    
});


const loadFunc = ()=>{
    console.log('yes');
    console.log(process.env.MY_ENV)
}

window.onload = loadFunc;