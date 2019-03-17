$(document).ready(function() {
    var mainCharacter;//character chosen by the player
    var villain;//target chosen by the player
    var characterArray = []//characters in the game
    var characterSelected = false;
    var villainSelected = false;
    var firstattack = 0;//beggining stat that will grow as game progresses
    
    //push character objects to array//
    function pushCharacters() {
        characterArray.push(pikachu, squirtle, bulbasaur, charmander);
    };
    var pikachu = {
        name: "pikachu",
        hp:"100",
        attack: "5",
        counter: "10",
        image: "./assets/images/pikachu.png",
    };
    var squirtle = {
        name: "squirtle",
        hp:"110",
        attack: "6",
        counter: "15",
        image: "./assets/images/squirtle.png",

    };
    var bulbasaur = {
        name: "bulbasaur",
        hp:"120",
        attack: "4",
        counter: "20",
        image: "./assets/images/bulbasaur.png",
    };
    var charmander = {
        name: "charmander",
        hp:"130",
        attack: "12",
        counter: "12",
        image: "assets/images/charmander.png",
    };
    // var jigglypuff = {
    //     name: "jigglypuff",
    //     hp:"140",
    //     attack: "3",
    //     counter: "30",
    //     image: "assets/images/jigglypuff.png",
    // };
    function showCharacters() {
        for (var c = 0; c < characterArray.length; c++) {
            $("#character-selection").append(characterArray[i].image,"<br>", characterArray[i].name, "<br>", characterArray[i].hp);
            (characterArray[i]).attr("id", characterArray[i].name);
        };
        
        function setfirstattack(obj) {
            firstattack = obj.attack;
        };
        
        if (!playerselected) {//if the player has not selected a character, show all of the characters
            $("#prompt").text("Choose your character!");
            for (var i = 0; i < characterArray.length; i++) {
                $("#character-selection").append(i.image);
            }   
        } else if (!villainSelected) {//if the player has not yet selected an opponent
            $("#prompt").text("Choose your opponent!");
        } else { //begin the battle
        };
        
        $(document).click("img", function() {
            if (playerselected && !villainSelected && (this.id != mainCharacter.name)) {
                for (var j = 0; j < characterArray.length; j++) {
                    if (characterArray[j].name == (this).id) {
                        villain = characterArray[j];
                        characterArray.splice(j, 1);
                        villainSelected = true;
                        $("#prompt").text("Click the 'ATTACK' button to damage your opponent.");
                    };
                };
                ("#villain").append(this);
                ("#villainName").append(villain.name);
                ("#villainHP").append("HP: " + villain.hp);
            };
        };
        
        function stillAlive(obj) {
            if (obj.hp > 0) {
                return true;
            } 
            return false;
        }
        function youWin() {
            if (characterArray.length === 0 && mainCharacter.hp > 0){
                return  true;
            }
            return false;
        };
        function newGame() {};//starts new game
    }