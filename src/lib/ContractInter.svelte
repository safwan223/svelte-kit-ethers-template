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
	import SFNToken from '$lib/abis/SFNToken.json'
	import {SFNTKNADDR} from '$lib/state/contracts'




	
	async function sendMoney(){
        
		// A Web3Provider wraps a standard Web3 provider, which is
		// what MetaMask injects as window.ethereum into each page
		const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()

		const contract = new ethers.Contract(SFNTKNADDR, SFNToken, signer)
        let nick = '0x2810FFaE7480a3D4Fea16380Aa2473340C25bF31';
        let tx = await contract.transfer(nick, ethers.utils.parseEther("1.0"));
		

		walletAddress.set(accounts[0]);

		// The MetaMask plugin also allows signing transactions to
		// send ether and pay to change state within the blockchain.
		// For this, you need the account signer...
		
		
			
	}

</script>

        <button on:click={sendMoney}
			class="p-3 rounded-xl text-xl bg-black text-white font-semibold hover:scale-[1.05] transition transition-200"
        >Send money to lover nick</button>
