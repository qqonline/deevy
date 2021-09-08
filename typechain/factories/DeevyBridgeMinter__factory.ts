/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DeevyBridgeMinter } from "../DeevyBridgeMinter";

export class DeevyBridgeMinter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    deevyAddress: string,
    l1TargetAddress: string,
    overrides?: Overrides
  ): Promise<DeevyBridgeMinter> {
    return super.deploy(
      deevyAddress,
      l1TargetAddress,
      overrides || {}
    ) as Promise<DeevyBridgeMinter>;
  }
  getDeployTransaction(
    deevyAddress: string,
    l1TargetAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      deevyAddress,
      l1TargetAddress,
      overrides || {}
    );
  }
  attach(address: string): DeevyBridgeMinter {
    return super.attach(address) as DeevyBridgeMinter;
  }
  connect(signer: Signer): DeevyBridgeMinter__factory {
    return super.connect(signer) as DeevyBridgeMinter__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeevyBridgeMinter {
    return new Contract(address, _abi, signerOrProvider) as DeevyBridgeMinter;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "deevyAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "l1TargetAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "withdrawalId",
        type: "uint256",
      },
    ],
    name: "L2ToL1TxCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "ARBSYS",
    outputs: [
      {
        internalType: "contract ArbSys",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x77c7fc17",
        type: "bytes32",
      },
    ],
    name: "c_0x77c7fc17",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "claimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deevy",
    outputs: [
      {
        internalType: "contract IDeevy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "l1Target",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newL1Target",
        type: "address",
      },
    ],
    name: "setL1Target",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "lootId",
        type: "uint256",
      },
    ],
    name: "warpBag",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610ea0380380610ea08339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050600061005e61027f60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35061012e7f64abcc4d7b698a1e68ae95f3392de659e64b7d9ea5db50ccc23568a0c2e7edea60001b61028760201b60201c565b6101607f9b7f7ba97187c41fad27d5afa22501230c8a071b3a4f7cfba1bf50a8c517329060001b61028760201b60201c565b6101927f51700f58414d4a6382c690399514da49609fedbec83be831d222763cde784b9360001b61028760201b60201c565b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102057f56aca3ec9c839b181ab990265d2a0867054b281bde497f10a4cea482d6c1439a60001b61028760201b60201c565b6102377f2ffcfe5a8cbc37a35dc69ecd9f22b03eb43f1aecc658d62aa5a5306bb68629d860001b61028760201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505061028a565b600033905090565b50565b610c07806102996000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063bf0a12cf11610066578063bf0a12cf14610197578063c884ef83146101cb578063c8b9ed4314610225578063db5780b414610253578063f2fde38b146102975761009e565b8063228f6976146100a357806350d97bc6146100f15780635325e4a614610125578063715018a6146101595780638da5cb5b14610163575b600080fd5b6100ef600480360360408110156100b957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506102db565b005b6100f9610589565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61012d6105af565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101616105d5565b005b61016b610742565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61019f61076b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61020d600480360360208110156101e157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610770565b60405180821515815260200191505060405180910390f35b6102516004803603602081101561023b57600080fd5b8101908080359060200190929190505050610790565b005b6102956004803603602081101561026957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610793565b005b6102d9600480360360208110156102ad57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061090a565b005b6103077fafa7a499e53944dd1a07b6a016230e4f71ea233c3490b47d84bf2f370f83a31b60001b610790565b6103337f3a3c49eea8dd4ded283c89027b3d92d8c73ab19e17d3ed7f0ff55a2811a8b76460001b610790565b61035f7f4fce72b7f6a684b24b9a49d28a9933d2d40f3e357bfeb4614e03f89c4b8f67a160001b610790565b61038b7f9eec62ded6f88201116f8ad4dfc27b972398188e6069fc6190ed6259b29edb3a60001b610790565b6103b6600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610afc565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610456576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f494e56414c49445f4c315f54415247455400000000000000000000000000000081525060200191505060405180910390fd5b6104827f5ff0b22390d91cb12c4f6de48478711938ce5abc88ba0fe72a1d84b79c690d7660001b610790565b6104ae7fca2ea09f7ed6217d1f064ec4676d128dbe596a3f33b9143d0ca7a8587d936c5560001b610790565b6104da7f028d8a1bd59eccafcd857c64c74e0703b02972fab210606069ec2e43cf9ab4fc60001b610790565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302ae662583836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15801561056d57600080fd5b505af1158015610581573d6000803e3d6000fd5b505050505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6105dd610ba0565b73ffffffffffffffffffffffffffffffffffffffff166105fb610742565b73ffffffffffffffffffffffffffffffffffffffff1614610684576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606481565b60036020528060005260406000206000915054906101000a900460ff1681565b50565b61079b610ba0565b73ffffffffffffffffffffffffffffffffffffffff166107b9610742565b73ffffffffffffffffffffffffffffffffffffffff1614610842576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b61086e7f1ec0d91496b953d9a28d6ae63c0464eb06ae252e86f9b43d61bd1b8370e0c38560001b610790565b61089a7f6ca0d467f802ff38552d7536bd7071d541a8dc546b4efaea6d2f1d6bc632813460001b610790565b6108c67fca4517096a542a8069c8c96f54261bdff44383c5ba4308616ee82f46649f8b4860001b610790565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610912610ba0565b73ffffffffffffffffffffffffffffffffffffffff16610930610742565b73ffffffffffffffffffffffffffffffffffffffff16146109b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a3f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610bac6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000610b2a7f53516ea12a2992f518da9e16a4fc1f7ac8dcd539ff713e7798e572cafa5c5d1c60001b610ba8565b610b567f2e72e33919d986d4a05c197f2ff68ee9c3f3ff8451f06a3fcf0e739ec302f21360001b610ba8565b610b827f931e63bb16f4999656c9856adea569e476c85821606e9472baef574e1129593160001b610ba8565b73111100000000000000000000000000000000111182019050919050565b600033905090565b5056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a26469706673582212200807809fa0047412781db6c7f85eed00998194b66787d546ed5fe821896b1c2c64736f6c634300060c0033";