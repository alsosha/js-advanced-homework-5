import { test, expect } from '@jest/globals';

import Bowman from '../src/Bowman';

test('bowmanConstructor', () => {
    const testCharacter = new Bowman('Legolas');

    const correctCharacter = {
        _name: 'Legolas',
        _type: 'Bowman',
        attack: 25,
        defence: 25,
        health: 100,
        level: 1
    }

    expect(testCharacter).toEqual(correctCharacter);
});