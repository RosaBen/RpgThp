import Character from "./character.js";

export class Fighter extends Character {
  constructor() {
    super("Grace", 12, 4, 40)
    this.description = "combattant équilibré sous tous les bords"
  }

  darkVision(victim) {
    if (this.mana >= 20) {
      console.log(`${this.name} lance Fighter Dark Vision  sur ${victim.name}: inflige 5 dégats`)
      victim.takeDamage(5);
      this.isDefending = true;
      this.mana -= 20;
      console.log(`${this.name} a ${this.mana} mana restants`)
    } else {
      console.log(`${this.name} n'a pas assez de mana, attaque normale utilisée.`)
      this.dealDamage(victim);
    }
  }
}

export class Paladin extends Character {
  constructor() {
    super("Ulder", 16, 3, 160)
    this.description = "chevalier puissant et défensif"
  }

  healingLighting(victim) {
    if (this.mana >= 40) {
      console.log(`${this.name} lance Paladin Healing Lighting sur ${victim.name}: inflige 4 dégats`)
      this.mana -= 40;
      victim.takeDamage(4);
      this.hp += 5;
      if (this.hp > this.maxHp) this.hp = this.maxHp;
      console.log(`${this.name} a ${this.mana} mana et ${this.hp} PV restants`)
    } else {
      console.log(`${this.name} n'a pas assez de mana, attaque normale utilisée.`)
      this.dealDamage(victim);
    }
  }
}

export class Monk extends Character {
  constructor() {
    super("Moana", 10, 2, 200)
    this.description = "prètre qui peut se guérir"
  }

  heal() {
    if (this.mana >= 25) {
      console.log(`${this.name} lance Monk Heal et récupère 8 PV`)
      this.mana -= 25;
      this.hp += 8;
      if (this.hp > this.maxHp) this.hp = this.maxHp;
      console.log(`${this.name} a ${this.mana} mana et ${this.hp} PV restants`)
    } else {
      console.log(`${this.name} n'a pas assez de mana, attaque normale utilisée.`)
    }
  }

}

export class Berzerker extends Character {
  constructor() {
    super("Draven", 8, 4, 0)
    this.description = "bourrin avec une attaque élevée"
  }

  rage() {
    if (this.hp > 1) {
      this.dmg += 1;
      this.hp -= 1
      console.log(`${this.name} lance Berzerker Rage et gagne +1 dégat (total=> ${this.dmg}), mais perd -1 PV (restants : ${this.hp})`)
    } else {
      console.log(`${this.name} n'a pas assez de hp pour entre en rage`)
      console.log(`${this.name} a ${this.hp} de PV restants`)
    }
  }
}

export class Assassin extends Character {
  constructor() {
    super("Carl", 6, 6, 20)
    this.description = "rusé et fourbe"
  }

  shadowHit(victim) {
    if (this.mana >= 20) {
      console.log(`${this.name} lance Assassin Shadow Hit sur ${victim.name} et inflige 7 dégats`)
      this.mana -= 20;
      victim.takeDamage(7);
      this.isShadowed = true;
      if (victim.hp > 0) {
        console.log(`${victim.name} a survécu !, ${this.name} perd 7dégats `);
        this.takeDamage(7);
      } else {
        console.log(`${victim.name} est mort !, ${this.name} gagne 7 dégats `);
      }
      console.log(`${this.name} a ${this.mana} mana restants`)
    } else {
      console.log(`${this.name} n'a pas assez de mana, attaque normale utilisée.`)
      this.dealDamage(victim);
    }
  }
}

