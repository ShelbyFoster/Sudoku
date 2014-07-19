/**checkRow()
 * Checks for the numbers 1-9 within a row starting at position "x" in the
 * array, cannot contain duplicates or empty spaces (o).
 *
 * @param rowNum the row you would like to check (0-8)
 * @return True if the row contains no duplicates or empty spaces, otherwise False */

function checkRow(rowNum) {
    var items = [false,false,false,false,false,false,false,false,false,false];
    for(var i = 0; i < 9; i++){            //iterates through 9 positions in the array (each row)
        if(puzzleArray[9*rowNum+i] == 0){           //checks if cell position is 0
            return false;
        }
        var value = puzzleArray[9*rowNum+i];         //stores value at given position

        if(items[value]){                 //checks if the value is already true in items
            return false;
        }
        items [value] = true;             //sets position of the value in items to true
    }
    return true;

}


/** Checks through each of the 9 rows to see if the method checkRow() is true or false
 *
 * @return True if the method checkRow returns true for each of the 9 rows, otherwise False */

function checkRows(){
    for(var i = 0; i < 9; i++){     //iterates through 9 rows
        if(!checkRow(i)){           //checks if method returns false(contains duplicates or empty spaces)
            return false;
        }
    }
    return true;
}


/** Checks for the numbers 1-9 within a column starting at position "x" in the
 * array, cannot contain duplicates or empty spaces (o).
 *
 * @param colNum the column you would like to check (0-8).
 * @return True if the column contains no duplicates or empty spaces, otherwise False */
function checkColumn(colNum){
    var items = [false, false, false, false,false,false, false, false, false, false];


    for(var i = 0; i < 9; i++){     //iterates through 9 positions in the array (each column)
        if(puzzleArray[colNum+9*i] == 0){     //checks if cell position is 0
            return false;
        }

        var value = puzzleArray[colNum+9*i];      //stores value at given position

        if(items[value]){           //checks if the value is already true in items
            return false;
        }
        items [value] = true;       //sets position of the value in items to true
    }
    return true;
}


/** Checks through each column to see if checkColumn() is true.
 *
 * @return True if the method checkColumn returns true for each of the 9 columns, otherwise False */
function checkColumns(){
    for(var i = 0; i < 9; i++){     //iterates through 9 columns
        if(!checkColumn(i)){        //checks if method returns false(contains duplicates or empty spaces)
            return false;
        }
    }
    return true;
}



/** Checks for the numbers 1-9 within a square starting at position "s" in the
 * array, cannot contain duplicates or empty spaces (o).
 *
 * @param sqrNum position in puzzle of which square you would like to check - 0,3,6,27,30,33,54,57,60
 * @return True if the square contains no duplicates or empty spaces, otherwise False */
function checkSquare(sqrNum){
    var items = [false, false, false, false,false,false, false, false, false, false];


    for(var i = 0; i < 3; i++){     //iterates down 3 rows

        for(var x = 0; x < 3; x++){     //iterates through 3 positions in the row
            if(puzzleArray[sqrNum+x+9*i] == 0){       //checks if cell position is 0
                return false;
            }

            var value = puzzleArray[sqrNum+x+9*i];    //stores value at given position

            if(items[value]){        //checks if the value is already true in items
                return false;
            }
            items [value] = true;   //sets position of the value in items to true
        }

    }
    return true;
}


/** Checks through each square to see if checkSquare() is true.
 *
 * @return True if the method checkSquare returns true for each of the 9 squares, otherwise False */
function checkSquares(){
    var counter = 0;
    var start = [0,3,6,27,30,33,54,57,60];   //start position of each square in puzzle

    for(var i = 0; i < 9; i++){   //loop through each square
        var startPosition = parseInt(start[counter]);
        if(!checkSquare(startPosition)){  //checks each square from its starting position
            return false;
        }
        counter++;
    }
    return true;
}


/**Checks to see if the puzzle has been completed successfully with no duplicates or empty spaces
 * @return True if the puzzle contains no empty spaces or duplicates, otherwise False */
function checkPuzzle(){
    if(!checkColumns() || !checkRows() || !checkSquares()){     //checks if any of these methods are false
        console.log("This puzzle is invalid");
        return false;
    }

    $('.puzzleCompleted').addClass('active');
    $('.completedImage').addClass('active');
    $('.solve').hide();
    $('.generate').hide();
    console.log("Puzzle Completed Successfully");
    return true;
}