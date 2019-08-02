// src/reducers/index.js
import { combineReducers } from 'redux';

import nameAuraReducer from './nameAuraReducer';

export default combineReducers({
    nameAura: nameAuraReducer,
});
