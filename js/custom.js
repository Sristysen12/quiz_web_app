alert("Welcome to quiz-Quest !")


var skip = document.getElementById('skip');
var score = document.getElementById('score');
var total_score = document.getElementById('total_score');
var countdown = document.getElementById('countdown');

var count = 0;
var scoreCount = 0;
var duration = 0;

var qaSet = document.querySelectorAll('.qa_set');
var qaAnsRow = document.querySelectorAll('.qa_set .qa_ans_row input');

skip.addEventListener('click',function(){
    step();
    duration = 10
})

qaAnsRow.forEach(function(qaAnsRowSingle){
    qaAnsRowSingle.addEventListener('click',function(){
        setTimeout(function(){
            step();
            duration = 10;
        },500)

        var valid = this.getAttribute("valid");
        if(valid == "valid"){
            scoreCount +=10;
            score.innerHTML = scoreCount;
            total_score.innerHTML = scoreCount;
        }else{
            
            if(scoreCount<0) scoreCount =0;
            score.innerHTML = scoreCount;
            total_score.innerHTML = scoreCount;
        }
    })
});
function step(){
    count += 1;
    for(var i=0; i<qaSet.length;i++){
        qaSet[i].className='qa_set';
    }
    qaSet[count].className='qa_set active';
    if(count == 9){
        skip.style.display = 'none';
        clearInterval(durationTime);
        countdown.innerHTML = 0;
    }
}
var durationTime = setInterval(function(){
    if (duration == 10) {
        duration = 0;      
    }
    duration +=1;
    countdown.innerHTML = duration;
    if(countdown.innerHTML == "10"){
        step()
    }
},1000);


