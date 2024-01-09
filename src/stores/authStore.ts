// authStore.ts

import { create, State, SetState } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  user: {
    email: string | null;
    id: number | null;
  };
}

interface AuthActions {
  login: (accessToken: string, user: { email: string; id: number }) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState & AuthActions>((set: SetState<AuthState & AuthActions>) => ({
  isLoggedIn: false,
  token: null,
  user: {
    email: null,
    id: null,
  },
  login: (accessToken, user) => {
    set({ isLoggedIn: true, token: accessToken, user });
    localStorage.setItem('token', JSON.stringify(accessToken));
    localStorage.setItem('user', JSON.stringify(user));
  },
  logout: () => {
    set({ isLoggedIn: false, token: null, user: { email: null, id: null } });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
}));

export default useAuthStore;
