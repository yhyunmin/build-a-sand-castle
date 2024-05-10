import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './main.tsx';

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

function About() {
  return (
    <div className="p-4 max-w-4xl mx-auto dark:bg-gray-800 dark:text-white">
      <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
        This is About
      </h3>
      <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
        the About It is.
      </p>
    </div>
  );
}
