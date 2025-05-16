import {StateCreator} from 'zustand';
import { CombinedState } from '../Store';

export interface AuthState {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

export const createAuthSlice: StateCreator<
  CombinedState,
  [],
  [],
  AuthState
> = set => ({
  token: null,
  login: token => set({token}),
  logout: () => set({token: null}),
});
