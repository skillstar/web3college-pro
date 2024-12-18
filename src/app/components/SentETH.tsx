import { useSendTransaction } from "wagmi";
import { parseEther } from "viem";

export const SentETHButton = () => {
  const { data: hash, isPending, sendTransaction } = useSendTransaction();
  return (
    <div>
      <button
        onClick={() => {
          sendTransaction({
            to: "0x9629A0B683A6F66F979655F33788D7D63cF530E3",
            value: parseEther("0.001"),
          });
        }}
      >
        Send ETH to Account5
      </button>
      {hash && <div>Transaction Hash:{hash}</div>}
    </div>
  );
};
