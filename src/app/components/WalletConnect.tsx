// components/WalletConnect.tsx
import { useAccount, useBalance, useDisconnect } from "wagmi";
import { useEffect, useState } from "react";
import { Address } from "viem";
import { ConnectButton, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import ArrowDown from "./ui/ArrowDown";
import { shortenAddress, formatBalance } from "@/utils/shortenAddress";
import CustomWalletAvatar from "./CustomWalletAvatar";
const WalletConnect = () => {
  const { address, connector, status, isConnected, chainId } = useAccount();
  const { disconnect } = useDisconnect();
  const [showWalletDetails, setShowWalletDetails] = useState(false);
  const handleMouseEnter = () => {
    setShowWalletDetails(true);
  };

  const handleMouseLeave = () => {
    setShowWalletDetails(false);
  };
  const [userAddress, setUserAddress] = useState<string>("");
  const { data: userBalance } = useBalance({ address: userAddress as Address });

  useEffect(() => {
    setUserAddress(address || "");
  }, [address]);

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <div className="relative group">
      <div className="cursor-pointer flex items-center">
        {/* Wallet Avatar or Placeholder */}
        {isConnected && address ? (
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2 relative">
            <CustomWalletAvatar address={address} size={32} />
            <div className="absolute top-0.5 right-0 w-1 h-1 bg-primary-light rounded-full animate-breathe"></div>
          </div>
        ) : (
          <ConnectButton.Custom>
            {({ account, chain, openConnectModal, mounted }) => {
              if (!mounted) {
                return null;
              }

              return (
                <button
                  onClick={openConnectModal}
                  className="text-gray-400 mr-2 px-4 py-2 group relative"
                >
                  <span className="text-gray-400 group-hover:text-primary-light transition-colors duration-200">
                    Connect Wallet
                  </span>
                  <svg
                    width="11"
                    height="8"
                    viewBox="0 0 11 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-400 group-hover:text-primary-light absolute bottom-1/2 left-full ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out translate-y-1 group-hover:-translate-x-6 -translate-x-4"
                  >
                    <path
                      d="M7.47501 7.318L6.55701 6.4L8.14101 4.816L9.041 4.312L8.951 4.096L8.14101 4.348H0.509003V3.052H8.14101L8.951 3.304L9.041 3.088L8.14101 2.584L6.55701 1L7.47501 0.0820007L10.229 2.836V4.564L7.47501 7.318Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              );
            }}
          </ConnectButton.Custom>
        )}
        {isConnected && address && (
          <ArrowDown
            className={`transition-transform duration-300 ${showWalletDetails ? "rotate-180" : ""}`}
          />
        )}
      </div>

      {/* Wallet Details Dropdown */}
      {isConnected && address && (
        <div className="absolute right-0 top-[calc(100%+0.5rem)]  shadow-md rounded-md py-4 w-48 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50">
          <div className="px-4">
            <p className="text-primary-light text-sm font-medium mb-2">
              Balance:{" "}
              {formatBalance(userBalance?.formatted, userBalance?.symbol)}
            </p>
            <p className="text-primary-light text-sm font-medium mb-2">
              Address: {shortenAddress(address)}
            </p>
            <p className="text-primary-light text-sm font-medium mb-4">
              Chain ID: {chainId}
            </p>
            <button
              onClick={handleDisconnect}
              className="bg-primary-dark text-dark-lighter text-sm w-full py-2 rounded-md hover:bg-primary-light"
            >
              Disconnect
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;
