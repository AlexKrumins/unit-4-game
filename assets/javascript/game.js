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
                        $("#your-enemy").text('Your Enemy')
                        $("#villainHP").append("HP: " + villain.hp);
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
                        $("#your-combatant").append("Your Combatant");
                        $("#main-characterHP").append('HP: ' + mainCharacter.hp)
                        $("#main-character").append("<br>", this);
                        $("#arena").fadeTo(1,1);
                        setfirstattack();

                    };
                };
            
            };
        });
             
    function setfirstattack() {
        firstattack = mainCharacter.attack;
    };
    
    //increases attack power
    function increaseAttack() {
        this.attack += firstattack;
    };

    //main character attacks
    function charvsvillaindmg() {
        villain.hp -= this.attack;
        $("#battle-readout").html("You hit " + villain.name + " for " + mainCharacter.attack + 
        " damage. It's SUPER EFFECTIVE");
        mainCharacter.increaseAttack();
    };

    //enemy counter attacks
    function villainvschardmg() {
        mainCharacter.hp -= this.counter;
        $("#battle-readount").append("<br>" + villain.name + " attacked you for " + villain.counter + " damage.");
    }
    
    function stillAlive() {
        if (this.hp > 0) {
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
            increaseAttack(mainCharacter);
            charvsvillaindmg(mainCharacter);
            villainvschardmg(villain);
            $("#main-characterHP").text("HP: " + player.healthPoints);
            $("#villainHP").text("HP: " + villain.healthPoints);
            if (!stillAlive(villain)) {
                $("#villainHP").text("FAINTED!");
                $("#main-characterHP").text("SUCCESS!");
                $("#prompt").text("Pick another enemy to battle...");
            }
            if (!stillAlive(mainCharacter)) {
                $("#main-characterHP").text("Your Pokemon Has fainted. Game Over.");
                $("#prompt").text("Try again...");
                $("#attack").text("Restart Game");
                $("#attack").on("click", function () { // restarts game
                    document.reload();
                });
            }
        }
        if (!stillAlive(villain)) {
            $("#villain").children().remove();
            $("#villain").text("");
            $("#villainHP").text("");
            villainSelected = false;
            if (youWin()) {
                alert("Congratulations! You are a true pokemon master. All our base are belong to you");            }
        }
    });
    
})