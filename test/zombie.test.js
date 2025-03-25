import { test, expect } from '@jest/globals';

import Zombie from '../src/Zombie';

test('zombieConstructor', () => {
    const testCharacter = new Zombie('Shaun');

    const correctCharacter = {
        _name: 'Shaun',
        _type: 'Zombie',
        attack: 40,
        defence: 10,
        health: 100,
        level: 1
    }

    expect(testCharacter).toEqual(correctCharacter);
});