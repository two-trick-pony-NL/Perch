import { supabase } from '@/lib/supabase';
import React, { createContext, useContext, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { router } from 'expo-router';

type User = {
  // Define the structure of your user object (for example, with a `name` property)
  name?: string;
};

type AuthContextType = {
  user: User;
  setUser: (user: User) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: {},
  setUser: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({});
  const [session, setSession] = useState<Session | null>(null);

  const getUser = async (session: Session | null) => {
    if (session) {
      // Simulate a call to fetch user from the database and set the user
      console.log("GETTING USER");
      setUser({ name: 'John Doe' }); // Example, replace with real user fetch
      router.replace('/(tabs)');
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.replace('/(auth)'); // Use replace to prevent going back
  };

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      getUser(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      getUser(session);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
