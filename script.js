alert("Hello!");
console.log("TEST! Nongol gak??");

let nongol = "keenakan diikhlasin";

/**
 * CHALLENGE-1 : Your Age in Days
 */

function ageInDays() {
    var birthYear = prompt("What year you were born pal?");
    var year = new Date();
    var ageInDay = (year.getFullYear() - birthYear) * 365;
    //alert(ageInDay + " days, because this year is " + year.getFullYear());

    //ini nanti SETTING 'flex-box-result' buat DITIMPA sama '<h1>'
    var tagH1 = document.createElement("h1");
    //CREATE VARIABLE yang akan JADI TEKS di DALAM TAG '<h1>'
    var textAnswer = document.createTextNode("You are " + ageInDay + " days");
    //ini nanti TAG '<h1>' akan PUNYA ID yang ISINYA adalah FUNCTION 'ageInDays()'
    tagH1.setAttribute("id","ageInDays");
    //ini MENGISI TAG '<h1>' dengan ISI STRING yang DI-CREATE di VAR 'textAnswer'
    tagH1.appendChild(textAnswer);
    //ini MENGISI  '<div id = flex-box-result>' DENGAN '<h1>'
    document.getElementById("flex-box-result").appendChild(tagH1);
    //console.log(ageInDay);
}

function reset() {
    document.getElementById("ageInDays").remove();
}

/**
 * CHALLENGE-2 : Cat Generator
 */
 function generateCat() {
    //ini nanti SETTING 'flex-cat-gen' buat DITIMPA SAMA "<img>
    var image = document.createElement("img");
    console.log("img");
    //VAR 'div' bakal CARI '<div>' ber-ID = 'flex-cat-gen'
    var div = document.getElementById("flex-cat-gen");
    console.log("div");
    //ini nanti TAG '<img>' akan PUNYA ID yang ISINYA adalah FUNCTION 'generateCat()'
    image.setAttribute("id","generateCat"); //ini DIBUTUHKAN SUPAYA nanti IMAGE kucing BISA DIHAPUS
    //memberi SOURCE pada TAG 'img' dari VARIABLE 'var image'
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    console.log(image.src);
    console.log(image);
    //MENAMBAH GAMBAR di dalam '<div>' yang telah DIPILIH di 'var div'
    div.appendChild(image);
    console.log("append");
 }

 function resetCat() {
    //eksekusi MENCARI element dengan 'Id = generateCat' untuk KEMUDIAN di-REMOVE (satu per-satu) 
    //SELAMA 'while' MASIH BISA 'remove' (ATAU 'true') maka AKAN TERUS looping MENGHAPUS
    while (document.getElementById("generateCat") != null) {
        document.getElementById("generateCat").remove();
    }
 }

 /**
  * CHALLENGE-3 : Rock, Paper, Scissor (Part-1)
  */
function rpsGame(yourChoice) {
    console.log("YANG di-KLIK :\n", yourChoice);
    //GET from HTML '<img src=[value]'
    console.log("RESOURCE yang di-KLIK :\n", yourChoice.src); //ACCESSING/REFERENCE to OBJECT 'yourChoice' SO CAN DO the .[any action] ('.src')
    //GET from HTML '<img id=[value]'
    console.log("ID yang di-KLIK :", yourChoice.id); //ACCESSING/REFERENCE to OBJECT 'yourChoice' SO CAN DO the .[any action] ('.id')

    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log("Computer choice :", botChoice);
    //THIS is a FUNCTION
    let results = decideWinner(humanChoice, botChoice); //e.g: [0,1] --> human lost | bot win
    console.log(results);
    let message = finalMessage(results); //e.g: you win! | you lost! --> {'message' : "You won!", 'color' : "green"}
    console.log(message);
    //THIS is a FUNCTION
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

//FUNGSI untuk MILIH ACAK ANGKA antara 0-2 BUAT dijadiin INDEX
function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

//FUNGSI untuk NENTUIN SCORE(MILIH isi ARRAY) based on CHOSEN INDEX in FUNCTION 'randToRpsInt()'
function numberToChoice(number) {
    return ["rock","paper","scissor"][number];
}

//FUNGSI untuk MEMBUAT ARRAY 2 ELEMENT based on HUMAN CHOICE and BOT CHOICE
function decideWinner(yourChoice, computerChoice) {
    //cara DECLARE VARIABLE KAYA GINI disebut OBJECT
    var rpsDatabase = {
        "rock" : {"scissor" : 1, "rock" : 0.5, "paper" : 0},
        "paper" : {"rock" : 1, "paper" : 0.5, "scissor" : 0},
        "scissor" : {"paper" : 1, "scissor" : 0.5, "rock" :0}
    };

    //INPUT yang MASUK ke 'yourScore' dan 'computerScore' ADALAH SAMA, yang BEDA adalah PERSPEKTIF, 'yourScore' dari PERSPEKTIF HUMAN, 'computerScore' dari PERSPEKTIF BOT
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {"message" : "You Lost!", "color" : "red"};
    }
    else if (yourScore === 0.5) {
        return {"message" : "You Tied!", "color" : "yellow"};
    } else {
        return {"message" : "You Won!", "color" : "green"};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        "rock" : document.getElementById("rock").src,
        "paper" : document.getElementById("paper").src,
        "scissor" : document.getElementById("scissor").src
    }

    //REMOVING ALL IMAGES after CHOSEN/CLICKING
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();

    //ISI dari 'humanImageChoice' ADALAH ID '<img>' yang DI-PASSING ke OBJECT 'imagesDatabase'
    console.log(imagesDatabase[humanImageChoice]);
    console.log(humanImageChoice);
    
    //CREATE '<div>' TO DISPLAY CHOICE from human and bot AND DISPLAY the WINNER MESSAGE
    var humanDiv = document.createElement("div");
    //humanDiv.setAttribute("id","hapus");
    var botDiv = document.createElement("div");
    //botDiv.setAttribute("id","hapus");
    var messageDiv = document.createElement("div");
    //messageDiv.setAttribute("id","hapus");

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    //ACCESSING 'final message' OBJECT, WHICH IS 'color'
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
    //SHOWING back HUMAN CHOSEN/CLICKING IMAGE
    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);
    //SHOWING BOT chosen IMAGE
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

