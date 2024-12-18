"use client";
import { Address } from "viem";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useBalance,
  useSwitchChain,
} from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState, useEffect } from "react";
import { SentETHButton } from "./components/SentETH";
import { TokenButton } from "./components/MintToken";

function App() {
  const account = useAccount();
  const [userAddress, setUserAddress] = useState("");
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  const { chains, switchChain } = useSwitchChain();

  //查询余额，需要钱包地址
  const { data: userBalance } = useBalance({
    address: userAddress as Address,
  });
  //监控钱包账户
  useEffect(() => {
    if (account && account.address) {
      setUserAddress(account.address);
    } else {
      setUserAddress("");
    }
  }, [account]);
  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
          <br />
          balance: {userBalance?.formatted}
          {userBalance?.symbol}
        </div>

        {account.status === "connected" && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>
      <div>
        <ConnectButton></ConnectButton>
      </div>

      <div>
        {chains.map((chain) => (
          <button
            key={chain.id}
            onClick={() => switchChain({ chainId: chain.id })}
          >
            {chain.name}
          </button>
        ))}
      </div>

      <hr></hr>
      <SentETHButton></SentETHButton>
      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
      <hr />
      <TokenButton></TokenButton>
    </>
  );
}

export default App;
