import { test, expect } from '@jest/globals';

import Swordsman from '../src/Swordsman';

test('swordsmanConstructor', () => {
    const testCharacter = new Swordsman('Aragorn');

    const correctCharacter = {
        _name: 'Aragorn',
        _type: 'Swordsman',
        attack: 40,
        defence: 10,
        health: 100,
        level: 1
    }

    expect(testCharacter).toEqual(correctCharacter);
});

