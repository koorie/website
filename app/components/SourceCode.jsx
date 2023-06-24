import styles from "./Home.module.css";
import Header from "./Header";

export default function SourceCode() {
    return (
        <div className={styles.Home}>
            <Header></Header>
            <main className={styles.main}>
                <div>Source Code</div>
            </main>
        </div>
    )
}