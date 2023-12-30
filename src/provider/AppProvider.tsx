import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';

// Import your reducers and types
import UserReducer, { UserAction } from '@/reduces/UserReducer';
// Import other reducers if needed
// Define the types for the user state
interface UserStateType {
  accessToken: string | null;
  user: {
    email: string;
    id: number;
  } | null;
}

// Define the types for the context
interface AppContextType {
  userState: UserStateType;
  dispatchUser: Dispatch<UserAction>;
}

// Create a default value for the context
const AppContextDefaultValue: AppContextType = {
  userState: {
    accessToken: null,
    user: null,
  },
  dispatchUser: () => {}, // Provide a no-op function as a placeholder
};

// Initialize the initial state for each reducer
const initialUserState: UserStateType = {
  accessToken: null,
  user: null,
};

// Create the AppContext
export const AppContext = createContext<AppContextType>(AppContextDefaultValue);

// Create the AppProvider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  // Use useReducer to initialize each reducer state and dispatch function
  const [userState, dispatchUser] = useReducer(
    UserReducer as React.Reducer<UserStateType, UserAction>,
    initialUserState,
  );

  // Create the context value
  const contextValue: AppContextType = {
    userState,
    dispatchUser,
  };

  // Provide the context value to the children components
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
