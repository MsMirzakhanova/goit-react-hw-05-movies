import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./Layout.styled";
import { Suspense } from "react";

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
    </Container>
  );
};