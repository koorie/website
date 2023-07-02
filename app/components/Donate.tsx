import { Component } from 'solid-js'
import styles from "./css/Home.module.css";
import Header from "./Header";

const Donate: Component = () => {
  return (
    <div class={styles.Home}>
      <Header></Header>
      <main class={styles.main}>
        <div>Donate</div>
      </main>
    </div>
)
}

export default Donate
