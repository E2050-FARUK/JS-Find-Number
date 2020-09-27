
let counter = 0;
const myNum = Math.floor(Math.random() * 100 + 1);
document.getElementById("check").addEventListener("click", checkNumber)    
document.querySelector("#guess").addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        checkNumber()
    }
});

function checkNumber(){
    let guessNum = document.getElementById("guess").value;
    counter += 1;
    document.getElementById("counter").innerHTML = "This is your test number: " + counter;
    if (guessNum == ""){
        document.getElementById("answer").innerHTML = "Write a number?";
        
    } else if (isNaN(guessNum)) {
        document.getElementById("answer").innerHTML = "Are you sure that this is a number?";
        
    } else if (guessNum < myNum){
        document.getElementById("answer").innerHTML = "I am thinking about higher number";
        
    } else if (guessNum > myNum) {
        document.getElementById("answer").innerHTML = "I am thinking about lower number";
        
    }
    else {
        
        alert("You are the winner 😃 " + "You guessed after " + counter + " times!" );
        if (window.confirm("You wanna play again!")) {
            window.location.href = "./index.html"
        }
        else {
            document.getElementById("answer").innerHTML = "Thanks for playing game.";
            document.getElementById("counter").innerHTML = "";
        }
    }
    document.getElementById("guess").focus();
    document.getElementById("guess").value='';
}