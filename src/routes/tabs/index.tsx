import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/tabs/')({
  component: Main,
});

function Main() {
  //TODO nested routes 를 이용해서 layout 에 nav 를 추가 할 예정
  //TODO main 에서 input , select 추가 하여 확인누르기
  //TODO tabs1 에서 만들어진 input 과 select을 reactHookform 과 zod 이용해서 validation 및 에러 핸들링하기
  return (
    <>
      <Outlet />
    </>
  );
}
