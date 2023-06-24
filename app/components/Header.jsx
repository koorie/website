import styles from './Header.module.css'
export default function Header(){

    return <header class={styles.grid}>
        <span><a class={styles.header_link} href={"/"}> home</a></span>
        <span><a class={styles.header_link} href={"api.html"}> API</a></span>
        <span><a class={styles.header_link} href={"source-code.html"}>source code</a></span>
        <span><a class={styles.header_link} href={"donate.html"}>donate</a></span>
    </header>
}