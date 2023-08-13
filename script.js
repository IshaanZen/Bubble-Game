var timer = 60;//A global variable for the timer clock

var score = 0 ; // creatd a var score to score the score

var hitboxRn = 0 // to create a rvar hitBoxRn so that it can be used in the final step to match with clickednumber


//Function to generate bubbles in the box
function bubblegenerate(){
    
    var clutter="";
    for(var i =1 ; i<141;i++){ 
        // random value is to be generated to give every bubble a random value
        var rn = Math.floor(Math.random()*10);
        
        clutter+= `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#p-bottom").innerHTML = clutter;
    
}

//Function to make the hit-box generate a random number
function hitcontrol(){
    
    hitBoxRn = Math.floor(Math.random()*10);
    document.querySelector("#hit-box").textContent = hitBoxRn;
    
}

//Function to make the timer countdown
function timer_count(){
    
    var timerint = setInterval(() => {
        // created the if part because the timer was print values after 0 .. that means it wasnt stopping at 0 it was printing negative numbers too
        if(timer>0){
            timer --;
            document.querySelector("#timer-box").textContent = timer;
            // console.log("timer");

        }
        else{
            // we passes the setinterval var (timerint) in the clear interval to stop the interval bcz after 0 in the timer box the interval was still 
            // running which was taking extra memory .. it just wasnt printing any number after 0 
            // console.log("hello")
            // clear intervall is created bcz timer wasnt stopping ... it was not printing values after 0 but the timer was still going on 
            clearInterval(timerint);
            document.querySelector("#p-bottom").innerHTML =  `<h2 id="g_over" > Game Over </h2>`;
            
        }

        
    }, 1000);

}


// function for score 
function scorecount(){
    score += 10;
    document.querySelector("#score-box").textContent = score;
}

// we used event bubbling here because ... event bubbling allows us to give and event hander to a whole div which have multiple elements that carry the
// same event handling so what happens is when you click an element inside that div if there exist a specific event handling that will be executed 
// if not then it will search its parent for and event which will help that element event to be handled

// as in this case there were 129 bubble element in the p-bottom div so rather than giving specific click event to every 129 bubbles 
// we gave an event handler to the parent div p-bottom .. so it will use event bubbling .. i.e whenever the bubbles will be clicked it will check
// the parent if it consist any event handler .. and if yes use that event to exeecute the bubble

document.querySelector("#p-bottom").addEventListener("click" , function(e){

    // this var will store the NUMBER present in the div by type conversion usin Number();
    var clickednum = Number(e.target.textContent);
    // console.log(e.target.textContent)
    if(hitBoxRn === clickednum){
        scorecount()
        hitcontrol();
        bubblegenerate();
    }

})



function gamerestart(){
    score = 0;
    document.querySelector("#score-box").textContent = score;
    timer = 60;
    bubblegenerate();
    hitcontrol();
    timer_count();
}

timer_count();
hitcontrol();
bubblegenerate();