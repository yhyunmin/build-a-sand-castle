export const useAuth = () => {
  const signIn = () => {
    localStorage.setItem('isAuthenticated', 'true');
  };

  const signOut = () => {
    localStorage.removeItem('isAuthenticated');
  };

  const isLogged = () => localStorage.getItem('isAuthenticated') === 'true';

  return { signIn, signOut, isLogged };
};

export type AuthContext = ReturnType<typeof useAuth>;
//{ signIn, signOut, isLogged };

//ReturnType<T> T함수의 반환 타입을 구성된 타입으로 바꿈
