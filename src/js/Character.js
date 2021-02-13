export default class Character {
  constructor(name, type) {
    const chars = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!(typeof name === 'string' && name.length >= 2 && name.length <= 10)) {
      throw new Error('Имя персонажа не удовлетворяет заданным условиям (от 2 до 10 символов)');
    }

    if (!chars.includes(type)) {
      throw new Error('Тип персонажа не удовлетворяет заданным условиям (Bowman, Swordsman, Magician, Daemon, Undead или Zombie)');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел умершего');
    }

    this.level += 1;
    this.attack += this.attack * 0.02;
    this.defence += this.defence * 0.02;
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }
}
