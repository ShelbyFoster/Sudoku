/**
 * Checks that only one number can be in a given cell by looking at the
 * row/column/square the position lies on, without any of these containing
 * any duplicates.
 *
 * @param a The position that should be checked if there is only one choice available
 * @return Returns the number if there is only one number that can be in that position without duplicates, else it will return 0
 */
function checkOneChoice(position){
    var items = [false, false, false, false,false,false, false, false, false, false];
    var n = position;
    var currInput;

    $('input').each(function(){
        if($(this).attr("id") == position){
            currInput = $(this);
            console.log('test', currInput)
        }
    })

    console.log(currInput.parent().attr("id"))
    //determines where column starts (eg. 1-8)
    for(var m = 0; m < 9; m++){
        if(n > 8){
            n = n - 9;
        }
    }

    //determines which row it lies on
    var i = n/9;

    //checking off values in row a is contained in
    for(var r = 0; r < 9; r++){
        var value = puzzleArray[9*i+r];
        items [value] = true;
    }


    //checking off values in column a is contained in
    for(var c = 0; c < 9; c++){
        var value = puzzleArray[n+9*c];
        items [value] = true;
    }

    //determines what square it lies on
    for(var f = 0; f < 3; f++){
        for(var j = 0; j < 3; j++){
            var value;


            switch (currInput.parent().attr("id")) {
                case 0:
                    break;
                case "container1":
                    value = puzzleArray[0+j+9*f];
                    console.log(puzzleArray[0+j+9*f])
                    break;
                case "container2":
                    value = puzzleArray[3+j+9*f];
                    break;
                case "container3":
                    value = puzzleArray[6+j+9*f];
                    break;
                case "container4":
                    value = puzzleArray[27+j+9*f];
                    break;
                case "container5":
                    value = puzzleArray[30+j+9*f];
                    break;
                case "container6":
                    value = puzzleArray[33+j+9*f];
                    break;
                case "container7":
                    value = puzzleArray[54+j+9*f];
                    break;
                case "container8":
                    value = puzzleArray[57+j+9*f];
                    break;
                case "container9":
                    value = puzzleArray[60+j+9*f];
                    break;
            }
            items [value] = true;
        }
    }



    //counting false values && storing array position of false value
    var f = 0;
    var s = 0;
    for(var o = 1; o<10; o++){
        var b = items[o];
        if(b == false){
            f++;
            s = o;
        }
    }

    //returns index if only 1 false, else returns 0
    if(f === 1){
        //System.out.println(s);
        console.log(s);
        return s;

    }
    else{
        console.log("not working");
        return 0;

    }

}