import styles from './css/Header.module.css'
import type { Component } from 'solid-js';

const Header: Component = () =>{

    return <header class={styles.grid}>
        <span><a class={styles.header_link} href={"/"}> home</a></span>
        <span><a class={styles.header_link} href={"api.html"}> API</a></span>
        <span><a class={styles.header_link} href={"source-code.html"}>source code</a></span>
        <span><a class={styles.header_link} href={"donate.html"}>donate</a></span>
    </header>
}

export default Header
