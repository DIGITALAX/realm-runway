export interface SuccessData {
  message: string;
  txHash?: string;
}

export interface ErrorData {
  message: string;
}

export type Card = {
  title: string;
  imagen: string;
  video: string;
};
