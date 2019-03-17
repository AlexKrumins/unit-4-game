pushCharacters();
    //push character objects to array//
    function pushCharacters() {
        characterArray.push(allCharacters.pikachu, allCharacters.squirtle, allCharacters.bulbasaur, allCharacters.charmander);
    };
    //character objects
    var allCharacters{
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
    };