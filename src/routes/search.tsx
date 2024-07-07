import { createFileRoute, useNavigate } from '@tanstack/react-router';

// zod 이용해 validation 및 변경하기
type ItemFilters = {
  query: string;
  hasDiscount: boolean;
  categories: Category[];
};

type Category = 'electronics' | 'clothing' | 'books' | 'toys';

export const Route = createFileRoute('/search')({
  validateSearch: (search: Record<string, unknown>): ItemFilters => {
    return {
      query: search?.query as string,
      hasDiscount: (search?.hasDiscount as boolean) ?? false,
      categories: search?.categories as Category[],
    };
  },
  component: Search,
});

function Search() {
  // 쿼리스트링
  const { query, categories, hasDiscount } = Route.useSearch();
  //?query= ?categories= ?hasDiscount=
  //컴포넌트 외부에 search Params 를 가지고 오려면,
  // const routeApi = getRotueApi('주소');
  // routeApi.useSearch()
  // const [localQuery, setLocalQuery] = useState(query);

  const navigate = useNavigate({ from: Route.fullPath });

  const updateFilters = (name: keyof ItemFilters, value: unknown) => {
    navigate({
      search: (prev) => ({ ...prev, [name]: value }),
    });
  };
  return (
    <div>
      <h1>Search</h1>
      <p>Search for items</p>
      <input
        value={query}
        onChange={(e) => updateFilters('query', e.target.value)}
      />
      <input
        type="checkbox"
        checked={hasDiscount}
        onChange={(e) => updateFilters('hasDiscount', e.target.checked)}
      />
      <select
        multiple
        value={categories}
        onChange={(e) =>
          updateFilters(
            'categories',
            Array.from(
              e.target.selectedOptions,
              (option) => option.value as Category,
            ),
          )
        }
      >
        {['electronics', 'clothing', 'books', 'toys'].map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <pre>
        {JSON.stringify(
          {
            query,
            categories,
            hasDiscount,
          },
          null,
          2,
        )}
      </pre>
    </div>
  );
}
