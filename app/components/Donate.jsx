import styles from "./Home.module.css";
import Header from "./Header";

export default function Donate() {
    return (
        <div className={styles.Home}>
            <Header></Header>
            <main className={styles.main}>
                <div>Donate</div>
            </main>
        </div>
    )
}