function resetRps() {
    //try {
        //while (true) {
            document.getElementById("flex-box-rps-div").remove();
        /* }
        console.log("Exit");
    } catch (error) {
        console.log(error);
    } */
    
    console.log("test masuk");
    restoreRps();
    console.log("test masuk 2");
}

function restoreRps() {
    var flexRestore = document.createElement("div");
    flexRestore.setAttribute("class","flex-box-rps");
    flexRestore.setAttribute("id","flex-box-rps-div");

    /* var rockDiv = document.createElement("div");
    var paperDiv = document.createElement("div");
    var scissorDiv = document.createElement("div"); */

    flexRestore.innerHTML = "<img id='rock' src='images/rps_rock-clipart-clipart-harvestable-resources-rock.png' height=150 width=150 alt='' onclick='rpsGame(this)' /><img id='paper' src='images/rps_paper-clipart-nexxuz-Loose-Leaf-Paper.png' height=150 width=150 alt='' onclick='rpsGame(this)' /><img id='scissor' src='images/rps_female-hand-sign-victory-sign-peace-si_-vector-color-flat-ilustration-isolated-white-background-web-83128345.jpg' height=150 width=150 alt='' onclick='rpsGame(this)' />";
    //paperDiv.innerHTML = "";
    //scissorDiv.innerHTML = "";

    document.getElementsByClassName("container-3")[0].appendChild(flexRestore);
    /* document.getElementById("flex-box-rps-div").appendChild(rockDiv);
    document.getElementById("flex-box-rps-div").appendChild(paperDiv);
    document.getElementById("flex-box-rps-div").appendChild(scissorDiv); */
}

/**
 * CHALLENGE-4 : Change Button Colors
 */
//ini NGAMBIL SEMUA ELEMENT 'button' di FILE 'index.html' lalu DIMASUKKAN ke 'var all_buttons' (jadi HTML COLLECTION)
var all_buttons = document.getElementsByTagName("button"); //--> ini LIST of ARRAY
console.log("isi 'all_buttons': ", all_buttons);

