class Character {
  constructor(name, hp, dmg, mana) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.maxMana = mana;
    this.maxHp = hp;
    this.description = "";
    this.status = "playing";
    this.isShadowed = false;
    this.isDefending = false;
  }

  takeDamage(damage) {
    // exception pour certains character
    if (this.isDefending) {
      damage = Math.max(0, damage - 2);
      this.isDefending = false;
    }
    if (this.isShadowed) {
      console.log(`${this.name} a esquivé les dégâts grâce à Shadow Hit !`);
      this.isShadowed = false;
      return
    }
    // déduire les dégats sur hp
    this.hp -= damage;
    // changer le status si hp <=0
    if (this.hp <= 0) {
      this.hp = 0;
      this.status = "loser";
      console.log(`${this.name} est mort !`);
    }
  }

  dealDamage(victim) {
    if (!victim || victim.status === "loser") {
      console.log(`${this.name} ne peut pas attaquer cette cible.`);
      return;
    }
    console.log(`${this.name} attaque ${victim.name} et inflige ${this.dmg} dégats`)
    console.log(`${victim.name} a ${victim.hp} PV restants.`);
    victim.takeDamage(this.dmg)
    if (victim.status === "loser") {
      this.mana += 20;
      console.log(`${victim.name} est éliminé. ${this.name} regagne 20 mana.`);
    }

  }
}

export default Character;