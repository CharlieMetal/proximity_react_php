import { createAction } from 'redux-actions'
import { apiGet } from './../api/urls'
import { FETCH_ASSETS } from './../constants/fetchAssets';

const api_fetch_customers = () => fetch(apiGet).then(v => v.json());

export const fetchCustomers = createAction(FETCH_ASSETS, api_fetch_customers);