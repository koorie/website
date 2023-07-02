import { Component } from 'solid-js'
import styles from "./css/Home.module.css";
import Header from "./Header";
import { HttpStatusCode } from "solid-start/server";

const NotFound: Component = () => {
    return (
      <div class={styles.Home}>
        <Header></Header>
        <main class={styles.main}>
          <HttpStatusCode code={404} />
          <h1>Page not found</h1>
        </main>
      </div>
    )
}
export default NotFound
