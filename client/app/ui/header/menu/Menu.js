
import Link from 'next/link';
import styles from './menu.module.scss'


function Menu() {
   return (
      <nav className={styles.menu}>
         <ul className={styles.list}>
            <li className={styles.item_hover}>
               <Link href='/' className={styles.link}>Головна</Link>
            </li>
            <li className={styles.item_hover}>
               <Link href='/library' className={styles.link}>Бібліотека</Link>
            </li>
            <li className={styles.item_hover}>
               <Link href='/authors' className={styles.link}>Автори</Link>
            </li>
            <li className={styles.item_hover}>
               <Link href='/news' className={styles.link}>Статті</Link>
            </li>
            {/* <li className=item {styles.item_hover}>
               <a href=# className={styles.link}>Пошук</a>
            </li> */}
         </ul>
      </nav>
   )
}

export default Menu;