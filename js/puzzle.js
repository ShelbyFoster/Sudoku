$(function() {

	var puzzleArray = [3,1,0, 2,4,7, 9,8,6,
					   9,2,4, 0,6,0, 5,0,0,
					   0,0,0, 0,5,0, 1,0,0,

					   0,0,7, 4,2,0, 8,5,1,
					   8,5,0, 3,0,0, 7,0,2,
					   2,0,1, 0,8,5, 6,3,0,

					   0,0,0, 6,0,0, 0,0,8,
					   1,6,0, 5,0,0, 0,0,0,
					   0,0,0, 0,9,0, 3,0,5];

	function generatePuzzle() {
		var counter = 0;
		for(var j = 1; j < 10; j++){
			var container = document.createElement('div');
			container.id = "container" + j;
			container.className = 'container';
			$('.grid').append(container);


			for(var i = 0; i < 3; i++){
				for(var x = 0; x < 3; x++){
					var input = document.createElement('input');
					input.id = i;
					input.className = 'cell';
					input.maxLength = 1;
					var start = [0,3,6,27,30,33,54,57,60];
					var startPosition = parseInt(start[counter]);

                    if(puzzleArray[startPosition+x+9*i] === 0){
                        input.setAttribute("placeholder", "");

                    }
                    else{
                        input.setAttribute("placeholder", puzzleArray[startPosition+x+9*i]);
                    }


					var con = "#container" + j;
					$(con).append(input);
				}
			}
			counter++;
		}
	}
	generatePuzzle();
});

