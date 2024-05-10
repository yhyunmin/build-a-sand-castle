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

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createRouter,
  createRootRoute,
} from '@tanstack/react-router';

import './index.css';
import NavigationHeader from './NavigationHeader.tsx';
import { aboutRoute } from './About.tsx';
import { homeRoute } from './Home.tsx';

// rootRoute 의 컴포넌트
export const rootRoute = createRootRoute({
  component: NavigationHeader,
});

// outlet 목록
const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);
const router = createRouter({ routeTree });

const rootElement = document.getElementById('root');

if (!rootElement!.innerHTML) {
  ReactDOM.createRoot(rootElement!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
