// src/actions/fortuneActions.js
import { NAME_AURA } from './types';

export function getNameAura(nameAura) {
    console.log('this should be nameAura ' + nameAura);
    return {
        type: NAME_AURA,
        payload: [nameAura]
    };
};
