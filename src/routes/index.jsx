// "/" 의 페이지가 될것
// __route 는 기본적으로 네비게이션을 렌더링 함 ( 다른 모든 페이지를 둘러싼 wrapper)

import { createFileRoute, Link } from '@tanstack/react-router'; // 파일라우팅을 위한 기본 import

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <main>
      <h2>Welcome</h2>
      <Link to={'/about'}>Go to About</Link>
      <Link style={{ marginLeft: '10px' }} to={'/settings'}>
        Go to Settings
      </Link>
      <Link
        style={{ marginLeft: '10px' }}
        to={'/blog/$blogId'}
        params={{
          blogId: 3,
        }}
      >
        Go to Blog 3
      </Link>
    </main>
  );
}
