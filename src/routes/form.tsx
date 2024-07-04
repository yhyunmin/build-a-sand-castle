import {
  createFileRoute,
  FileRoutesByPath,
  Link,
  Outlet,
} from '@tanstack/react-router';

export const Route = createFileRoute('/form')({
  component: Form,
});

type LinkType = {
  to: FileRoutesByPath[keyof FileRoutesByPath]['fullPath'];
  title: string;
};
type LinkList = LinkType[];

const LinkList: LinkList = [
  {
    to: '/form/build',
    title: 'build',
  },
  {
    to: '/form/edit/',
    title: 'edit',
  },
  {
    to: '/form/list/',
    title: 'list',
  },
];
const activeProps = {
  style: {
    color: 'red',
  },
};
function Form() {
  return (
    <>
      <nav>
        <Link to="/form/" style={{ margin: '10px' }}>
          Main
        </Link>
        {LinkList.map((link, index) => (
          <Link
            to={link.to}
            key={index}
            activeProps={activeProps}
            style={{ margin: '10px' }}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <Outlet />
    </>
  );
}
