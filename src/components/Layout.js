import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    gap: 40,
    justifyContent: 'center',
  },
  item: {
    fontWeight: 700,
    fontSize: 26,
    color: '#feb236',
    textDecoration: 'none',
  },
};

export const Layout = () => {
  return (
    <div>
      <header>
        <nav style={styles.container}>
          <NavLink style={styles.item} to="/">
            Home
          </NavLink>
          <NavLink style={styles.item} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {/* <footer>Footer</footer> */}
    </div>
  );
};
