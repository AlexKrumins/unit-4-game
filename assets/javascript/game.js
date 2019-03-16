$(document).ready(function() {
    var mainCharacter;
    var villain;
    var characterArray = []
    var characterSelected = false;
    var villainSelected = false;
    var firstattack = 0;
    
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
        attack: "4",
        counter: "25",
        image: "assets/images/charmander.png",
    };
    
    // var jigglypuff = {
    //     name: "jigglypuff",
    //     hp:"140",
    //     attack: "3",
    //     counter: "30",
    //     image: "assets/images/jigglypuff.png",
    // };
    if (!playerselected) {
        for (var i = 0; i < characterArray.length; i++) {
            
        };
            
        });
    }
    function stillAlive(obj) {
        if (obj.hp > 0) {
            return true;
        } 
            return false;
    };

    function youWin() {
        if (characterArray.length === 0 && mainCharacter.hp > 0){
            return  true;
        }
            return false;
    };
}