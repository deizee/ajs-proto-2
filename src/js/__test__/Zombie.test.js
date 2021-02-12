import Zombie from '../Zombie';

test('Проверяем, что корректно создается объект', () => {
  const char = new Zombie('Ivan', 'Zombie');

  expect(char).toEqual({
    name: 'Ivan',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
