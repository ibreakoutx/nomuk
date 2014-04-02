var NumberPlusFracTest = MixedNumberToFracTest.extend( {
    init: function(_name) {
	this._super(_name);
	this.instructions = "Add the number + fraction, answer in reduced fraction";
	this.sep[0] = '+';
    },
});

