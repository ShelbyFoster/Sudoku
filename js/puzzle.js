var puzzleArray =  [2,8,9, 7,1,4, 6,3,5,   //solved puzzle
                    6,3,4, 5,8,9, 1,2,7,
                    7,1,5, 6,3,2, 9,4,8,

                    3,9,7, 8,2,1, 5,6,4,
                    5,4,8, 9,6,3, 7,1,2,
                    1,6,2, 4,7,5, 8,9,3,

                    8,2,3, 1,5,6, 4,7,9,
                    4,7,1, 3,9,8, 2,5,6,
                    9,5,6, 2,4,7, 3,8,1];

var solvedArray = [];


function printPuzzle() {
    $(".grid").empty();
    var flip = [0,1,2,3,4,5,6,7,8,9];
    var randomNum = Math.floor(Math.random()*10)

    //flips the puzzle to generate a new 'random' puzzle.
    switch (flip[randomNum]) {
        case 0:
            flipPuzzleHorizontalVertical();
            break;
        case 1:
            flipPuzzleHorizontal();
            break;
        case 2:
            flipPuzzleVertical();
            break;
        case 3:
            flipPuzzleRows1();
            break;
        case 4:
            flipPuzzleRows2();
            break;
        case 5:
            flipPuzzleRows3();
            break;
        case 6:
            flipPuzzleRows4();
            break;
        case 7:
            flipPuzzleColumn1();
            break;
        case 8:
            flipPuzzleColumn2();
            break;
        case 9:
            flipPuzzleColumn3();
            break;
    }



    var counter = 0;    //counter for start of squares
    var inputCounter = 0;    //id counter for inputs
    for(var j = 1; j < 10; j++){   //create 9 divs for each square of the puzzle
        var container = document.createElement('div');
        container.id = "container" + j;
        container.className = 'container';
        $('.grid').append(container);  //append containers to the grid


        for(var i = 0; i < 3; i++){   //iterates through rows
            for(var x = 0; x < 3; x++){   //iterates through columns
                var input = document.createElement('input');
                input.id = inputCounter;
                input.className = 'cell';
                input.maxLength = 1;
                var start = [0,3,6,27,30,33,54,57,60];   //start position of each square in puzzle
                var startPosition = parseInt(start[counter]);   //determines the starting position of the square

                if(puzzleArray[startPosition+x+9*i] === 0){  //checks if puzzle position is empty
                    input.value = "";   //sets input to empty
                }
                else {
                    input.value = puzzleArray[startPosition+x+9*i];   //if puzzle position is not empty, sets input to correct value
                    input.setAttribute("disabled", true);   //makes the input un-editable
                }

                var con = "#container" + j;
                $(con).append(input); //appends input
                inputCounter++;
            }
            inputCounter = inputCounter + 6;
        }

        //setting id's
        if(inputCounter === 27 || inputCounter === 30 || inputCounter === 54){
            inputCounter = inputCounter - 24;
        }
        if(inputCounter === 33 || inputCounter === 60){
            inputCounter = inputCounter - 6;
        }
        if(inputCounter === 57 || inputCounter ===  81 || inputCounter === 84){

            inputCounter = inputCounter - 24;

        }

        counter++;
    }
    generateEasyPuzzle();
}


$(document).ready(function() {
    printPuzzle();
    console.log(solvedArray);

    $('input').keyup(function(){
        var val = $(this).val();
        if(val == ""){
            val = 0;
            console.log(val);
        }
        else{
            console.log(val);
        }

        var index = $(this).attr("id");
        puzzleArray[index] = val;

        var t = $(this);
        //$(this).classList.remove("red");
        t.addClass("white");
        t.removeClass("red");
        //$(this).css("background-color", "white");
//        console.log(puzzleArray[index]);
//        console.log(solvedArray[index]);
//        if((puzzleArray[index] == solvedArray[index]) || val == ""){
//           console.log("correct");
//            $(this).css("background-color", "white");
//        }
//        else{
//            console.log("should be red...");
//            $(this).css("background-color", "red");
//        }
//        console.log("val",val);

        checkPuzzle();
    })
    $('.puzzleCompleted').click(function(){
        $('.puzzleCompleted').removeClass('active');
        $('.completedImage').removeClass('active');
        $('.solve').show();
        $('.generate').show();
        printPuzzle();
    })


});