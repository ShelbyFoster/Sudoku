var puzzleArray = [0,8,9, 7,1,4, 6,3,5,   //solved puzzle
    6,3,4, 5,8,9, 1,2,7,
    7,1,5, 6,3,2, 9,4,8,

    3,9,7, 8,2,1, 5,6,4,
    5,4,8, 9,6,3, 7,1,2,
    1,6,2, 4,7,5, 8,9,3,

    8,2,3, 1,5,6, 4,7,9,
    4,7,1, 3,9,8, 2,5,6,
    9,5,6, 2,4,7, 3,8,1];


var puzzlerray = [0,8,9, 7,1,4, 6,3,5,   //solved puzzle
    6,3,4, 5,8,9, 1,2,7,
    7,1,5, 6,3,2, 9,4,8,

    3,9,7, 8,2,1, 5,6,4,
    5,4,8, 9,6,3, 7,1,2,
    1,6,2, 4,7,5, 8,9,3,

    8,2,3, 1,5,6, 4,7,9,
    4,7,1, 3,9,8, 2,5,6,
    9,5,6, 2,4,7, 3,8,1];


function generatePuzzle() {
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
        }
        counter++;
    }
}


$(document).ready(function() {

    generatePuzzle();
    checkPuzzle();

    $('input').keyup(function(){
        var val = $(this).val();
        var index = $(this).attr("id");

        puzzleArray[index] = val;

        checkPuzzle();
        checkOneChoice(0);
    })

});