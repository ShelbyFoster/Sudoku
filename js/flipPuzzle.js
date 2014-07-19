/**
 * Flips the puzzle horizontally and then flips the puzzle vertically.
 */
function flipPuzzleHorizontalVertical(){
    for(var i = 0; i < 41; i++){
        var start = puzzleArray[i];      //determines start
        var end = puzzleArray[80 - i];   //determines end
        puzzleArray[i] = end;      //switches start value to the end value
        puzzleArray[80 - i] = start;     //switches end value with the start
    }
}

/**
 * Flips the puzzle horizontally.
 */
function flipPuzzleHorizontal(){
    for(var r = 0; r < 9; r++){      //goes through 9 rows
        for(var c = 0; c < 4; c++){      //goes through first 4 positions in each row
            var start = puzzleArray[9*r+c];   //determines value at start of the row
            var x = (9*r+8)-c;       //determines position of the end of the row
            var y = 9*r+c;       //determines position of the start
            var end = puzzleArray[x];     //determines value in end position
            puzzleArray[y] = end;         //stores the end value in the start value
            puzzleArray[x] = start;       //stores the start value in the end value
        }
    }
}

/**
 * Flips the puzzle vertically.
 */
function flipPuzzleVertical(){
    for(var r = 0; r < 9; r++){      //goes through 9 columns
        for(var c = 0; c < 4; c++){      //goes through first 4 positions in each column
            var start = puzzleArray[r+9*c];   //determines value at start of the column
            var x = ((72 + r)-(9*c));    //determines position of the end of the column
            var y = r+9*c;       //determines position of the start
            var end = puzzleArray[x];     //determines value in end position
            puzzleArray[y] = end;     //stores the end value in the start value
            puzzleArray[x] = start;       //stores the start value in the end value
        }
    }
}

/**
 * Flips the rows 0-2 with rows 3-5 then flips 3-5 with 6-8.
 */
function flipPuzzleRows1(){
    for(var r = 0; r < 6; r++){      //iterates through 6 rows
        for(var c = 0; c < 9; c++){      //iterates through 9 positions in each row
            var start = puzzleArray[9*r+c];   //determines start value
            var x = (9*r+c)+ 27;     //adds 27 to start position to get the end position
            var y = 9*r+c;       //determines start position
            var end = puzzleArray[x];     //determines end value
            puzzleArray[y] = end;     //stores the end value in the start value
            puzzleArray[x] = start;   //stores the start value in the end value
        }
    }
}

/**
 * Flips the rows 0-2 with rows 3-5.
 */
function flipPuzzleRows2(){
    for(var r = 0; r < 3; r++){      //iterates through 3 rows
        for(var c = 0; c < 9; c++){      //iterates through 9 positions in each row
            var start = puzzleArray[9*r+c];   //determines start value
            var x = (9*r+c)+ 27;     //adds 27 to start position to get the end position
            var y = 9*r+c;   //determines start position
            var end = puzzleArray[x];     //determines end value
            puzzleArray[y] = end;     //stores the end value in the start value
            puzzleArray[x] = start;       //stores the start value in the end value
        }
    }
}

/**
 * Flips the rows 3-5 with rows 6-8.
 */
function flipPuzzleRows3(){
    for(var r = 3; r < 6; r++){      //iterates through middle 3 rows
        for(var c = 0; c < 9; c++){      //iterates through 9 positions in each row
            var start = puzzleArray[9*r+c];   //determines start value
            var x = (9*r+c)+ 27;     //adds 27 to start position to get the end position
            var y = 9*r+c;       //determines start position
            var end = puzzleArray[x];     //determines end value
            puzzleArray[y] = end;     //stores the end value in the start value
            puzzleArray[x] = start;       //stores the start value in the end value
        }
    }
}

/**
 * Flips the rows 0-2 with rows 6-8.
 */
function flipPuzzleRows4(){
    for(var r = 0; r < 3; r++){      //iterates through 3 rows
        for(var c = 0; c < 9; c++){      //iterates through 9 positions in each row
            var start = puzzleArray[9*r+c];   //determines start value
            var x = (9*r+c)+ 54;      //adds 54 to start position to get the end position
            var y = 9*r+c;       //determines start position
            var end = puzzleArray[x];     //determines end value
            puzzleArray[y] = end;     //stores the end value in the start value
            puzzleArray[x] = start;   //stores the start value in the end value
        }
    }
}

/**
 * Flips the columns 0-2 with 3-5.
 */
function flipPuzzleColumn1(){
    for(var r = 0; r < 3; r++){      //iterates through 3 columns
        for(var c = 0; c < 9; c++){      //iterates through 9 positions in each column
            var start = puzzleArray[r+9*c];   //determines start value
            var x = (r+9*c)+ 3;       //adds 3 to start position to get the end position
            var y = r+9*c;        //determines start position
            var end = puzzleArray[x];     //determines end value
            puzzleArray[y] = end;     //stores the end value in the start value
            puzzleArray[x] = start;    //stores the start value in the end value
        }
    }
}

/**
 * Flips the columns 0-2 with 6-8.
 */
function flipPuzzleColumn2(){
    for(var r = 0; r < 3; r++){      //iterates through 3 columns
        for(var c = 0; c < 9; c++){       //iterates through 9 positions in each column
            var start = puzzleArray[r+9*c];       //determines start value
            var x = (r+9*c)+ 6;      //adds 6 to start position to get the end position
            var y = r+9*c;       //determines start position
            var end = puzzleArray[x];     //determines end value
            puzzleArray[y] = end;     //stores the end value in the start value
            puzzleArray[x] = start;       //stores the start value in the end value
        }
    }
}

/**
 * Flips the columns 3-5 with 6-8.
 */
function flipPuzzleColumn3(){
    for(var r = 3; r < 6; r++){      //iterates through middle 3 columns
        for(var c = 0; c < 9; c++){      //iterates through 9 positions in each column
            var start = puzzleArray[r+9*c];   //determines start value
            var x = (r+9*c)+ 3;      //adds 3 to start position to get the end position
            var y = r+9*c;       //determines start position
            var end = puzzleArray[x];     //determines end value
            puzzleArray[y] = end;     //stores the end value in the start value
            puzzleArray[x] = start;       //stores the start value in the end value
        }
    }
}