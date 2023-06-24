import styles from "./Home.module.css"
import Header from "./Header"
import logo from "../logo.svg"

export default function Home() {
    return (
        <div className={styles.Home}>
            <Header></Header>
            <main className={styles.main}>
                <img src={logo} className={styles.logo} alt="logo"/>
                <p className={styles.text}>
                    <a
                        className={styles.text}
                        href="https://github.com/koorie"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <code>Koorie is quick as Dreaming</code>
                        <div>hello world</div>
                    </a>
                </p>

            </main>
        </div>
    )
}
