import { Card } from "../components/Common/types/common.types";

export const LOCALES: string[] = ["en", "es", "pt"];
export const INFURA_GATEWAY: string = "https://thedial.infura-ipfs.io";
export const INFURA_GATEWAY_INTERNAL: string =
  "https://globaldesignernetwork.com/api/infura/";

export const NETWORKS = {
  LENS_TESTNET: {
    chainId: 37111,
    name: "Lens Network Testnet",
    rpcUrl: "https://rpc.testnet.lens.dev",
    blockExplorer: "https://block-explorer.testnet.lens.dev",
  },
  LENS_MAINNET: {
    chainId: 232,
    name: "Lens Network",
    rpcUrl: "https://rpc.lens.xyz",
    blockExplorer: "https://explorer.lens.xyz",
  },
} as const;

export type NetworkConfig = (typeof NETWORKS)[keyof typeof NETWORKS];

export const DEFAULT_NETWORK =
  process.env.NODE_ENV === "production"
    ? NETWORKS.LENS_MAINNET
    : NETWORKS.LENS_TESTNET;

export const getCurrentNetwork = (): NetworkConfig => {
  // const isMainnet = process.env.NEXT_PUBLIC_NETWORK === "mainnet";

  // isMainnet ?

  return NETWORKS.LENS_MAINNET;

  // : NETWORKS.LENS_TESTNET;
};

export const CARDS: Card[] = [
  {
    title: "GALICIA / SAL EN LOS ENCHUFES",
    imagen: "runway-balloon-room.png",
    video: "runway-balloon-room.mp4",
  },
  {
    title: "الإسكندرية / مؤشر المد المنخفض",
    imagen: "runway-disco-ball.png",
    video: "runway-disco-ball.mp4",
  },
  {
    title: "SÃO PAULO / NÍVEL DO CHÃO",
    imagen: "runway-disco-streamers.png",
    video: "runway-disco-streamers.mp4",
  },
  {
    title: "ARNHEM LAND / ONLY MEMORY",
    imagen: "runway-balloon-streamers.png",
    video: "runway-balloon-streamers.mp4",
  },
  {
    title: "???",
    imagen: "runway-balloon-party.png",
    video: "runway-balloon-party.mp4",
  },
  {
    title: "???",
    imagen: "runway-disco.png",
    video: "runway-disco.mp4",
  },
];
