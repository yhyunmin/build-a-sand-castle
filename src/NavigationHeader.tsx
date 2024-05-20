import { Link, Outlet } from '@tanstack/react-router';

const NavigationHeader = () => {
  return (
    <>
      <div>
        <div>
          <Link to="/dayjs">Dayjs</Link>
          <Link to="/aggrid">AG-Grid</Link>
        </div>
      </div>
      <hr />
      <Outlet />
    </>
  );
};

export default NavigationHeader;
