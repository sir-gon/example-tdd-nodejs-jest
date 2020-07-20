import iamsick from '../iamsick';

describe('basic', () => {
  it('using import / export', () => {
    expect.assertions(1);

    expect((typeof iamsick).toLowerCase()).toMatch('object');
  });

  // async/await can be used.
  it('works with async/await', async () => {
    expect.assertions(1);
    const value = 42;

    const setTimeoutPromise = timeout => {
      return new Promise(resolve => {
        setTimeout(() => {
          return resolve(value);
        }, timeout);
      });
    };

    const data = await setTimeoutPromise(1000);

    expect(data).toStrictEqual(42);
  });

  it('destructuring', () => {
    expect.assertions(6);

    // Array destructuring
    const foo = ['uno', 'dos', 'tres'];

    const [uno, dos, tres] = foo;

    expect(uno).toStrictEqual('uno');
    expect(dos).toStrictEqual('dos');
    expect(tres).toStrictEqual('tres');

    // Object destructuring
    const baz = { cuatro: 'cuatro', cinco: 'cinco', seis: 'seis' };

    const { cuatro, cinco, seis } = baz;

    expect(cuatro).toStrictEqual('cuatro');
    expect(cinco).toStrictEqual('cinco');
    expect(seis).toStrictEqual('seis');
  });
});
