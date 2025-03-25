import { test, expect } from '@jest/globals';

import Magician from '../src/Magician';

test('magicianConstructor', () => {
    const testCharacter = new Magician('Gandalf');

    const correctCharacter = {
        _name: 'Gandalf',
        _type: 'Magician',
        attack: 10,
        defence: 40,
        health: 100,
        level: 1
    }

    expect(testCharacter).toEqual(correctCharacter);
});