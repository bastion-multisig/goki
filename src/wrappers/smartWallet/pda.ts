import { utils } from "@project-serum/anchor";
import { u64 } from "@saberhq/token-utils";
import { PublicKey } from "@solana/web3.js";

import { GOKI_ADDRESSES } from "../../constants";

export const findSmartWallet = async (
  base: PublicKey
): Promise<[PublicKey, number]> => {
  return await PublicKey.findProgramAddress(
    [utils.bytes.utf8.encode("GokiSmartWallet"), base.toBuffer()],
    GOKI_ADDRESSES.SmartWallet
  );
};

export const findTransactionAddress = async (
  smartWallet: PublicKey,
  index: number
): Promise<[PublicKey, number]> => {
  return await PublicKey.findProgramAddress(
    [
      utils.bytes.utf8.encode("GokiTransaction"),
      smartWallet.toBuffer(),
      new u64(index).toBuffer(),
    ],
    GOKI_ADDRESSES.SmartWallet
  );
};

/**
 * Finds a derived address of a Smart Wallet.
 * @param smartWallet
 * @param index
 * @returns
 */
export const findWalletDerivedAddress = async (
  smartWallet: PublicKey,
  index: number
): Promise<[PublicKey, number]> => {
  return await PublicKey.findProgramAddress(
    [
      utils.bytes.utf8.encode("GokiSmartWalletDerived"),
      smartWallet.toBuffer(),
      new u64(index).toBuffer(),
    ],
    GOKI_ADDRESSES.SmartWallet
  );
};

/**
 * Finds an Owner Invoker address of a Smart Wallet.
 * @param smartWallet
 * @param index
 * @returns
 */
export const findOwnerInvokerAddress = async (
  smartWallet: PublicKey,
  index: number
): Promise<[PublicKey, number]> => {
  return await PublicKey.findProgramAddress(
    [
      utils.bytes.utf8.encode("GokiSmartWalletOwnerInvoker"),
      smartWallet.toBuffer(),
      new u64(index).toBuffer(),
    ],
    GOKI_ADDRESSES.SmartWallet
  );
};

/**
 * Finds the subaccount info address of a subaccount of a smart wallet.
 * @param smartWallet
 * @param index
 * @returns
 */
export const findSubaccountInfoAddress = async (
  subaccount: PublicKey
): Promise<[PublicKey, number]> => {
  return await PublicKey.findProgramAddress(
    [utils.bytes.utf8.encode("GokiSubaccountInfo"), subaccount.toBuffer()],
    GOKI_ADDRESSES.SmartWallet
  );
};
