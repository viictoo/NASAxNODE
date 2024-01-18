const EventEmitter = require("events");
const celeb = new EventEmitter();

//subscribe to the event for Observer1
celeb.on("race", (result) => {
	if (result === "win") {
		console.log("Congrats you have won the GP");
	}
});

// Subscribe to the event as Observer2
celeb.on("race", (result) => {
	if (result === "win") {
		console.log("It was the car");
	}
});

// Subscribe to the event as Observer3
celeb.on("race", (result) => {
	if (result === "win") {
		console.log("Booii! i could have done better");
	}
});

// Process exit event
process.on("exit", (code) => {
	console.log("Process exited with code: ", code);
});

// Subscribe to the event as Observer4
celeb.on("race", (result) => {
	if (result === "win") {
		console.log("thanks so much the team back at the factory");
	}
});

celeb.emit("race", "win");
celeb.emit("race", "lost");
celeb.emit("race", "win");
