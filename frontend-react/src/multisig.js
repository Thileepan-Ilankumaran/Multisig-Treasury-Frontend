import {ethers} from 'ethers';
import MultisigABI from './MultisigABI.js';


const contractAddress = 0xBC0132300F4F49221b9b0bFB9aB171E7db53BA00;

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const multisigContract = new ethers.Contract(
  contractAddress,
  MultisigABI,
  signer
);

export async function createProposal(_recipent,_value,_proposal){
    const tx = await multisigContract.createProposal(_recipent,_value,_proposal);
    await tx.wait();
}

}