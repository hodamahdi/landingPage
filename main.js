let mainImg = document.getElementById('mainImg');
let imgList =document.querySelectorAll('.img');
let container = document.querySelector('.container');
let body = document.querySelector('body')

// change main image
 for(let i=0 ;i<imgList.length ;i++){
       imgList[i].addEventListener('click',function(e){
        imgSrc= e.target.getAttribute('src');
          mainImg.setAttribute('src',`${imgSrc}`);
         
       })  
    };

// change background color
imgList[0].addEventListener('click',function(){
    container.style.backgroundColor ='#000';
    body.style.backgroundColor ='#000';
    
});
imgList[1].addEventListener('click',function(){
    container.style.backgroundColor ='#247ec8';
    body.style.backgroundColor ='#247ec8';
});
imgList[2].addEventListener('click',function(){
    container.style.backgroundColor ='#1e1e1e';
    body.style.backgroundColor ='#1e1e1e';
});


imgList[3].addEventListener('click',function(){
    container.style.backgroundColor ='#c79b53';
    body.style.backgroundColor ='#c79b53';
});


imgList[4].addEventListener('click',function(){
    container.style.backgroundColor ='#c82525';
    body.style.backgroundColor ='#c82525';
});




