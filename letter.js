const audio1=new Audio('./audio/au1.mp3');

const audio2=new Audio('./audio/au2.mp3');
//audio2.play();
const audio3=new Audio('./audio/au3.mp3');
//udio3.play();
const audio4=new Audio('./audio/au4.mp3');
//audio4.play();
const audio5=new Audio('./audio/au5.mp3');
//audio5.play();
const a=document.getElementById('a');
const eE=document.getElementById('e')

document.addEventListener('keydown', function (e){
    if(e.key==='a'){
        a.setAttribute('style', 'transform: scale(1.5); transition: transform 0.3s ease-in-out')
         audio1.play();
        console.log(e.key)
    }
    else if(e.key==='b'){
        b.setAttribute('style', 'transform: scale(1.5); transition: transform 0.3s ease-in-out')
         audio2.play();
        console.log(e.key)
    }
    else if(e.key==='c'){
        c.setAttribute('style', 'transform: scale(1.5); transition: transform 0.3s ease-in-out')
         audio3.play();
        console.log(e.key)
    }
    else if(e.key==='d'){
        d.setAttribute('style', 'transform: scale(1.5); transition: transform 0.3s ease-in-out')
         audio4.play();
        console.log(e.key)
    }
    else if(e.key==='e'){
        eE.setAttribute('style', 'transform: scale(1.5); transition: transform 0.3s ease-in-out')
         audio5.play();
        console.log(e.key)
    }
});
document.addEventListener('keyup', function (e){
    
    if(e.key==='a'){
        a.removeAttribute('style', 'transform: scale(1.5); transition: transform 0.3s ease-in-out')
         audio1.pause();
         audio1.currentTime=0;
        console.log(e.key)
    }
    else if(e.key==='b'){
        b.removeAttribute('style', 'transform: scale(1.5); transition: transform 0.3s ease-in-out')
         audio2.pause();
         audio2.currentTime=0;
        console.log(e.key)
    }
    else if(e.key==='c'){
        c.removeAttribute('style', 'transform: scale(1.5); transition: transform 0.3s ease-in-out')
         audio3.pause();
         audio3.currentTime=0;
        console.log(e.key)
    }
    else if(e.key==='d'){
        d.removeAttribute('style', 'transform: scale(1.5); transition: transform 0.3s ease-in-out')
         audio4.pause();
         audio4.currentTime=0;
        console.log(e.key)
    }
    else if(e.key==='e'){
        eE.removeAttribute('style', 'transform: scale(1.5); transition: transform 0.3s ease-in-out')
         audio5.pause();
         audio5.currentTime=0;
        console.log(e.key)
    }

});
/*
document.addEventListener('keydown', function(event) {
    // Handle keydown event here
    console.log('Key pressed:', event.key);
  });*/