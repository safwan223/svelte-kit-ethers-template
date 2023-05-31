<script lang="ts">
	//@ts-nocheck
	import {
		accountChainId,
		connected,
		connectWalletConnect,
		disconnect,
		walletAddress
	} from '$lib/stores/provider';
	import { balanceOnBlock } from '$lib/stores/state';
	import { ethers } from 'ethers';
	import { formatEther } from 'ethers/lib/utils';


	async function connectMetamask(){
		// A Web3Provider wraps a standard Web3 provider, which is
		// what MetaMask injects as window.ethereum into each page
		const provider = new ethers.providers.Web3Provider(window.ethereum)

		// MetaMask requires requesting permission to connect users accounts
		const accounts = await provider.send("eth_requestAccounts", []);

		walletAddress.set(accounts[0]);

		// The MetaMask plugin also allows signing transactions to
		// send ether and pay to change state within the blockchain.
		// For this, you need the account signer...
		const signer = provider.getSigner()
		
			
	}

</script>

<button on:click={connectMetamask} 
        class="p-3 rounded-xl text-xl bg-black text-white font-semibold hover:scale-[1.05] transition transition-200"
 >Connect via MetaMask</button>