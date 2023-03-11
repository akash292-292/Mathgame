var playing=false;
var score;
var action;
var timeremaining;
var crcans;
var nae;

document.getElementById("Start").onclick=
function(){
   
      if(playing==true){
        
             location.reload();
             
        }
    else{
        var x=prompt("Enter Time in Seconds You Want to Play:");
        nae=prompt("Enter Your Name:");
         playing=true;
         hide("Gameover");
         score=0;
         document.getElementById("scorevalue").innerHTML=score;
         show("timeremain");
         timeremaining=x;
         document.getElementById("Remain").innerHTML=timeremaining;
         document.getElementById("Start").innerHTML="Reset Game";
         startcntdown();
         generateQA();
        }
}
//<<<<<<<<<____________----------(-)-------______________>>>>>>>>>>>????????//////
//clicking on an answer box;
///------->>>>>>>>>>>>>for ans1<<<<<<--------------//////
document.getElementById("ans1").onclick=function(){
    console.log(1);
   if(playing==true){
    if(this.innerHTML==crcans){
        console.log(1);
        score++;
        document.getElementById("scorevalue").innerHTML=score;
        hide("wrong");
        show("correct");
        setTimeout(function(){
            hide("correct");
        },1000);
        generateQA();
    }

    else{
        hide("correct");
        show("wrong");
        setTimeout(function(){
            hide("wrong");
        },1000);
    
   }
}
else{


}

}
////------------>>>>>ans2<<<<<<---------------------///////
document.getElementById("ans2").onclick=function(){
    console.log(1);
   if(playing==true){
    if(this.innerHTML==crcans){
        console.log(1);
        score++;
        document.getElementById("scorevalue").innerHTML=score;
        hide("wrong");
        show("correct");
        setTimeout(function(){
            hide("correct");
        },1000);
        generateQA();
    }

    else{
        hide("correct");
        show("wrong");
        setTimeout(function(){
            hide("wrong");
        },1000);
    
   }
}

}
///------------------>>>>>>>>>>>>>ans3<<<<<<<<<<-----------///
document.getElementById("ans3").onclick=function(){
    console.log(1);
   if(playing==true){
    if(this.innerHTML==crcans){
        console.log(1);
        score++;
        document.getElementById("scorevalue").innerHTML=score;
        hide("wrong");
        show("correct");
        setTimeout(function(){
            hide("correct");
        },1000);
        generateQA();
    }

    else{
        hide("correct");
        show("wrong");
        setTimeout(function(){
            hide("wrong");
        },1000);
    
   }
}

}
/////---------------->>>>>>>>>>ans4<<<<<<<<------------/////
document.getElementById("ans4").onclick=function(){
    console.log(1);
   if(playing==true){
    if(this.innerHTML==crcans){
        console.log(1);
        score++;
        document.getElementById("scorevalue").innerHTML=score;
        hide("wrong");
        show("correct");
        setTimeout(function(){
            hide("correct");
        },1000);
        generateQA();
    }

    else{
        hide("correct");
        show("wrong");
        setTimeout(function(){
            hide("wrong");
        },1000);
    
   }
}

}


//--------------->>>>>funtions<<<<<<-----------------------///
function startcntdown(){
   action= setInterval(function(){
    timeremaining-=1;
    document.getElementById("Remain").innerHTML=timeremaining;
   if(timeremaining==0){
    stpcntdwn();
    show("Gameover");
    document.getElementById("Gameover").innerHTML="<p>Game Over!</p><p>"+nae+" Your Score is :"+score+"</p>";
    hide("timeremain");
    hide("correct");
    hide("wrong");
    playing=false;
    document.getElementById("Start").innerHTML="Start Game";
   
   }
},1000);
}
//----------------------->>>>Stop Counter------------------------>>>>>>>>>>>////
function stpcntdwn(){
    clearInterval(action);
}
function hide(id){
document.getElementById(id).style.display="none";
}
function show(id){
    document.getElementById(id).style.display="block";
}
///------>Function to generate Question and ans----->>?/////
function generateQA(){
    var x1=1+Math.round(Math.random()*9);
    var y1=1+Math.round(Math.random()*9);
    crcans=x1*y1;
    document.getElementById("Question").innerHTML=x1+"X"+y1;
    var crctposition=1+Math.round(Math.random()*3);
    document.getElementById("ans"+crctposition).innerHTML=crcans;
    var answers=[crcans];
   for(var i=1;i<=4;i++){
    if(i!=crctposition){
        var wrongans;
        do{
        wrongans=(Math.round(Math.random()*9)+1)*(Math.round(Math.random()*9)+1);
       
    }while(answers.indexOf(wrongans)>-1);
    answers.push(wrongans);
    document.getElementById("ans"+i).innerHTML=wrongans;
       }
   }

}