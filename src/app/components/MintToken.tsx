import {
  useAccount,
  useWriteContract,
  useBalance,
  useSimulateContract,
} from "wagmi";
//合约地址
const tokenAddress = "0xf3e8A51975180e3223e976569cbD222661756715";
import tokenABI from "../abi/MetaCoin.json";
export const TokenButton = () => {
  const { address: useAddress } = useAccount();

  const { data: tokenBlance } = useBalance({
    address: useAddress,
    token: tokenAddress,
  });
  const { data: contractData, isLoading } = useSimulateContract({
    address: tokenAddress,
    abi: tokenABI.abi,
    functionName: "mint",
    args: [
      "0x9629A0B683A6F66F979655F33788D7D63cF530E3",
      "233000000000000000000",
    ],
  });

  const { data: hash, isSuccess, writeContract } = useWriteContract();
  //
  const mintFun = async () => {
    if (useAddress) {
      const result = await writeContract(contractData!.request);
    }
    if (isSuccess) {
      console.log("Mint Successful");
    }
  };
  return (
    <div>
      token balance : {tokenBlance?.formatted} {tokenBlance?.symbol}
      <br />
      <button onClick={mintFun}>Mint</button>
      {hash && <div>Transaction Hash:{hash}</div>}
    </div>
  );
};
