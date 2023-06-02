import { Interface } from 'ethers/lib/utils';

import multicallABI from '$lib/abis/Multicall2.json';

export { multicallABI }

export const IMulticall = new Interface(multicallABI);

export const SFNTKNADDR = '0xA73F698846A43c6a87f7Aba3506eE7783f3AfeC2';
