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
var i = 0;
function playMusic() {
    i = i + 1;
    if (i == 1) {
        document.getElementById("buttonTwo").disabled = true;
        document.getElementById("buttonThree").disabled = true;
        document.getElementById("buttonFour").disabled = true;
        document.getElementById("buttonFive").disabled = true;
        console.log("Commence Jamming");
        mySound = new sound("Morgan Wallen – This Side of a Dust Cloud (Official Lyric Video).mp3");
        mySound.play();
        console.log(i);
    } else if (i > 1) {
        mySound.stop();
        document.getElementById("buttonTwo").disabled = false;
        document.getElementById("buttonThree").disabled = false;
        document.getElementById("buttonFour").disabled = false;
        document.getElementById("buttonFive").disabled = false;
        i = 0;
    };

};

function playMusicOne() {
    i = i + 1;
    if (i == 1) {
        document.getElementById("buttonOne").disabled = true;
        document.getElementById("buttonThree").disabled = true;
        document.getElementById("buttonFour").disabled = true;
        document.getElementById("buttonFive").disabled = true;
        console.log("Commence Jamming");
        mySound = new sound("Eminem - Lose Yourself (Official Video) (Explicit).mp3");
        mySound.play();
        console.log(i);
    } else if (i > 1) {
        mySound.stop();
        document.getElementById("buttonOne").disabled = false;
        document.getElementById("buttonThree").disabled = false;
        document.getElementById("buttonFour").disabled = false;
        document.getElementById("buttonFive").disabled = false;
        i = 0;
    };

};

function playMusicTwo() {
    i = i + 1;
    if (i == 1) {
        document.getElementById("buttonOne").disabled = true;
        document.getElementById("buttonTwo").disabled = true;
        document.getElementById("buttonFour").disabled = true;
        document.getElementById("buttonFive").disabled = true;
        console.log("Commence Jamming");
        mySound = new sound("Maroon 5 Ft. Wiz Khalifa - Payphone (Lyrics).mp3");
        mySound.play();
        console.log(i);
    } else if (i > 1) {
        mySound.stop();
        document.getElementById("buttonOne").disabled = false;
        document.getElementById("buttonTwo").disabled = false;
        document.getElementById("buttonFour").disabled = false;
        document.getElementById("buttonFive").disabled = false;
        i = 0;
    };

};

function playMusicThree() {
    i = i + 1;
    if (i == 1) {
        document.getElementById("buttonOne").disabled = true;
        document.getElementById("buttonTwo").disabled = true;
        document.getElementById("buttonThree").disabled = true;
        document.getElementById("buttonFive").disabled = true;
        console.log("Commence Jamming");
        mySound = new sound("Billy Joel - Piano Man (Audio).mp3");
        mySound.play();
        console.log(i);
    } else if (i > 1) {
        mySound.stop();
        document.getElementById("buttonOne").disabled = false;
        document.getElementById("buttonTwo").disabled = false;
        document.getElementById("buttonThree").disabled = false;
        document.getElementById("buttonFive").disabled = false;
        i = 0;
    };

};

function playMusicFour() {
    i = i + 1;
    if (i == 1) {
        document.getElementById("buttonOne").disabled = true;
        document.getElementById("buttonTwo").disabled = true;
        document.getElementById("buttonThree").disabled = true;
        document.getElementById("buttonFour").disabled = true;
        console.log("Commence Jamming");
        mySound = new sound("Em Beihold - Numb Little Bug (Official Lyric Video).mp3");
        mySound.play();
        console.log(i);
    } else if (i > 1) {
        mySound.stop();
        document.getElementById("buttonOne").disabled = false;
        document.getElementById("buttonTwo").disabled = false;
        document.getElementById("buttonThree").disabled = false;
        document.getElementById("buttonFour").disabled = false;
        i = 0;
    };

};
