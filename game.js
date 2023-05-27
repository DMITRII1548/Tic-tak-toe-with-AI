class Game {
	constructor() {
		this.fields = [
			null, null, null,
			null, null, null,
			null, null, null
		]

	}

	restart(player) {
		for (let i = 0; i < 9; i++) {
			this.fields[i] = null
			document.querySelector(".field-" + i).innerText = ''
		}
		this.currentPlayer = 1
	}
}

class Player {
	constructor(game) {
	    this.currentPlayer = 1;
	    this.game = game
	    this.player2 = new Ai(game, this)
	}

	fillField(selector, fieldIndex) {
		if (!this.game.fields[fieldIndex] && this.currentPlayer == 1) {
			document.querySelector(selector).innerText = this.determineCurrentPlayerIcon()   
			this.game.fields[fieldIndex] = this.currentPlayer
			setTimeout(() => {
				this.checkWinner()
				this.changeCurrentPlayer() 
			}, 1)
		}
	}

	determineCurrentPlayerIcon() {
		if (this.currentPlayer == 1) {
			return 'o'
		} else {
			return 'x'
		}
	}

	changeCurrentPlayer() {
		if (this.currentPlayer == 1) {
			this.currentPlayer = 2
			this.player2.fillField()
		} else {
			this.currentPlayer = 1
		}
	}

	checkWinner() {
		if (this.game.fields[0] == this.game.fields[1] && this.game.fields[1] == this.game.fields[2] && this.game.fields[1]) {
			this.showMessageAndRestart()
		} else if (this.game.fields[3] == this.game.fields[4] && this.game.fields[4] == this.game.fields[5] && this.game.fields[4]) {
			this.showMessageAndRestart()
		} else if (this.game.fields[6] == this.game.fields[7] && this.game.fields[7] == this.game.fields[8] && this.game.fields[7]) {
			this.showMessageAndRestart()
		} else if (this.game.fields[0] == this.game.fields[3] && this.game.fields[3] == this.game.fields[6] && this.game.fields[3]) {
			this.showMessageAndRestart()
		} else if (this.game.fields[1] == this.game.fields[4] && this.game.fields[4] == this.game.fields[7] && this.game.fields[4]) {
			this.showMessageAndRestart()
		} else if (this.game.fields[2] == this.game.fields[5] && this.game.fields[5] == this.game.fields[8] && this.game.fields[5]) {
			this.showMessageAndRestart()
		} else if (this.game.fields[0] == this.game.fields[4] && this.game.fields[4] == this.game.fields[8] && this.game.fields[4]) {
			this.showMessageAndRestart()
		} else if (this.game.fields[2] == this.game.fields[4] && this.game.fields[4] == this.game.fields[6] && this.game.fields[4]) {
			this.showMessageAndRestart()
		}
	}

	showMessageAndRestart() {
		let isConfirmed = confirm("Победил " + this.determineCurrentPlayerIcon() + " \n" +
			"Сбросить?")

		if (isConfirmed) {
			this.game.restart()
		}
	}
}

class Ai {
	constructor(game, player) {
		this.game = game
		this.player = player
	}

	fillField() {
		let randomIndex = this.generateIndex()


		if (!this.game.fields[randomIndex]) {
			setTimeout(() => {
				document.querySelector('.field-' + randomIndex).innerText = this.player.determineCurrentPlayerIcon()   
			
				this.game.fields[randomIndex] = this.player.currentPlayer
				setTimeout(() => {
					this.player.checkWinner()
				}, 1)
				setTimeout(() => {
					this.player.changeCurrentPlayer() 
				}, 1)
			}, 200)
		} else {
			this.fillField()
		}
	}

	generateIndex() {
		let randomIndex = Math.floor(Math.random() * 9)

		//---
		if (this.game.fields[0] == this.game.fields[1] && this.game.fields[0] && !this.game.fields[2]) {
			randomIndex = 2
		} else if (this.game.fields[1] == this.game.fields[2] && this.game.fields[1] && !this.game.fields[0]) {
			randomIndex = 0
		} else if (this.game.fields[0] == this.game.fields[2] && this.game.fields[0] && !this.game.fields[1]) {
			randomIndex = 1
		}

		else if (this.game.fields[3] == this.game.fields[4] && this.game.fields[3] && !this.game.fields[5]) {
			randomIndex = 5
		} else if (this.game.fields[4] == this.game.fields[5] && this.game.fields[5] && !this.game.fields[3]) {
			randomIndex = 3
		} else if (this.game.fields[3] == this.game.fields[5] && this.game.fields[5] && !this.game.fields[4]) {
			randomIndex = 4
		}

		else if (this.game.fields[6] == this.game.fields[7] && this.game.fields[6] && !this.game.fields[8]) {
			randomIndex = 8
		} else if (this.game.fields[7] == this.game.fields[8] && this.game.fields[7] && !this.game.fields[6]) {
			randomIndex = 6
		} else if (this.game.fields[6] == this.game.fields[8] && this.game.fields[6] && !this.game.fields[7]) {
			randomIndex = 7
		}

		// |||

		else if (this.game.fields[0] == this.game.fields[3] && this.game.fields[0] && !this.game.fields[6]) {
			randomIndex = 6
		} else if (this.game.fields[3] == this.game.fields[6] && this.game.fields[3] && !this.game.fields[0]) {
			randomIndex = 0
		} else if (this.game.fields[0] == this.game.fields[6] && this.game.fields[0] && !this.game.fields[3]) {
			randomIndex = 3
		}

		else if (this.game.fields[1] == this.game.fields[4] && this.game.fields[1] && !this.game.fields[7]) {
			randomIndex = 7
		} else if (this.game.fields[4] == this.game.fields[7] && this.game.fields[4] && !this.game.fields[1]) {
			randomIndex = 1
		} else if (this.game.fields[1] == this.game.fields[7] && this.game.fields[1] && !this.game.fields[4]) {
			randomIndex = 4
		}

		else if (this.game.fields[2] == this.game.fields[5] && this.game.fields[2] && !this.game.fields[8]) {
			randomIndex = 8
		} else if (this.game.fields[5] == this.game.fields[8] && this.game.fields[5] && !this.game.fields[2]) {
			randomIndex = 5
		} else if (this.game.fields[2] == this.game.fields[8] && this.game.fields[2] && !this.game.fields[5]) {
			randomIndex = 5
		}

		// /

		else if (this.game.fields[0] == this.game.fields[4] && this.game.fields[0] && !this.game.fields[8]) {
			randomIndex = 8
		} else if (this.game.fields[4] == this.game.fields[8] && this.game.fields[4] && !this.game.fields[0]) {
			randomIndex = 0
		} else if (this.game.fields[0] == this.game.fields[8] && this.game.fields[0] && !this.game.fields[4]) {
			randomIndex = 4
		}

		// \

		else if (this.game.fields[2] == this.game.fields[4] && this.game.fields[2] && !this.game.fields[6]) {
			randomIndex = 6
		} else if (this.game.fields[4] == this.game.fields[6] && this.game.fields[4] && !this.game.fields[2]) {
			randomIndex = 2
		} else if (this.game.fields[2] == this.game.fields[6] && this.game.fields[2] && !this.game.fields[4]) {
			randomIndex = 4
		}

		return randomIndex
	}
}

let game = new Game()
let player = new Player(game)