var copyAllButtons = [];
//ini LOOPING untuk DUPLICATE ISI 'all_buttons' ke DALAM 'copyAllButtons'
for (let i = 0; i < all_buttons.length; i++) {
    //KENAPA 'classList[1]'?? CONTOH : '<button class="btn btn-primary">' ==> 'btn-primary' ADALAH 'classList[1]' dan 'btn' ADALAH 'classList[0]
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log("isi 'copyAllButtons': ", copyAllButtons);

//DIINGAT!! --> all_buttons/copyAllButtons[index].classList.add/remove("[class of element]");
function buttonColorChange(buttonThingy) {
    console.log(buttonThingy.value);

    if (buttonThingy.value === "red") {
        buttonsRed();
    } else if (buttonThingy.value === "green") {
        buttonsGreen();
    } else if (buttonThingy.value === "reset") {
        buttonColorReset();
    } else if (buttonThingy.value === "random") {
        randomColors();
    }
}
//TURNING ALL buttons into RED
function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("btn-danger");
    }
}
//TURNING ALL buttons into GREEN
function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("btn-success");
    }
}
//TURNING ALL buttons into ITS DEFAULT
function buttonColorReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
//TURNING ALL buttons into RANDOM COLOR
function randomColors() {
    //PREPARING CHOICES for 2ND CLASS in BUTTON 'value'
    var choices = ["btn-primary","btn-danger","btn-warning","btn-success"];
    
    for (let i = 0; i < all_buttons.length; i++) {
        //creating RANDOM NUMBER
        var randomNumber = Math.floor(Math.random() * 4);
        
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        //all_buttons[i].classList.add(copyAllButtons[Math.floor(Math.random() * copyAllButtons.length)]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

/**
 * CHALLENGE 5 : How Black Jack Works
 */
//crreating OBJECT DICTIONARY 'blackJackGame'
let blackJackGame = {
    //REFER to CODING in index.html '<div class:"container-5">'
    "you": {"scoreSpan" : "#your-blackjack-result", "div" : "#your-box", "score" : 0},
    "dealer": {"scoreSpan" : "#dealer-blackjack-result", "div" : "#dealer-box", "score" : 0},
    "card": ["2","3","4","5","6","7","8","9","10","J","Q","K","A"],
    "cardsMap": {"2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "10":10, "J":10, "Q":10, "K":10, "A":[1,11]},
    "wins": 0,
    "losses": 0,
    "draws": 0,
    "isStand": false, //--> to CHECK whether BUTTON STAND has been CLICKED or NOT CLICKED
    "turnIsOver": false //--> CHECKING whether YOU or DEALER has DONE their TURN (whether DEALER has FINISH its TURN)
};

const YOU = blackJackGame["you"];
const DEALER = blackJackGame["dealer"];

//PREPARING SOUND for ACTION clicking BUTTON HIT
const hitSound = new Audio("sounds/swish.m4a");
const winSound = new Audio("sounds/cash.mp3");
const lossSound = new Audio("sounds/aww.mp3");

 //to READ when USER CLICK on SOMETHING 'id='blackjack-hit-button' then RUN FUNCTION 'blackJackHit()'
 //(LIKE 'onclick=[function]') but MUCH MORE EFFICIENT; NO MORE 'onclick=[function]' OR 'onchange=[function]'
document.querySelector("#blackjack-hit-button").addEventListener("click", blackJackHit);
document.querySelector("#blackjack-deal-button").addEventListener("click", blackJackDeal);
document.querySelector("#blackjack-stand-button").addEventListener("click", dealerLogic);

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackJackGame["card"][randomIndex];
}

function showCard(card, activePlayer) {
    if (activePlayer["score"] <= 21) {
        let cardImage = document.createElement("img");
        //SINGLE QUOTE is REPLACED with APOSTROPHE so we CAN USE SYMBOL like '${card}'
        cardImage.src = `images/${card}.png`;
        //QUERY SELECTING 'YOU' with OBJECT 'div' INSIDE and DO 'appendChild()' WITH 'cardImage'
        //document.querySelector(YOU["div"]).appendChild(cardImage);
        document.querySelector(activePlayer["div"]).appendChild(cardImage);    
        hitSound.play();
    }
}

function blackJackHit() {
    //alert("You just Click ME!");
    if (blackJackGame["isStand"] === false) { //--> RUN this WHEN 'DEALER' NEVEN been CLICKED
        let card = randomCard();
        //console.log("hit card shape =", card);
        //console.log("hir card value =", blackJackGame["cardsMap"][card]);
        showCard(card, YOU);
        updateScore(card, YOU);
        console.log("score hit =", YOU["score"]);
        showScore(YOU);
    }
}

function blackJackDeal() {
    if (blackJackGame["turnIsOver"] === true) {
        //'querySelector()' bisa DIPAKAI BERLAPIS2 sesuai KEDALAMAN TAGS '<>'
        let yourImages = document.querySelector("#your-box").querySelectorAll("img");
        console.log(yourImages);
        let dealerImages = document.querySelector("#dealer-box").querySelectorAll("img");
        console.log(dealerImages);
    
        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }
    
        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }
    
        YOU["score"] = 0;
        console.log("you score =", YOU["score"]);
        showScore(YOU);
        document.querySelector("#your-blackjack-result").style.color = "#ffffff";
    
        DEALER["score"] = 0;
        console.log("dealer score =", DEALER["score"])
        showScore(DEALER);
        document.querySelector("#dealer-blackjack-result").style.color = "#ffffff";
    
        document.querySelector("#blackjack-result").textContent = "Let's Play";
        document.querySelector("#blackjack-result").style.color = "black";
    }

    //(RESTART) RESETTING both OBJECTS to their INITIAL STATE BEFORE game is PLAYED
    blackJackGame["isStand"] = false;
    blackJackGame["turnIsOver"] = false;
}

