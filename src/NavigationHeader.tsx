import { Link, Outlet } from '@tanstack/react-router';

const NavigationHeader = () => {
  return (
    <>
      <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <hr />
      <Outlet />
    </>
  );
};

export default NavigationHeader;
