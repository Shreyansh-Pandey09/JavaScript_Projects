const div =document.querySelector('div');

setInterval(()=>{
    const date = new Date();
    div.textContent = date.toLocaleTimeString();
},1000);