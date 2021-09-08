/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface DeevyL1MinterInterface extends ethers.utils.Interface {
  functions: {
    "ARBSYS()": FunctionFragment;
    "claimed(address)": FunctionFragment;
    "deevy()": FunctionFragment;
    "l1Target()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setL1Target(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "warpBag(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "ARBSYS", values?: undefined): string;
  encodeFunctionData(functionFragment: "claimed", values: [string]): string;
  encodeFunctionData(functionFragment: "deevy", values?: undefined): string;
  encodeFunctionData(functionFragment: "l1Target", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setL1Target", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "warpBag",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "ARBSYS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deevy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "l1Target", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setL1Target",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "warpBag", data: BytesLike): Result;

  events: {
    "L2ToL1TxCreated(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "L2ToL1TxCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class DeevyL1Minter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DeevyL1MinterInterface;

  functions: {
    ARBSYS(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "ARBSYS()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    claimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "claimed(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    deevy(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "deevy()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    l1Target(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "l1Target()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setL1Target(
      newL1Target: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setL1Target(address)"(
      newL1Target: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    warpBag(
      account: string,
      lootId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "warpBag(address,uint256)"(
      account: string,
      lootId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  ARBSYS(overrides?: CallOverrides): Promise<string>;

  "ARBSYS()"(overrides?: CallOverrides): Promise<string>;

  claimed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "claimed(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  deevy(overrides?: CallOverrides): Promise<string>;

  "deevy()"(overrides?: CallOverrides): Promise<string>;

  l1Target(overrides?: CallOverrides): Promise<string>;

  "l1Target()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setL1Target(
    newL1Target: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setL1Target(address)"(
    newL1Target: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  warpBag(
    account: string,
    lootId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "warpBag(address,uint256)"(
    account: string,
    lootId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    ARBSYS(overrides?: CallOverrides): Promise<string>;

    "ARBSYS()"(overrides?: CallOverrides): Promise<string>;

    claimed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "claimed(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    deevy(overrides?: CallOverrides): Promise<string>;

    "deevy()"(overrides?: CallOverrides): Promise<string>;

    l1Target(overrides?: CallOverrides): Promise<string>;

    "l1Target()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setL1Target(newL1Target: string, overrides?: CallOverrides): Promise<void>;

    "setL1Target(address)"(
      newL1Target: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    warpBag(
      account: string,
      lootId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "warpBag(address,uint256)"(
      account: string,
      lootId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    L2ToL1TxCreated(withdrawalId: BigNumberish | null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    ARBSYS(overrides?: CallOverrides): Promise<BigNumber>;

    "ARBSYS()"(overrides?: CallOverrides): Promise<BigNumber>;

    claimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "claimed(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deevy(overrides?: CallOverrides): Promise<BigNumber>;

    "deevy()"(overrides?: CallOverrides): Promise<BigNumber>;

    l1Target(overrides?: CallOverrides): Promise<BigNumber>;

    "l1Target()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setL1Target(newL1Target: string, overrides?: Overrides): Promise<BigNumber>;

    "setL1Target(address)"(
      newL1Target: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    warpBag(
      account: string,
      lootId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "warpBag(address,uint256)"(
      account: string,
      lootId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ARBSYS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ARBSYS()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "claimed(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deevy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "deevy()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l1Target(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "l1Target()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setL1Target(
      newL1Target: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setL1Target(address)"(
      newL1Target: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    warpBag(
      account: string,
      lootId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "warpBag(address,uint256)"(
      account: string,
      lootId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
