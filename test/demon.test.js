import { test, expect } from '@jest/globals';

import Demon from '../src/Demon';

test('demonConstructor', () => {
    const testCharacter = new Demon('Lucifer');

    const correctCharacter = {
        _name: 'Lucifer',
        _type: 'Demon',
        attack: 10,
        defence: 40,
        health: 100,
        level: 1
    }

    expect(testCharacter).toEqual(correctCharacter);
});