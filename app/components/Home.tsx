import { Component } from 'solid-js'
import styles from "./css/Home.module.css"
import Header from "./Header"
import logo from "../logo.svg"

const Home: Component = () => {
    return (
        <div class={styles.Home}>
            <Header></Header>
            <main class={styles.main}>
                <img src={logo} class={styles.logo} alt="logo"/>
                <p class={styles.text}>
                    <a
                        class={styles.text}
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
 export default Home
