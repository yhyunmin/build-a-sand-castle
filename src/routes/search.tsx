import { createFileRoute } from '@tanstack/react-router';

type ItemFilters = {
  query: string;
  hasDiscount: boolean;
  categories: Category[];
};

type Category = 'electornics' | 'clothing' | 'books' | 'toys';

export const Route = createFileRoute('/search')({
  validateSearch: (search: Record<string,unknown>) =>{
    return {},
  }
  component: () => <div>Hello /search!</div>,
});
