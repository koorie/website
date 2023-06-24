import styles from "./Home.module.css";
import Header from "./Header";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
    return (
        <div className={styles.Home}>
            <Header></Header>
            <main className={styles.main}>
                <HttpStatusCode code={404} />
                <h1>Page not found</h1>
            </main>
        </div>
    )
}