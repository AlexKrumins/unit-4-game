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
        attack: 10,
        counter: 10,
        image: "<img src='./assets/images/pikachu.png'/>",
    };
    var squirtle = {
        name: "squirtle",
        hp:110,
        attack: 9,
        counter: 15,
        image: "<img src='./assets/images/squirtle.png'/>",
        
    };
    var bulbasaur = {
        name: "bulbasaur",
        hp:120,
        attack: 6,
        counter: 20,
        image: "<img src='./assets/images/bulbasaur.png'/>",
    };
    var charmander = {
        name: "charmander",
        hp:130,
        attack: 12,
        counter: 12,
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
            // $("#character-selection" + " div:last-child").append(characterArray[k].name + "<br>");
        };
    };

        $(".character").click( function() {
            //if player has selected a character, this will pick the opponent from the character array
            if (characterSelected && !villainSelected && (this.id != mainCharacter.name)) {
                $("#battle-readout").text("");
                $("#villainHP").text("");
                $("#main-characterHP").text("HP: " + mainCharacter.hp);
                for (var j = 0; j < characterArray.length; j++) {
                    if (characterArray[j].name == (this).id) {
                        villain = characterArray[j];
                        characterArray.splice(j, 1);
                        villainSelected = true;
                        $("#prompt").text("Click the 'ATTACK' button to damage your opponent.");
                        $("#villain").append("<br>", this);
                        $("#your-enemy").text('Your Enemy')
                        $("#villainHP").append("HP: " + villain.hp);
                        $("#attack-btn").fadeTo(1,1);
                        // $("#character-selection").detach();
                    };
                };
            }
            //if the player has not selected a character, this action picks it
            if (!characterSelected) {
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

                    };
                };
            
            };
        });
             
    // function setfirstattack() {
    //     firstattack = mainCharacter.attack;
    // };
    
    //increases attack power
    function increaseAttack() {
        firstattack += mainCharacter.attack;
    };
    
    //main character attacks
    function charvsvillaindmg() {
        villain.hp -= firstattack;
        $("#battle-readout").text("You hit " + villain.name + " for " + firstattack + 
        " damage. It's SUPER EFFECTIVE!");
        $("#villainHP").text("HP: " + villain.hp);
    };
    
    //enemy counter attacks
    function villainvschardmg() {
        mainCharacter.hp -= villain.counter;
        $("#battle-readout").append("<br><br>" + villain.name.charAt(0).toUpperCase() + villain.name.slice(1) + " attacked you for " + villain.counter + " damage.");
        $("#main-characterHP").text("HP: " + mainCharacter.hp);
    };
    
    function youWin() {
        if (characterArray.length == 0 && mainCharacter.hp > 0 && villain.hp < 0){
            return  true;
        }
        return false;
    };

    $("#attack-btn").on("click", function () {
        console.log("BRICK WALL");
        if ((mainCharacter.hp >0) && (villain.hp > 0)) {
            console.log("Nothing returns");
            increaseAttack();
            charvsvillaindmg();
            if (villain.hp <0) {
                $("#battle-readout").append("<br><br>" + villain.name.charAt(0).toUpperCase() + villain.name.slice(1) + " has fainted!");
                if (characterArray.length > 0) {
                    $("#battle-readout").append("<br><br> Continue to the next round?");
                    $("#villainHP").text("FAINTED!");
                } else {
                    $("#battle-readout").append("<br><br> Congratulations on your hard-fought victory!");
                    $("#your-enemy").text("You have defeated");
                    $("#villainHP").text("EVERYONE!");
                }
                $("#main-characterHP").text("SUCCESS!");
                $("#villain").children().remove();
                $("#prompt").text("Pick another enemy to battle...");
                villainSelected = false;
                if (youWin()) {
                    alert("Congratulations! You are a true pokemon master. All our base are belong to you");
                    $("#prompt").text("Try again to make sure it wasn't blind luck.");
                    $("#attack-btn").text("Restart Game");
                    $("#attack-btn").on("click", function () { // restarts game
                        location.reload();
                    });
                };
            } else {
            villainvschardmg();
            };
            if (mainCharacter.hp < 0) {
                $("#main-characterHP").text("FAINTED!");
                $("#prompt").text("Please, try again...You can still be the very best.")
                $("#battle-readout").append("<br><br>Despite their best efforts, " + mainCharacter.name + " has taken too much damage...<br>try again?");
                $("#attack-btn").text("Restart Game");
                $("#attack-btn").on("click", function () { // restarts game
                    location.reload();
                });
            };
        
        };
        console.log("Bookend");
    });
    
});