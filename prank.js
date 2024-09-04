const noButton =document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

noButton.addEventListener('mouseover',() =>{
    const randomX=Math.floor(Math.random()*(window.innerWidth -noButton.clientWidth));
    const randomY=Math.floor(Math.random()*(window.innerHeight - noButton.clientHeight));

    noButton.style.position='absolute';
    noButton.style.left=`${randomX}px`;
    noButton.style.top=`${randomY}px`;
});
yesButton.addEventListener('click',()=>{
    document.querySelector('.container').style.display='none';
    gifContainer.style.display='block';

});
