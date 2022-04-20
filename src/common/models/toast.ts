export enum ToastTypes {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

export interface Toast {
  type: `${ToastTypes}`;
  message: string;
}
