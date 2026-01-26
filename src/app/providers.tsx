"use client";
import { createContext, useState } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { metaMask } from "wagmi/connectors";
import { ConnectKitProvider } from "connectkit";
import { chains } from "@lens-chain/sdk/viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getCurrentNetwork } from "./lib/constants";
import { ErrorData, SuccessData } from "./components/Common/types/common.types";

const queryClient = new QueryClient();
const currentNetwork = getCurrentNetwork();

export const ModalContext = createContext<
  | {
      showSuccess: (message: string, txHash?: string) => void;
      showError: (message: string) => void;
      hideSuccess: () => void;
      hideError: () => void;
      successData: SuccessData | null;
      errorData: ErrorData | null;
    }
  | undefined
>(undefined);

export const config = createConfig({
  chains: [chains.mainnet],
  connectors: [metaMask()],
  transports: {
    [currentNetwork.chainId]: http(),
  },
  ssr: true,
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const [successData, setSuccessData] = useState<SuccessData | null>(null);
  const [errorData, setErrorData] = useState<ErrorData | null>(null);

  const showSuccess = (message: string, txHash?: string) => {
    setSuccessData({ message, txHash });
  };

  const showError = (message: string) => {
    setErrorData({ message });
  };

  const hideSuccess = () => {
    setSuccessData(null);
  };

  const hideError = () => {
    setErrorData(null);
  };

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          customTheme={{
            "--ck-font-family": '"macsans", cursive',
          }}
        >
          <ModalContext.Provider
            value={{
              showSuccess,
              showError,
              hideSuccess,
              hideError,
              successData,
              errorData,
            }}
          >
            {children}
          </ModalContext.Provider>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
