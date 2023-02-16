import { createContext } from "react";
import { User } from "../../@types/User";

export type AuthContextType = {
  user: User | null;
  singin: (email: string, password: string) => Promise<Boolean>;
  singout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
