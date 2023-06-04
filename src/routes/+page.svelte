
<script lang="ts">
	
	import Auth from '$lib/Auth.svelte';
	import ContractInter from '$lib/ContractInter.svelte';
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

</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" >
<link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap" rel="stylesheet">

<main class="flex flex-col p-10 w-screen h-screen items-center gap-5 font-serif">
	<h1 class="text-5xl text-black font-Mulish">Safwan Token UI</h1>

	<section class="flex flex-col p-10 items-start gap-5 border-2 rounded-xl">
		<h1 class="text-2xl text-black font-bold">Wallet and Provider</h1>
		<h2 class="text-xl text-black hover:text-orange-200 font-Mulish font-bold">$connected: {$connected}</h2>
		<h2 class="text-xl text-black font-semibold">$walletAddress: {$walletAddress}</h2>
		<h2 class="text-xl text-black font-semibold">
			$accountChainId: {JSON.stringify($accountChainId)}
		</h2>
		
		<Auth></Auth>
		<ContractInter></ContractInter>


		<button
			on:click={connectWalletConnect}
			class="p-3 rounded-xl text-xl bg-black text-white font-semibold hover:scale-[1.05] transition transition-200"
			>Connect via WalletConnect</button
		>
		<button
			on:click={disconnect}
			class="p-3 rounded-xl text-xl bg-black text-white font-semibold hover:scale-[1.05] transition transition-200"
			>Disconnect</button
		>
	</section>
	<section class="flex flex-col p-10 items-start gap-5 border-2 rounded-xl">
		<h1 class="text-2xl text-black font-bold">Sync contract state on block, event or interval</h1>
		<p class="text-md text-black font-semibold">
			Set In '$lib/globalState.ts', will load as long as a store is used from '$lib/stores/state.ts'
			or you import the globalState in the root of your project with 'import "$lib/globalState";'
		</p>
		<h2 class="text-xl text-black font-semibold">
			$balanceOnBlock: {formatEther($balanceOnBlock)} ETH
		</h2>
	</section>
</main>
