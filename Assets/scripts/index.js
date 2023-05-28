var lightNumber=1;
var direction="RIGHT";
var lights=$('.light');
console.log(lights);

function updateLights(){

    $('.light').css({background:'white'});

    lights[lightNumber].style.background='red';

    if(lightNumber>0){
        lights[lightNumber -1].style.background='pink';
    }
    if(lightNumber<6){
        lights[lightNumber +1].style.background='pink';
    }
    if(lightNumber===6){
        direction='LEFT';
    }
    if(lightNumber===0){
        direction='RIGHT';
    }
    if(direction==="RIGHT"){
        lightNumber++;
    }else{
        lightNumber--;
    }
}

// on button actions

let intervalId;

$('#start-btn').click(function (e) { 
    $('audio')[0].play();
    intervalId=setInterval(updateLights,100);
});

$('#end-btn').click(function (e) {
    $('audio')[0].pause(); 
    clearInterval(intervalId);
});