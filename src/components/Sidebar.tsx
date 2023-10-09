import Link from "next/link";
import styles from '@/styles/Sidebar.module.css';

export function Sidebar() {
    return (
        <ul className={styles.menu}>
            <li>
                <p><Link href="/breeds?limit=2">Breeds</Link></p>
            </li>
            <li>
                <p><Link href="/facts">Facts</Link></p>
            </li>
        </ul>
    );
}