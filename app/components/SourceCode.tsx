import { Component } from 'solid-js'
import styles from "./css/Home.module.css";
import Header from "./Header";

const SourceCode: Component = () => {
    return (
        <div class={styles.Home}>
            <Header></Header>
            <main class={styles.main}>
                <div>Source Code</div>
            </main>
        </div>
    )
}

export default SourceCode
