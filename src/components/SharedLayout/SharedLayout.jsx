import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Container from "components/Container/Container";
import Loader from "components/Loader/Loader";
import styles from './SharedLayout.module.css';

const SharedLayout = () => {
    return (
        <>
            <header className={styles.Header}>
                <Container>
                    <nav>
                    <ul className={styles.NavList}>
                        <li>
                            <NavLink to="/" className={styles.NavLink}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies" className={styles.NavLink}>Movies</NavLink>
                        </li>
                    </ul>
                </nav>
                </Container>
            </header>
            <main>
                <Container>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </Container>
            </main>
        </>
       
    )
}

export default SharedLayout;