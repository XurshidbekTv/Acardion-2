const button1=document.getElementById('btn1');
const button2=document.getElementById('btn2');
const button3=document.getElementById('btn3');
const img1=document.getElementById('img1');
const img2=document.getElementById('img2');
const img3=document.getElementById('img3');
const span=document.querySelectorAll('span');

img1.style.display='none';
img2.style.display='none';
img3.style.display='none';


button1.addEventListener('click',()=>{
    if(img1.style.display=='none'){
        img1.style.display='flex';
        span[0].style.transform='rotate(-45deg)';
    }else{
        img1.style.display='none';
        span[0].style.transform='rotate(-225deg)';
    }
})

button2.addEventListener('click',()=>{
    if(img2.style.display=='none'){
        img2.style.display='flex';
        span[1].style.transform='rotate(-45deg)';
        
    }else{
        img2.style.display='none';
        span[1].style.transform='rotate(-225deg)';
        
    }
})

button3.addEventListener('click',()=>{
    if(img3.style.display=='none'){
        img3.style.display='flex';
        span[2].style.transform='rotate(-45deg)';

    }else{
    img3.style.display='none';
    span[2].style.transform='rotate(-225deg)';

    }
})