import { createAction } from 'redux-actions'
import { apiGet } from './../api';
import { urlAssets } from "../api/urls";
import { FETCH_ASSETS } from '../constants/fetchAssets';

export const fetchAssets = createAction(FETCH_ASSETS, apiGet(urlAssets));