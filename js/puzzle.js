$(function() {

	var puzzleArray = [0,0,0,0,0,2,0,0,3,
										 0,1,0,0,0,0,0,0,0,
										 0,0,0,0,0,0,0,0,0,
										 0,0,0,0,0,0,0,0,0,
										 0,0,0,0,0,0,0,0,0,
										 0,0,0,0,0,0,0,0,0,
										 0,0,0,0,0,0,0,0,0,
										 0,0,0,0,0,0,0,0,0,
						         0,0,0,0,2,0,0,0,1];

	function generatePuzzle() {
//		var linebreak = "<br />";
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
					input.setAttribute("placeholder", puzzleArray[startPosition+x+9*i]);

					var con = "#container" + j;
					//console.log(con);
					$(con).append(input);
				}
			}
			counter++;
		}
	}
	generatePuzzle();
});

