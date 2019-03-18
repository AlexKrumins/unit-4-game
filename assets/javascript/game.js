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
    //character objects
    var pikachu = {
        name: "pikachu",
        hp:100,
        attack: 5,
        counter: 10,
        image: "<img src='./assets/images/pikachu.png'/>",
    };
    var squirtle = {
        name: "squirtle",
        hp:"110",
        attack: "6",
        counter: "15",
        image: "<img src='./assets/images/squirtle.png'/>",
        
    };
    var bulbasaur = {
        name: "bulbasaur",
        hp:"120",
        attack: "4",
        counter: "20",
        image: "<img src='./assets/images/bulbasaur.png'/>",
    };
    var charmander = {
        name: "charmander",
        hp:"130",
        attack: "12",
        counter: "12",
        image: "<img src='assets/images/charmander.png'/>",
    };
    // var jigglypuff = {
        //     name: "jigglypuff",
        //     hp:"140",
        //     attack: "3",
        //     counter: "30",
        //     image: "assets/images/jigglypuff.png",
        // };
        
    pushCharacters();
    newGame();

    function newGame() {
        $("#prompt").text("Choose your starter!");
        $("#character-selection").children().remove();
        for (var k = 0; k < characterArray.length; k++) {
            $("#character-selection").append("<div>");
            $("#character-selection" + " div:last-child").append(characterArray[k].image).attr("id", characterArray[k].name);
            $("#character-selection" + " div:last-child").attr("class", 'character');
            $("#character-selection" + " idv:last-child").append();
            villain// $("#character-selection" + " div:last-child").append(characterArray[k].name + "<br>");
        };
    };

        $(".character").click( function() {
            if (characterSelected && !villainSelected && (this.id != mainCharacter.name)) {
                for (var j = 0; j < characterArray.length; j++) {
                    if (characterArray[j].name == (this).id) {
                        villain = characterArray[j];
                        characterArray.splice(j, 1);
                        villainSelected = true;
                        $("#prompt").text("Click the 'ATTACK' button to damage your opponent.");
                        $("#villain").append("<br>", this);
                        $("#villainHP").html('<h3>Your Enemy</h3>').append("HP: " + villain.hp);
                        $("#attack").fadeTo(1,1);
                        // $("#character-selection").detach();
                    };
                };
            }
            if (!characterSelected) {//if the player has not selected a character, show all of the characters
                for (var i = 0; i < characterArray.length; i++) {
                    if (characterArray[i].name == (this).id) {
                        mainCharacter = characterArray[i];
                        characterArray.splice(i,1);
                        characterSelected = true;
                        $("#prompt").text("Choose your opponent!");
                        $("#main-character").html('<h3>Your Combatant</h3><h3>HP: ' + mainCharacter.hp).append("<br>", this);
                        $("#arena").fadeTo(1,1);

                    };
                };
            
            };
            console.log(characterArray);
        });     
    function setfirstattack(obj) {
        firstattack = obj.attack;
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

    $("#attack").on("click", function () {
        if (stillAlive(mainCharacter) && stillAlive(villain)) {
            player.attack();
            villain.counterAttack(player);
            $("#pl ayerHealthDiv").html("HP: " + player.healthPoints);
            $("#villainHealthDiv").html("HP: " + villain.healthPoints);
            if (!isAlive(villain)) {
                $("#villainHealthDiv").html("DEFETED!");
                $("#playerHealthDiv").html("Enemy defeated!");
                $("#msg").html("Pick another enemy to battle...");
            }
            if (!isAlive(player)) {
                $("#playerHealthDiv").html("YOU LOST!");
                $("#msg").html("Try again...");
                $("#attackBtn").html("Restart Game");
                $(document).on("click", "#attackBtn", function () { // restarts game
                    location.reload();
                });
            }
        }
        if (!isAlive(villain)) {
            $("#defenderDiv").removeClass("animated zoomInRight");
            $("#defenderHealthDiv").removeClass("animated zoomInRight");
            $("#defenderDiv").children().remove();
            $("#defenderDiv").html("");
            $("#defenderHealthDiv").html("");
            defenderSelected = false;
            if (isWinner()) {
                $("#secondScreen").hide();
                $("#globalMsg").show();
            }
        }
    });
    
})