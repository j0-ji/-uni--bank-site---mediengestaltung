'use strict';

class CBSwitch {
	// ATTRIBUTE
	isPrivate;

	// CONSTRUCTOR
	constructor() {
		this.isPrivate = true;
	}

	// METHODS
	toggleIsPrivate() {
		switch (this.isPrivate) {
			case true : {
				document.getElementById('business-icon').src = '../img/icons/UI/work-white/2x/outline_work_outline_white_36dp.png';
				document.getElementById('private-button').classList.add('inactive');
				document.getElementById('business-button').classList.remove('inactive');
				document.getElementById('business-button').removeAttribute('onclick');
				document.getElementById('private-button').onclick = function() { cbswitch.toggleIsPrivate(); };
				this.isPrivate = false;
				break;
			}
			case false : {
				document.getElementById('business-icon').src = '../img/icons/UI/work-off-white/2x/outline_work_off_white_36dp.png';
				document.getElementById('private-button').classList.remove('inactive');
				document.getElementById('business-button').classList.add('inactive');
				document.getElementById('private-button').removeAttribute('onclick');
				document.getElementById('business-button').onclick = function() { cbswitch.toggleIsPrivate(); };
				this.isPrivate = true;
				break;
			}
		}
	}
}

let cbswitch = new CBSwitch();


/*class DimensionManager {
	// ATTRIBUTES
	header;
	content;
	footer;

	//CONSTRUCTOR
	constructor() {
		this.header = 64;
		this.content = 0;
		this.footer = 0;
	}

	// METHODS
	getFooterHeight() {

	}
}*/


