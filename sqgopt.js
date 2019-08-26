

const sqgopt = function() {
	console.log("When this project is developed there will be no more excuse for aggressive permission gathering elements on landing pages.")
};


const sqgoptSetTrigger = function() {
	ctaBox = sqgOptCTABox.getBoundingClientRect();
	sqgOptTrigger.style.marginTop = ctaBox.top + "px";
	sqgOptPostTrigger.style.marginTop = "-" + ctaBox.top + "px";
	// console.log(sqgOptPostTrigger.style.marginTop);
}

const sqgoptFindCTA = function() {

	console.log(ctaBox.top);

};