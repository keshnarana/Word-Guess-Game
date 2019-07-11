var singer= ["rihanna","ladygaga","katyperry","arianagrande","mileycyrus","beyonce","taylorswift"];

var randomWord = "";
var lettersOfWord = [];
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 10;


window.onload=Game;

document.onkeyup = function (event) {              
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();   //user input key
    
    checkLetters(guesses);  // call funtn
     
    complete();
    
    console.log(guesses);
   
  
    document.getElementById("guess").innerHTML = "  " + wrongGuess.join(" ");    //showing wrong guesses

}


function Game() {
  
    
    randomWord = singer[Math.floor(Math.random() * singer.length)];  // randomly select singer

    lettersOfWord = randomWord.split("");                            // breaking word to letter


    blanks = lettersOfWord.length;

    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

   
  
document.getElementById("currentWord").innerHTML = "  " + blanksAndCorrect.join(" ");
                                                                                           
    console.log(randomWord);                                                       //console logging 
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}


function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game();
}


                                                  
function checkLetters(letter) {                                 //If/Else, to see if letter selected matches random word

   

    for (var i = 0; i < wrongGuess.length; i++) {
        var l = [];
        l = wrongGuess[i];
    }

    var letterInWord = false;

    for (var i = 0; i < blanks; i++) {     //while letter is already placed in _ _
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
   
    if (letterInWord) {                     //while letter isnt placed in _ _
       
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;      //change blank index to that letter
            }
        }
    }
  
    else if(l != letter){               //while letter isnt placed in wrong guesses
        wrongGuess.push(letter)
        guessesRemaining--;
    }
    else{
        
        guessesRemaining = guessesRemaining;     //while letter is placed in wrong guesses
        console.log("already guessed");
    
}
    console.log(blanksAndCorrect);
}




function complete() {                              //final win/loss
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

   
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {     //if won
        wins++;
        
        document.getElementById("name").innerHTML = " " + randomWord.toUpperCase() + " " ;  // show singer name
        aud();                                  // call audio funtn to play song
        reset();                               //reset the game
       
        document.getElementById("win").innerHTML = " " + wins;           //win counter
       
      
    } else if (guessesRemaining === 0) {    //if lost
        losses++;
        reset();
        document.getElementById("loss").innerHTML = " " + losses;
    }
   
    document.getElementById("currentWord").innerHTML = "  " + blanksAndCorrect.join(" ");    // blank word
    document.getElementById("current").innerHTML = " " + guessesRemaining;         //guess counter
} 




function aud() {                                               //audio
    var aId = document.getElementById("audioId");
    var aId1 = document.getElementById("audioId1");
    var aId2 = document.getElementById("audioId2");
    var aId3 = document.getElementById("audioId3");
    var aId4 = document.getElementById("audioId4");
    var aId5 = document.getElementById("audioId5");
    var aId6 = document.getElementById("audioId6");
   
   
    if (randomWord === singer[0]) {       //pause others; show image 
        aId.play();
        aId1.pause();
        aId2.pause();
        aId3.pause();
        aId4.pause();
        aId5.pause();
        aId6.pause();
        document.getElementById("image").src = "https://specials-images.forbesimg.com/imageserve/5ceec355142c500008f42068/1920x0.jpg?cropX1=32&cropX2=1982&cropY1=257&cropY2=2207";
        var x = document.getElementsByClassName("sName")[0].id;
        document.getElementById("name1").innerHTML = " " + x;    //show song name
    }

    else if (randomWord === singer[1]) {
    
        aId1.play();
        aId.pause();
        aId2.pause();
        aId3.pause();
        aId4.pause();
        aId5.pause();
        aId6.pause();
        var x = document.getElementsByClassName("sName")[1].id;
        document.getElementById("name1").innerHTML = " " + x;
        document.getElementById("image").src = "https://media.vanityfair.com/photos/5baa3de987834306acdc66a4/16:9/w_1280,c_limit/lady-gaga-a-star-is-born-premiere.jpg";
       
    }

    else if (randomWord === singer[2]) {
        aId2.play();
        aId1.pause();
        aId.pause();
        aId3.pause();
        aId4.pause();
        aId5.pause();
        aId6.pause();
        var x = document.getElementsByClassName("sName")[2].id;
        document.getElementById("name1").innerHTML = " " + x;
        document.getElementById("image").src = "https://www.grammy.com/sites/com/files/styles/news_detail_header/public/katy_perry_020419.jpg?itok=1eyJ68SB";
       
    }

    else if (randomWord === singer[3]) {
        
        aId3.play();
        aId1.pause();
        aId2.pause();
        aId.pause();
        aId4.pause();
        aId5.pause();
        aId6.pause();
        document.getElementById("image").src = "https://pixel.nymag.com/imgs/daily/vulture/2017/05/22/22-Ariana-Grande.w700.h700.jpg";
        var x = document.getElementsByClassName("sName")[3].id;
        document.getElementById("name1").innerHTML = " " + x;
    }

    else if (randomWord === singer[4]) {
        aId4.play();
        aId1.pause();
        aId2.pause();
        aId3.pause();
        aId.pause();
        aId5.pause();
        aId6.pause();
        document.getElementById("image").src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/miley-cyrus-attends-the-61st-annual-grammy-awards-at-news-photo-1097522968-1549844508.jpg?crop=1.00xw:0.695xh;0,0.0932xh&resize=480:*";
        var x = document.getElementsByClassName("sName")[4].id;
        document.getElementById("name1").innerHTML = " " + x;
    }

    else if (randomWord === singer[5]) {
        
        aId5.play();
        aId1.pause();
        aId2.pause();
        aId3.pause();
        aId4.pause();
        aId.pause();
        aId6.pause();
        document.getElementById("image").src = "https://media.wmagazine.com/photos/5ab3b3cd8f35206e675d7d28/4:3/w_1536/beyonce-pledges-to-build-more-wells-in-burundi.jpg";
        var x = document.getElementsByClassName("sName")[5].id;
        document.getElementById("name1").innerHTML = " " + x;
    }

    else if (randomWord === singer[6]) {
      
        aId6.play();
        aId1.pause();
        aId2.pause();
        aId3.pause();
        aId4.pause();
        aId5.pause();
        aId.pause();
        document.getElementById("image").src = "https://pmcvariety.files.wordpress.com/2019/05/taylor-swift.jpg?w=1000";
        var x = document.getElementsByClassName("sName")[6].id;
        document.getElementById("name1").innerHTML = " " + x;
    }
}





