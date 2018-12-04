var name = prompt("Hi! Before we get started, what's your name?")
name = name.toUpperCase()

var soundFun = confirm(`Okay, ${name}, welcome to a fun and exciting choose your own adventure story. For this story, you'll be playing the part of an INTERNET CRITIC. Does that sound fun?`)

var storyStart = prompt("Too bad! Your first task is to review FREEJACK (1992). For context, this story takes place in 1992. Sorry, I didn't put that at the top. Sort of buried the lede. FREEJACK is a sci-fi action romp starting Emilio Estevez, Anthony Hopkins, and MICK JAGGER. How do you go about writing the review? Start with the CAST, start with the PLOT, or *scoff* point out a plot HOLE?")

if (storyStart.toUpperCase() === "CAST") {
	var isThatWeird = confirm("Nice. Yeah, Mick Jagger's in this crazy movie. Emilio Estevez, sure, he's at the top of the world right now (again, remember that this is 1992) and he's poised to star in his magnum opus, THE MIGHTY DUCKS (1992). Anthony Hopkins is a legend even at the time. But Mick Jagger? That's weird, right?")
	if (isThatWeird == true) {
		var areImpressed = confirm("He's not even an ACTOR, really. And he shows up and expects you to be like, impressed that he's here? Wait. Let me rephrase. He shows up (to you) and expects you (as in, you, right this second) to be impressed that he's here (in front of you, in the context of this story). Are you impressed?")
		if (areImpressed == true) {
			var demands = confirm("For once, Mick Jagger CAN get satisfaction. But, as a celebrity, he doesn't know not to bite the hand that feeds. He demands a good review of FREEJACK (1992) so that he can have a long and illustrious film career. Do you give in to the demands of a Rolling Stone?")
			if (demands) {
				alert("Unfortunately, you relinquish your journalistic integrity (how much you have, anyway, as an INTERNET CRITIC in the far-flung year of 1992) and give Mick Jagger the sweet, sweet reward he so desperately craves. Your bos FIRES YOU because have you SEEN that movie??? It's REAL BAD!!!! You lose.")
			} else {
				alert("Mick Jagger feeds you to his ancient beast, KEITH RICHARDS. You lose.")
			}
		} else {
			var fireballNum = prompt("Clearly, Mick Jagger can't get no satisfaction in this scenario. As it turns out, he's also a MASTER WIZARD, and casts the devastating spell, THEIR SATANIC MAJESTIES REQUEST. You take... hold on, give me a number greater than 1 but less than... let's say 112,358.")
			if (fireballNum > 1 && fireballNum < 112358) {
				alert(`You take ${fireballNum} fire damage. This kills you, given your maximum HP of, what, 4? Let me check the INTERNET CRITIC levelling chart... where are you going? HEY WAIT COME BACK (You lose?)`)
			} else {
				alert("Haha, smart guy. I gave you simple instructions and you thought you'd be a smarty pants. Well you know WHAT. I LIKE THAT. You win. Thirty-thousand Jaggerpoints.")
			}
		}
	} else {
		alert("You have been eaten by a grue. Sorry. It's that kind of game.")
	}
} else if (storyStart.toUpperCase() === "PLOT") {
	var pretendUse = prompt("Good thinking, starting with the plot. Always a solid place to start. So the plot of FREEJACK (1992) is that a racecar driver in 1991 (Estevez) is shunted into the future at the exact moment he’s about to die in a fiery… okay, you didn’t pay attention at all. Going to get that out of the way.  Movie was super boring and you had a lot of things going on and… anyway. That doesn’t matter. Do you: PRETEND you know anything at all about the movie or USE that in the review?")
	if (pretendUse.toUpperCase() === "PRETEND") {
		var panicBreathe = prompt("Okay, you got this. You’re a trained professional, kind of. Just have to… pretend you remember anything at all about this movie (which again is FREEJACK (1992)). Let’s see… (PANIC or BREATHE)")
		if (panicBreathe.toUpperCase() === "PANIC") {
			alert("You absolutely do not got this. You change your name, shave your head, and flee the country. In so doing, you free yourself from the confines of your former life. In fact, you end up tending sheep, happily, for the rest of your life. You win!")
		} else if (panicBreathe.toUpperCase() === "BREATHE") {
			var haveYouSeen = confirm("Okay but like have you actually SEEN Freejack (1992)?")
			if (haveYouSeen) {
				alert("Wait, you have??? This review is EASY then!!! You crank out this review in like, ten minutes, get paid, and thus does the circle of capitalism spin on. Keep in mind, again, that this is 1992. Somehow. You win!")
			} else {
				alert("Oh you are so boned. Literally. Trying to figure out just how in the hell all these elements fit together (and what kind of title is FREEJACK anyway???), you waste away to nothing but a skeleton. But hey, at least no deadlines! Except the literal dead line. Because You Are Dead.")
			}
		} else {
			alert("Not a valid prompt. Go back to the start and try again. You doof.")
		}
	} else if (pretendUse.toUpperCase() === "USE") {
		alert("Let’s be real. Your editor isn’t going to like you writing a review where you just straight-up said ‘I didn’t pay attention to the movie.’ You’re SO FIRED. You lose.")
	} else {
		alert("Oh, you think you're too good to follow directions? Go back to the start, chump.")
	}
} else if (storyStart.toUpperCase() === "HOLE") {
	var didYouSay = confirm("Excuse me? Did you say what I think you said?")
	if (didYouSay) {
		alert("As punishment for encouraging nitpicky culture, MICK JAGGER breaks into your office, metamorphs into GRU FROM DESPICABLE ME, then CONSUMES YOU. You have been EATEN BY A GRU. Get out of my sight.")
	} else {
		alert("Too dang bad. You made me mad. I’m done here. You want an ending? Here’s an ending. You lose. Good day, sir! Or madam! Or whatever! You’re a skeleton now! Bye!")
	}
} else {
	alert(`What's that? You don't know how to type PLOT, USE, or HOLE? Try again, from the top, ${name}.`)
}