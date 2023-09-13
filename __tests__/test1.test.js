import GameSavingLoader from '../src/app';

test('test for promise', (done) => {
  GameSavingLoader.load()
    .then((result) => {
      const expected = {
        id: 9,
        created: 1546300800,
        userInfo: {
          id: 1,
          name: 'Hitman',
          level: 10,
          points: 2000,
        },
      };
      expect(result).toEqual(expected);
      done();
    })
    .catch((error) => error);
});
