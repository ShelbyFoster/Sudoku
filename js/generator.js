/**
 * Generates a puzzle by removing random positions within the array that only
 * have one number for each empty cell, this is checked by using checkOneChoice().
 */
function generateEasyPuzzle(){

    var low = 0;
    var high = 80;
    var getRandNumVal = 500;
    //System.out.println("Positions that was changed to 0");

    for(var i = 0; i < getRandNumVal; i++){         //iterates through * times
        var randomNum = Math.floor(Math.random()*81)
        //console.log("randomNumber", randomNum);
        //var R = randomNumb.nextInt(high-low)+low;     //generates random number
        var value = puzzleArray[randomNum];
        //console.log("value of square:", puzzleArray[randomNum]);
        puzzleArray[randomNum] = 0;
        //console.log("set 0 to position:", randomNum);
        //console.log(checkOneChoice(randomNum));

        var check = checkOneChoice(randomNum);
        if(check > 0){     //checks that checkOneChoice only has 1 number it can be at the position of the random number
            puzzleArray[randomNum] = 0;     //sets position to 0
            //console.log("newArrayValue", puzzleArray[randomNum]);
            $(currInput).val("");
            $(currInput).removeAttr('disabled');
        }
        else{

            puzzleArray[randomNum] = value;
        }

        //printPuzzle();
    }
    //printPuzzle();
    console.log("after EasyPuzzle", puzzleArray.length)
    solver();
}
