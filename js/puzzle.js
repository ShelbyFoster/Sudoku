$(function() {

    var puzzleArray = [2,0,9, 0,1,0, 6,0,0,  //generated puzzle
        0,0,4, 5,8,9, 0,0,0,
        7,0,0, 0,3,2, 0,4,0,

        0,0,7, 8,0,0, 0,6,4,
        0,4,0, 0,0,0, 0,1,0,
        1,6,0, 0,0,5, 8,0,0,

        0,2,0, 1,5,0, 0,0,9,
        0,0,0, 3,9,8, 2,0,0,
        0,0,6, 0,4,0, 3,0,1];


    var solvedArray = [2,8,9, 7,1,4, 6,3,5,   //solved puzzle
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

    generatePuzzle();



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
        counter = 0;
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
        console.log("Puzzle Completed Successfully");
        return true;
    }


    console.log(checkPuzzle());

});