import { createContext } from "react";

type UserRole = "admin" | "user";

type AuthUser = {
  uid: string;
  email: string;
  role: UserRole;
};

export type AuthContextType = {
  user: AuthUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => { },
  logout: async () => { },
});
