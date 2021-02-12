import Undead from '../Undead';

test('Проверяем, что корректно создается объект', () => {
  const char = new Undead('Ivan', 'Undead');

  expect(char).toEqual({
    name: 'Ivan',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
