import { createFileRoute, useRouter } from '@tanstack/react-router';
import { isAuthenticated, signIn, signOut } from '../utils/auth.ts';

export const Route = createFileRoute('/login')({
  component: Login,
});

function Login() {
  const router = useRouter();

  return (
    <>
      <h2>log - in</h2>
      {isAuthenticated() ? (
        <>
          <p>Hello user</p>
          <button
            onClick={async () => {
              signOut();
              router.invalidate(); // ?
            }}
          >
            로그아웃
          </button>
        </>
      ) : (
        <>
          <button
            onClick={async () => {
              signIn();
              router.invalidate(); //?
            }}
          >
            로그인
          </button>
        </>
      )}
    </>
  );
}
