class Menu {
	// ATTRIBUTES
	isOpen;

	// CONSTRUCTOR
	constructor() {
		this.isOpen = false;
	}

	//METHODS
	toggleMenu() {
		switch (this.isOpen) {
			case true : {
				document.getElementById('menu').style.display = 'none';
				this.isOpen = false;
				break;
			}
			case false : {
				document.getElementById('menu').style.display = 'block';
				this.isOpen = true;
				break;
			}
		}
	}
}

let menu = new Menu();