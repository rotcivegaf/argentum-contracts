import { writable } from 'svelte/store';
//import { privateKeyToAccount, generatePrivateKey } from 'viem/accounts'
import { spanish, generateMnemonic, mnemonicToAccount } from 'viem/accounts'

import { createWalletClient, custom, http} from 'viem'
import {avalancheFuji} from "viem/chains"


export function loadWallet() {
    // @todo @audit use encryption to have a safe wallet :s :s
    let memonicData = localStorage.getItem('memonicData');
    if (!memonicData) {
        memonicData = generateMnemonic(spanish);
    }
    const account = mnemonicToAccount(
        'legal winner thank year wave sausage worth useful legal winner thank yellow',
        {
          accountIndex: 1
        }
      )
    wallet.set(account.address);

    walletClient.set(createWalletClient({
      account,
      chain: avalancheFuji,
      transport: http()
    }));
}

export const wallet = writable('');

export const walletClient = writable(null);