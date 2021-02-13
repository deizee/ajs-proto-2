import Character from '../Character';
import Bowman from '../Bowman';

test('Проверяем, что если имя персонажа меньше 2 символов, то выпадет ошибка', () => {
  expect(() => new Character('I', 'Bowman')).toThrow();
});

test('Проверяем, что если имя персонажа больше 10 символов, то выпадет ошибка', () => {
  expect(() => new Character('Ivaaaaaaaaaaan', 'Bowman')).toThrow();
});

test('Проверяем, что если неверно указан тип персонажа, то выпадет ошибка', () => {
  expect(() => new Character('Ivan', 'Warrior')).toThrow();
});

test('Проверяем, что если имя не является строкой, то выпадет ошибка', () => {
  expect(() => new Character(123, 'Bowman')).toThrow();
});

test('Проверяем, что корректно создается объект', () => {
  const char = new Character('Ivan', 'Bowman');

  expect(char).toEqual({
    name: 'Ivan',
    type: 'Bowman',
    health: 100,
    level: 1,
  });
});

test('Проверяем, что если здоровье 0, то при попытке повысить уровень выпадет ошибка', () => {
  expect(() => {
    const char = new Character('Ivan', 'Bowman');
    char.health = 0;
    char.levelUp();
  }).toThrow();
});

test('Проверяем, что при положительном здоровье уровень персонажа повышается', () => {
  const expected = {
    name: 'Ivan',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 25.5,
    defence: 25.5,
  };

  const received = new Bowman('Ivan');
  received.health = 50;
  received.levelUp();

  expect(received).toEqual(expected);
});

test('Проверяем, что если здоровье 0, урон не причиняется', () => {
  const expected = {
    name: 'Ivan',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const received = new Bowman('Ivan');
  received.health = 0;
  received.damage(10);

  expect(received).toEqual(expected);
});

test('Проверяем, что при положительном здоровье урон причиняется корректно', () => {
  const expected = {
    name: 'Ivan',
    type: 'Bowman',
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const received = new Bowman('Ivan');
  received.damage(10);

  expect(received).toEqual(expected);
});
