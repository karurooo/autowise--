import { useEffect, useState } from 'react';
import { useUserStore } from '~/store/users';
import { useRouter } from 'expo-router';
import supabase from '~/utils/supabase';

export const useAuth = () => {
  const router = useRouter();
  const { user, setUser } = useUserStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session?.user) {
        setUser(data.session.user); // Set Zustand state
      } else {
        router.replace('/signin'); // Redirect if no session found
      }
      setIsLoading(false); // Set loading state to false after session check
    };

    checkSession();
  }, []); // Empty dependency array ensures it runs only once

  return { user, isLoading };
};
