import { Assassin, Berzerker, Fighter, Monk, Paladin } from "./characters.js";

export class Game {
  constructor() {
    this.turnLeft = 10;
    this.characters = [
      new Fighter(),
      new Paladin(),
      new Monk(),
      new Berzerker(),
      new Assassin(),
    ];
  }

  startGame() {
    console.log("Le jeu commence ! sélectionnez un personnage :");
    this.characters.forEach((character, index) => {
      console.log(`${index + 1}. ${character.name} - ${character.description}`);
    });
    console.log("Vous avez 10 tours pour éliminer tous les personnages adverses.");

    // Boucle principale du jeu
    while (this.turnLeft > 0 && this.characters.filter(c => c.status === "playing").length > 1) {
      this.startTurn();
    }
    this.endGame();
  }
  startTurn() {
    const playingCharacters = this.characters.filter(
      character => character.status === "playing"
    );
    if (playingCharacters.length < 2) return;

    // Sélectionne deux joueurs vivants au hasard
    const id1 = Math.floor(Math.random() * playingCharacters.length);
    let id2 = Math.floor(Math.random() * playingCharacters.length);
    while (id2 === id1) {
      id2 = Math.floor(Math.random() * playingCharacters.length);
    }
    const player1 = playingCharacters[id1];
    const player2 = playingCharacters[id2];

    console.log(`Tour numéro: ${this.turnLeft}`);
    console.log(`${player1.name} attaque ${player2.name}`);
    player1.dealDamage(player2);

    this.turnLeft--;
    this.watchStats();
  }


  watchStats() {
    console.log("\n===== Statistiques des personnages =====");
    this.characters.forEach(character => {
      console.log(
        `| ${character.name.padEnd(8)} | PV: ${String(character.hp).padEnd(3)} | Mana: ${String(character.mana).padEnd(3)} | Status: ${character.status.padEnd(7)} |`
      );
    });
    console.log("========================================");
    console.log(`Tours restants : ${this.turnLeft}`);
    console.log("========================================\n");
  }

  endGame() {
    const winners = this.characters.filter(character => character.status === "playing");
    if (winners.length === 0) {
      console.log("Tous les personnages sont morts. Fin du jeu.");
    } else if (winners.length === 1) {
      console.log(`${winners[0].name} a gagné le jeu !`);
    } else {
      console.log("Le jeu se termine avec plusieurs survivants :");
      winners.forEach(character => {
        console.log(`${character.name} - PV: ${character.hp}, Mana: ${character.mana}`);
      });
    }
    console.log("Statistiques finales des personnages :");
    this.characters.forEach(character => {
      console.log(`${character.name} - PV: ${character.hp}, Mana: ${character.mana}, Status: ${character.status}`);
    });
    console.log("Merci d'avoir joué !");
  }

}

const game = new Game();
game.startGame();