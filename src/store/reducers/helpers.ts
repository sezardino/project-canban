import { getErrorMessage } from '@/common';

type DefaultState = { isLoading: boolean; error: string | null };

export const pendingAction = (state: DefaultState): void => {
  state.isLoading = true;
  state.error = null;
};

export const rejectedAction = (state: DefaultState, action: any): void => {
  state.isLoading = false;
  state.error = getErrorMessage(action.payload);
};

export const fulfilledAction = (state: DefaultState): void => {
  state.isLoading = false;
  state.error = null;
};
