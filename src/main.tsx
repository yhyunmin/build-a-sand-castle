// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
// import './index.css';
//
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
//
// import { StrictMode } from 'react';
// import ReactDOM from 'react-dom/client';
// import {
//   RouterProvider,
//   createRouter,
//   createRootRoute,
// } from '@tanstack/react-router';
//
// import './index.css';
// import NavigationHeader from './NavigationHeader.tsx';
// import { aboutRoute } from './About.tsx';
// import { homeRoute } from './Home.tsx';
//
// // rootRoute 의 컴포넌트
// export const rootRoute = createRootRoute({
//   component: NavigationHeader,
// });
//
// // outlet 목록
// const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);
// const router = createRouter({ routeTree });
//
// const rootElement = document.getElementById('root');
//
// if (!rootElement!.innerHTML) {
//   ReactDOM.createRoot(rootElement!).render(
//     <StrictMode>
//       <RouterProvider router={router} />
//     </StrictMode>,
//   );
// }
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createRouter,
  createRootRoute,
} from '@tanstack/react-router';

// tsr generate 가 라우트 트리를 자동 생성
import { routeTree } from './routeTree.gen.ts';
import NavigationHeader from './NavigationHeader.tsx';
import { useAuth } from './hooks/useAuth.ts';

export const rootRoute = createRootRoute({
  component: NavigationHeader,
});

// const router = createRouter({ routeTree });
// context 추가를 위한 createRouter 인자 추가
const router2 = createRouter({
  routeTree,
  // 초기 라우터
  context: {
    authentication: undefined!, // 정의되어있다라는 non-null 연산자
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router2;
  }
}

const rootElement = document.getElementById('root')!;

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  const { worker } = await import('./mocks/worker.ts');
  return worker.start();
}

enableMocking().then(() => {
  if (!rootElement.innerHTML) {
    // const { signIn, signOut, isAuthenticated } = useAuth();
    const authentication = useAuth();
    const root = ReactDOM.createRoot(rootElement);
    // root.render(<RouterProvider router={router} />);
    root.render(
      <RouterProvider router={router2} context={{ authentication }} />,
    );
  }
});

// context 활용법
// createRouter 에 초기값 Context 넣기
// RouterProvider 에 context 넣기
