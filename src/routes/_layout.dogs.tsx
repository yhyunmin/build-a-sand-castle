import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/dogs')({
  component: () => <div>Hello /_layout/dogs!</div>,
});
// 엔드포인트는 /dogs 이다.
// _layout.tsx 가 렌더링되고 Outlet을 통해 하위컴포넌트를 이 파일에서 작업할 수 있다.
// _layout.tsx < 상위컴포넌트
// _layout.dogs.tsx < Outlet 컴포넌트
