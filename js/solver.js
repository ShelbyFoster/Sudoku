/**
 * Solves a puzzle that has been generated, removing the empty spaces (0)'s
 * and filling them with the correct number.
 */

function solver(){
    var zeroCounter = 0;


    for(var loop = 0; loop < puzzleArray.length; loop++){     //determines how many 0's are in the puzzle
        if(puzzleArray[loop] === 0){
            zeroCounter++;
        }
    }
    for(var i = 0; i <= zeroCounter; i++){        //while the puzzle still contains 0's
        for(var y = 0; y < 81; y++){
            if(puzzleArray[y] === 0){
                var value = checkOneChoice(y);     //check if only one position available, if so store the value in s

                if(value > 0){
                    zeroCounter = zeroCounter - 1;  //if number is changed, subtract 1 from z (number of 0's in puzzle)
                    $(currInput).val(value);
                    puzzleArray[$(currInput).attr("id")] = value;
                }
            }
        }

    }
    checkPuzzle();
}
