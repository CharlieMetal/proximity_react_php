import { handleActions } from 'redux-actions'
import { FETCH_ASSETS } from '../constants/fetchAssets';

export const assets = handleActions({
    [FETCH_ASSETS]: (state, action) => [...action.payload],
}, []);