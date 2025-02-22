// +++++++++++++++++++++  FIRSRT PAGE ANIMATION ++++++++++++++++++++++++++

const girlIllustration=document.querySelector('#land-img');
const potLeft=document.querySelector('#pot_1');
const potRight=document.querySelector('#pot_2');
const girlsShadow=document.querySelector('.shadow');


window.addEventListener('scroll',()=>{

    let val=window.scrollY;

    girlIllustration.style.bottom=`${val}px`;
    potRight.style.bottom=`${val*0.7}px`;
    potLeft.style.bottom=`${val*0.7}px`;

    if(val<170){
        girlsShadow.style.width=`${val+160}px`;
    }

})