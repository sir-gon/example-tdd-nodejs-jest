// Libraries
import { SickException } from '../iamsick.error';
import * as sick from '../iamsick';

// Test Case data
import * as covid19TestCase from './testCases/covid19.json';

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

    it('I have some symptoms', () => {
        expect.assertions(3);

        const mySymtoms = ['fever'];

        const response = sick.iAmSick(
            covid19TestCase.mandatory,
            covid19TestCase.optionals,
            mySymtoms
        );

        expect((typeof response).toLowerCase()).toBe('number');
        expect(response).toBeGreaterThanOrEqual(0.22);
        expect(response).toBeLessThanOrEqual(0.24);

    });

    it('I have all symptoms', () => {
        expect.assertions(3);

        const mySymtoms =  [
            "fever",
            "dry cough",
            "muscle pain"
        ];

        const response = sick.iAmSick(
            covid19TestCase.mandatory,
            covid19TestCase.optionals,
            mySymtoms
        );

        expect((typeof response).toLowerCase()).toBe('number');
        expect(response).toBeGreaterThanOrEqual(0.69);
        expect(response).toBeLessThanOrEqual(0.71);
    });

    it('I have one mandatory symptom and some optional sympthoms', () => {
        expect.assertions(3);

        const mySymtoms =  [
            "fever",
            "ageusia",
            "anosmia"
        ];

        const response = sick.iAmSick(
            covid19TestCase.mandatory,
            covid19TestCase.optionals,
            mySymtoms
        );

        expect((typeof response).toLowerCase()).toBe('number');
        expect(response).toBeGreaterThanOrEqual(0.3);
        expect(response).toBeLessThanOrEqual(0.4);
    });

    it('I don\'t have a symptom', () => {
        expect.assertions(2);

        const mySymtoms = [];

        const response = sick.iAmSick(
            covid19TestCase.mandatory,
            covid19TestCase.optionals,
            mySymtoms
        );

        expect((typeof response).toLowerCase()).toBe('number');
        expect(response).toEqual(0);

    });

});
  