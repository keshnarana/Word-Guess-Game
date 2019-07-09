var singer= ["rihanna","lady gaga","katy perry","ariana grande","miley cyrus","beyonce","taylor swift"];

var randomWord = "";
var lettersOfWord = [];
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 9;



function Game() {
  
    //computer generates random word from singer array
    randomWord = singer[Math.floor(Math.random() * singer.length)];

    // split the individual word into separate arrays, and store in new array 
    lettersOfWord = randomWord.split("");

    //store length of word in blanks, for later use
    blanks = lettersOfWord.length;

    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //showing the "_" within HTML
    document.getElementById("currentWord").innerHTML = "  " + blanksAndCorrect.join(" ");

    //console logging 
    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}


function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}





function aud() {
    var aId = document.getElementById("audioId");
    var aId1 = document.getElementById("audioId1");
    var aId2 = document.getElementById("audioId2");
    var aId3 = document.getElementById("audioId3");
    var aId4 = document.getElementById("audioId4");
    var aId5 = document.getElementById("audioId5");
    var aId6 = document.getElementById("audioId6");
    //Arthur Audio & Image
    //---------------------------
   
    if (randomWord === singer[0]) {
        aId.play();
        aId1.pause();
        aId2.pause();
        aId3.pause();
        aId4.pause();
        aId5.pause();
        aId6.pause();
        document.getElementById("image").src = "https://specials-images.forbesimg.com/imageserve/5ceec355142c500008f42068/1920x0.jpg?cropX1=32&cropX2=1982&cropY1=257&cropY2=2207";
      
    }

    else if (randomWord === singer[1]) {
    
        aId1.play();
        aId.pause();
        aId2.pause();
        aId3.pause();
        aId4.pause();
        aId5.pause();
        aId6.pause();
      
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
       
    }
}
//__________________________________________________________
//CHECK LETTERS/COMPARE FUNCTION
//__________________________________________________________

//If/Else, to see if letter selected matches random word
function checkLetters(letter) {

    var letterInWord = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        
        wrongGuess.push(letter);
        guessesRemaining--;
        
       
    }
    console.log(blanksAndCorrect);
}


//__________________________________________________________
//FINAL COMPLETE FUNCTION
//__________________________________________________________

//check to see if player won...
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //if WON...then alert, play audio, display image and reset new round
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        document.getElementById("name").innerHTML = " " + randomWord;
        aud()
        reset()
        //display wins on screen
        document.getElementById("win").innerHTML = " " + wins;
       
        //if LOST...then alert and reset new round
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("loss").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentWord").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("current").innerHTML = " " + guessesRemaining;
}



Game();

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check to see if guess entered matches value of random word
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //store player guess in console for reference 
    console.log(guesses);
   
    //display/store incorrect letters on screen
    document.getElementById("guess").innerHTML = "  " + wrongGuess.join(" ");

}
