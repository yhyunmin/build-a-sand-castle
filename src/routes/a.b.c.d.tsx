import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/a/b/c/d')({
  component: () => <div>Hello /a/b/c/d!</div>,
});

// 도트를 이용해서 폴터 라우팅이아닌 flat 하게 중첩라이팅을 구성할 수 있다.
