score = 0;
cross = true;
let music=new Audio("2.mp3")
let gameover=new Audio("gameover.mp3")

document.onkeydown = function(e){
    console.log("key code is: ", e.keyCode )
    if(e.keyCode==38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=> {
            dino.classList.remove('animateDino')

        }, 700);
        music.play();
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
        dinoX =parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if(e.keyCode==37 ){
        dino = document.querySelector('.dino');
        dinoX =parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + "px";
    }
   
    
}
 
setInterval(()=>{
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    
    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
      
    offsetX = Math.abs(dx-ox);
    offsety = Math.abs(dy-oy);
    //console.log(offsetX,offsety)
    if(offsetX< 93 && offsety<52){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni')
        gameover.play();
    }
    else if(offsetX< 145 && cross){
        score+=1;
        updateScore(score);
        cross =false;
        setTimeout(()=>{
            cross = true;
            music.play();
        }, 1000);
        setTimeout(()=>{
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.5;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 1000);
    }
    
}, 100);

function updateScore(score){
    scoreCount.innerHTML ="your Score: " + score
}