/* function blackJackStand(activePlayer) {
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
} */

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    blackJackGame["isStand"] = true;

    while (DEALER["score"] <= 15 && blackJackGame["isStand"] === true) {
        let card = randomCard();
        //console.log("dealer card shape =", card);
        //console.log("dealer card value =", blackJackGame["cardsMap"][card]);
        showCard(card, DEALER);
        updateScore(card, DEALER);
        console.log("score dealer =", DEALER["score"]);
        showScore(DEALER);
        await sleep(1000);
    }
    //FOLLOWING CODES are MAKING 'function dealerLogic()' working AS BOT
    //if (DEALER["score"] > 16) {
        blackJackGame["turnIsOver"] = true; //--> SET if YOU and DEALER has DONE THEIR TURN
        let winner = computeWinner();
        console.log("cek nyampe computewinner() di dealerlogic() gak");
        showResult(winner);
    //}
}

function updateScore(card, activePlayer) {
    if (card === "A") {
        //for 'ACE CASE'; IF ADDING 11 KEEP user BELOW 21 then ADD 11, OTHERWISE ADD 1
        if (activePlayer["score"] + blackJackGame["cardsMap"][card][1] <= 21) {
            activePlayer["score"] += blackJackGame["cardsMap"][card][1];
        } else {
            activePlayer["score"] += blackJackGame["cardsMap"][card][0];
        }
    } else {
        activePlayer["score"] += blackJackGame["cardsMap"][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer["score"] > 21) {
        document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST!";
        document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
    } else {
        document.querySelector(activePlayer["scoreSpan"]).textContent = activePlayer["score"];
    }
}

//COMPUTING for WINNER and DETERMINING the WINNER, and THEN UPDATE who WINS, LOSSES, and DRAWS
function computeWinner() {
    let winner;

    if (YOU["score"] <= 21) {
        if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
            console.log("You WON!");
            winner = YOU;
            blackJackGame["wins"]++; //INCREASE 'wins' SCORE in SCORE TABLE by 1
        }
        else if (YOU["score"] < DEALER["score"]) {
            console.log("You LOST!");
            winner = DEALER;
            blackJackGame["losses"]++; //INCREASE 'losses' SCORE in SCORE TABLE by 1
        }
        else if (YOU["score"] === DEALER["score"]) {
            console.log("You DREW!");
            blackJackGame["draws"]++; //INCREASE 'draws' SCORE in SCORE TABLE by 1
        }
    }
    else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
        console.log("You LOST!");
        winner = DEALER;
        blackJackGame["losses"]++;
    }
    else if (YOU["score"] > 21 && DEALER["score"] > 21) {
        console.log("You DREW!");
        blackJackGame["draws"]++;
    }

    console.log("Winner is", winner);
    console.log(blackJackGame);
    return winner;
}

function showResult(winner) {
    console.log("cek nyampe showresult, turnisover =", blackJackGame["turnIsOver"]);
    console.log("cel isStand =", blackJackGame["isStand"]);
    let message, messageColor;

    if (blackJackGame["turnIsOver"] === true) {
        if (winner === YOU) {
            message = "You MENANG!";
            messageColor = "green";
            winSound.play();
            document.querySelector("#wins").textContent = blackJackGame["wins"];
        }
        else if (winner === DEALER) {
            message = "You KALAH!";
            messageColor = "red";
            lossSound.play();
            document.querySelector("#losses").textContent = blackJackGame["losses"];
        } else {
            message = "Game SERI!";
            messageColor = "black";
            document.querySelector("#draw").textContent = blackJackGame["draws"];
        }
    
        document.querySelector("#blackjack-result").textContent = message;
        document.querySelector("#blackjack-result").style.color = messageColor;
    }
}

/**
 * CHALLENGE 6 : AJAX & API's with Javascript
 */
const url = "https://randomuser.me/api?results=10" //GET 10 RANDOM users
fetch(url) //GET URL from 'const url'
.then(resp => resp.json()) //TURN DATA from 'fetch(url)' INTO JSON data
.then(data => { //CHOOSE ELEMENT to DISPLAY from JSON DATA
    let authors = data.results;
    console.log(authors);

    for (let i = 0; i < authors.length; i++) {
        let div = document.createElement("div");
        let image = document.createElement("img");
        let p = document.createElement("p");

        p.appendChild(document.createTextNode(`${title(authors[i].name.title)} ${title(authors[i].name.first)}+${authors[i].name.last}`));
        image.src = authors[i].picture.large;
        div.appendChild(image);
        div.appendChild(p);
        document.querySelector(".container-6 .flex-ajax-row-1").appendChild(div);
    }
});

let title = str => str[0].toUpperCase() + str.slice(1);

function mustafa() {
    return "5";
}
mustafa();

function resp() {
    return resp.json();
}

var mustafa = number => 5 + number;