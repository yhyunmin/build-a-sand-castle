import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/profile')({
  beforeLoad: ({ context }) => {
    // const {} = useAuth(); beforeLoad 에서는 훅을 사용할 수없다 -> main.tsx
    const { isLogged } = context.authentication;
    if (!isLogged()) {
      throw redirect({
        to: '/login',
      });
    }
  }, // 라우트가 로드 되기전에 호출된 함수를 지정 할 수있음 특히 인증 관련으로 리다이렉트로 좋음
  //loader는 beforeloader를 실행 후 작동. 데이터를 반환하고 컴포넌트의 props로 전달됨.
  component: () => <div>Hello /profile!</div>,
});
