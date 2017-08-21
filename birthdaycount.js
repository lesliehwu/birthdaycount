var daysUntilMyBirthday = 60;

function birthdaycount(days){
	while(days>30){
		console.log(days + " days until my birthday. Nooooo!!!");
		days--;
	}
	while(days<=30 && days>=5){
		console.log(days + " days until my birthday. Getting closer!!");
		days--;
	}
	while(days<5 && days>0){
		console.log(days + " days until my birthday AHHHHHHHHH");
		days--;
	}

	if(days===0){
		console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");`		console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
		console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
	}
}
