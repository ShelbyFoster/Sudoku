/**
 * Checks that only one number can be in a given cell by looking at the
 * row/column/square the position lies on, without any of these containing
 * any duplicates.
 *
 * @param a The position that should be checked if there is only one choice available
 * @return Returns the number if there is only one number that can be in that position without duplicates, else it will return 0
 */
var currInput;
function checkOneChoice(position){
    var items = [false, false, false, false,false,false, false, false, false, false];
    var puzzlePosition = position;


    $('input').each(function(){
        if($(this).attr("id") == position){
            currInput = $(this);
        }
    })

    //console.log(currInput.parent().attr("id"))


    //determines which row it lies on
    var r = puzzlePosition/9;

    //determines where column starts (eg. 1-8)
    for(var r = 0; r < 9; r++){
        if(puzzlePosition > 8){
            puzzlePosition = puzzlePosition - 9;
        }
    }



    //checking off values in row a is contained in
    for(var x = 0; x < 9; x++){
        var value = puzzleArray[9*r+x];
        items [value] = true;
    }


    //checking off values in column a is contained in
    for(var x = 0; x < 9; x++){
        var value = puzzleArray[puzzlePosition+9*x];
        items [value] = true;
    }

    //determines what square it lies on
    for(var c = 0; c < 3; c++){
        for(var r = 0; r < 3; r++){
            var value;


            switch (currInput.parent().attr("id")) {
                case 0:
                    break;
                case "container1":
                    value = puzzleArray[0+r+9*c];
                    break;
                case "container2":
                    value = puzzleArray[3+r+9*c];
                    break;
                case "container3":
                    value = puzzleArray[6+r+9*c];
                    break;
                case "container4":
                    value = puzzleArray[27+r+9*c];
                    break;
                case "container5":
                    value = puzzleArray[30+r+9*c];
                    break;
                case "container6":
                    value = puzzleArray[33+r+9*c];
                    break;
                case "container7":
                    value = puzzleArray[54+r+9*c];
                    break;
                case "container8":
                    value = puzzleArray[57+r+9*c];
                    break;
                case "container9":
                    value = puzzleArray[60+r+9*c];
                    break;
            }
            items [value] = true;
        }
    }



    //counting false values && storing array position of false value
    var falseValues = 0;
    var correctValue = 0;
    for(var x = 1; x < 10; x++){
        var itemValue = items[x];
        if(itemValue == false){
            falseValues++;
            correctValue = x;
        }
    }

    //returns index if only 1 false, else returns 0
    if(falseValues === 1){
       // console.log(correctValue);
        return correctValue;
    }
    else{
        //console.log("not working");
        return 0;

    }

}