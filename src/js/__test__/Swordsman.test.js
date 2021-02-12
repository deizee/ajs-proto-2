import Swordsman from '../Swordsman';

test('Проверяем, что корректно создается объект', () => {
  const char = new Swordsman('Ivan', 'Swordsman');

  expect(char).toEqual({
    name: 'Ivan',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
