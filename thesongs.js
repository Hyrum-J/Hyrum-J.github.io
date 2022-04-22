function sound(srcFile) {
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.play = function () {
        this.sound.play();
    };
    this.stop = function () {
        this.sound.pause();
    };
};
var one = 0
var two = 0
var three = 0
var four = 0
var five = 0
function playMusic() {
    document.getElementById("buttonOne").disabled = true;
    document.getElementById("buttonTwo").disabled = true;
    document.getElementById("buttonThree").disabled = true;
    document.getElementById("buttonFour").disabled = true;
    document.getElementById("buttonFive").disabled = true;
    console.log("Commence Jamming");
    mySound = new sound("Morgan Wallen – This Side of a Dust Cloud (Official Lyric Video).mp3");
    mySound.play();
    one = one + 1;
    setTimeout(function () {
        mySound.stop();
        if (two == 0) {
            document.getElementById("buttonTwo").disabled = false;
        };
        if (three == 0) {
            document.getElementById("buttonThree").disabled = false;
        };
        if (four == 0) {
            document.getElementById("buttonFour").disabled = false;
        };
        if (five == 0) {
            document.getElementById("buttonFive").disabled = false;
        };
        console.log(one);
    }, 25000);

};

function playMusicOne() {
    document.getElementById("buttonTwo").disabled = true;
    document.getElementById("buttonOne").disabled = true;
    document.getElementById("buttonThree").disabled = true;
    document.getElementById("buttonFour").disabled = true;
    document.getElementById("buttonFive").disabled = true;
    console.log("Commence Jamming");
    mySound = new sound("Eminem - Lose Yourself (Official Video) (Explicit).mp3");
    mySound.play();
    two = two + 1;
    setTimeout(function () {
        mySound.stop();
        if (one == 0) {
            document.getElementById("buttonOne").disabled = false;
        };
        if (three == 0) {
            document.getElementById("buttonThree").disabled = false;
        };
        if (four == 0) {
            document.getElementById("buttonFour").disabled = false;
        };
        if (five == 0) {
            document.getElementById("buttonFive").disabled = false;
        };
        console.log(one);
    }, 25000);
};

function playMusicTwo() {
    document.getElementById("buttonThree").disabled = true;
    document.getElementById("buttonOne").disabled = true;
    document.getElementById("buttonTwo").disabled = true;
    document.getElementById("buttonFour").disabled = true;
    document.getElementById("buttonFive").disabled = true;
    console.log("Commence Jamming");
    mySound = new sound("Maroon 5 Ft. Wiz Khalifa - Payphone (Lyrics).mp3");
    mySound.play();
    three = three + 1;
    setTimeout(function () {
        mySound.stop();
        if (one == 0) {
            document.getElementById("buttonOne").disabled = false;
        };
        if (two == 0) {
            document.getElementById("buttonTwo").disabled = false;
        };
        if (four == 0) {
            document.getElementById("buttonFour").disabled = false;
        };
        if (five == 0) {
            document.getElementById("buttonFive").disabled = false;
        };
    }, 25000);
};

function playMusicThree() {
    document.getElementById("buttonFour").disabled = true;
    document.getElementById("buttonOne").disabled = true;
    document.getElementById("buttonTwo").disabled = true;
    document.getElementById("buttonThree").disabled = true;
    document.getElementById("buttonFive").disabled = true;
    console.log("Commence Jamming");
    mySound = new sound("Billy Joel - Piano Man (Audio).mp3");
    mySound.play();
    four = four + 1;
    setTimeout(function () {
        mySound.stop();
        if (one == 0) {
            document.getElementById("buttonOne").disabled = false;
        };
        if (two == 0) {
            document.getElementById("buttonTwo").disabled = false;
        };
        if (three == 0) {
            document.getElementById("buttonThree").disabled = false;
        };
        if (five == 0) {
            document.getElementById("buttonFive").disabled = false;
        };
    }, 25000);
};

function playMusicFour() {
    document.getElementById("buttonFive").disabled = true;
    document.getElementById("buttonOne").disabled = true;
    document.getElementById("buttonTwo").disabled = true;
    document.getElementById("buttonThree").disabled = true;
    document.getElementById("buttonFour").disabled = true;
    console.log("Commence Jamming");
    mySound = new sound("Em Beihold - Numb Little Bug (Official Lyric Video).mp3");
    mySound.play();
    five = five + 1;
    setTimeout(function () {
        mySound.stop();
        if (one == 0) {
            document.getElementById("buttonOne").disabled = false;
        };
        if (two == 0) {
            document.getElementById("buttonTwo").disabled = false;
        };
        if (three == 0) {
            document.getElementById("buttonThree").disabled = false;
        };
        if (four == 0) {
            document.getElementById("buttonFour").disabled = false;
        };
    }, 25000);
};

function checkscore() {
    document.getElementById("submit").disabled = true;

    var songOne = document.getElementById("songOne").value;
    var songTwo = document.getElementById("songTwo").value;
    var songThree = document.getElementById("songThree").value;
    var songFour = document.getElementById("songFour").value;
    var songFive = document.getElementById("songFive").value;

    var score = 0;

    if (songOne == "This Side of a Dust Cloud") {
        console.log("Right");
        score = score + 1;
    };
    if (songTwo == "Lose Yourself") {
        console.log("Right");
        score = score + 1;
    };
    if (songThree == "Payphone") {
        console.log("Right");
        score = score + 1;
    };
    if (songFour == "Piano Man") {
        console.log("Right");
        score = score + 1;
    };
    if (songFive == "Numb Little Bug") {
        console.log("Right");
        score = score + 1;
    };

    document.getElementById("score").innerHTML = "Score: " + score + "/5";

    if (score == 5) {
        location.replace("./secretEE.html");
    };

};