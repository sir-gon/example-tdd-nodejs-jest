// Libraries
import * as sick from '../iamsick';

describe('I am sick', () => {
    it('I have symptom', () => {
        expect.assertions(2);

        const response = sick.iAmSick(true);

        expect((typeof response).toLowerCase()).toBe('boolean');
        expect(response).toBe(true);
    });

    it('I don\'t have a symptom', () => {
        expect.assertions(2);

        const response = sick.iAmSick(false);

        expect((typeof response).toLowerCase()).toBe('boolean');
        expect(response).toBe(false);

    });
  });
  