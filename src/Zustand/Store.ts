import {create} from 'zustand';
import {createAuthSlice, AuthState} from './Auth/AuthSlice';
import {createNewsSlice, NewsState} from './News/NewsSlice';

export type CombinedState = AuthState & NewsState;

export const useAppStore = create<CombinedState>()((...a) => ({
  ...createAuthSlice(...a),
  ...createNewsSlice(...a),
}));
