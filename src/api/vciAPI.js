import axios from 'axios';
import getToken from '../utils/getToken';
import { VCI_HTTP_BASE_URL } from './vciConfig';

const accessToken = getToken();

const orderRequest = axios.create({
    baseURL: VCI_HTTP_BASE_URL,
})

const orderRequestWithToken = axios.create({
    baseURL: VCI_HTTP_BASE_URL,
    headers: {
        Authorization: 'bearer ' + accessToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

export const apiGetVciUserToken = (uuid) => orderRequest.get(`get-token/?user_id=${uuid}`);

export const apiGetVciRechargeTimeLeft = () => orderRequestWithToken.get(`get-recharge/`)

export const apiGetVciUserWallet = () => orderRequestWithToken.get(`wallet/`);

export const apiGetVciAction = (payload) => orderRequestWithToken.get(`user-action?event_id=${payload.event_id}&market_id=${payload.market_id}`);

export const apiVciIncreaseBallance = () => orderRequestWithToken.post(`recharge/`);

export const apiVciGetEmid = () => orderRequestWithToken.get(`get-emid/`);

export const apiVciCreateOrder = (payload) => orderRequestWithToken.post(`create-order/`, payload);

export const apiVciCashoutHandle = (payload) => orderRequestWithToken.post(`cashout/`, payload);
