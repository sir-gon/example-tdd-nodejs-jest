// Libraries
import { SickException } from '../iamsick.error';
import * as sick from '../iamsick';

describe('I am sick', () => {
    it('Unexpected input', () => {
        expect.assertions(1)

        const t = () => {
            const response = sick.iAmSick(
                null, // Mandatory illness symptoms 
                null, // Optional illness Symptoms
                null // My current symptoms
            );
        };

        expect(t).toThrow( SickException );
    });    

});
  