import styles from "./Home.module.css";
import Header from "./Header";

export default function API() {
    return (
        <div className={styles.Home}>
            <Header></Header>
            <main className={styles.main}>
                <div>API</div>
            </main>
        </div>
    )
}