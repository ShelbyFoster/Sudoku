/**
 * Generates a puzzle by removing random positions within the array that only
 * have one number for each empty cell, this is checked by using checkOneChoice().
 */
function generateEasyPuzzle(){
    solvedArray = puzzleArray.slice(0);

    var getRandNumVal = 500;

    for(var i = 0; i < getRandNumVal; i++){         //iterates through * times
        var randomNum = Math.floor(Math.random()*81)
        var value = puzzleArray[randomNum];
        puzzleArray[randomNum] = 0;
        var check = checkOneChoice(randomNum);
        if(check > 0){     //checks that checkOneChoice only has 1 number it can be at the position of the random number
            puzzleArray[randomNum] = 0;     //sets position to 0
            $(currInput).val("");
            $(currInput).removeAttr('disabled');
        }
        else{

            puzzleArray[randomNum] = value;
        }
    }
}
