/* eslint-disable no-alert */
import {
    invokeScript, broadcast, nodeInteraction, waitForTx,
} from '@waves/waves-transactions';
import { stringToUint8Array, sha256, base58encode } from '@waves/waves-crypto';
import { call } from 'redux-saga/effects';

const dappaddress = '3N5HzCuVFaprA1w6eo9MdFmkCG77foHZu6a';
const baseUri = 'https://testnodes.wavesnodes.com';

window.wc = {
    stringToUint8Array,
    sha256,
    base58encode,
};
window.wt = {
    nodeInteraction,
    invokeScript,
    broadcast,
    waitForTx,
};

export default function* wavesInit() {
    try {
        const v = yield call(nodeInteraction.accountData, dappaddress, baseUri);
        window.dAppData = v;
  
        window.dAppDataKeys = Object.keys(v);
        console.log('dApp Account data:');
        console.log(v);
        console.log(JSON.stringify(v));
        
    } catch (error) {
        console.log(error);
        return;
    }

    const { WavesKeeper } = window;
    if (!WavesKeeper) {
        alert('To Auth WavesKeeper should be installed.');
        return;
    }

    const authData = { data: 'Auth on my \'Coupon Bazaar\' site' };

    try {
        const keeperApi = yield call(WavesKeeper.initialPromise);
        const state = yield call(keeperApi.publicState);
        console.log('Waves Keeper data:'); // displaying the result in the console
        console.log(state);

        return;
    } catch (error) {
        console.error(error);
    }

    try {
        const auth = yield call(WavesKeeper.auth, authData);
        console.log(auth);

        return;
    } catch (error) {
        console.error(error);
    }
}
