"use client";
import { useState } from "react";
//import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from "./login.module.scss";
import avatar from "../../../../public/img/header/avatar.png";
//import { login, registration, logout } from '../../../http/userAPI';
//import { observer } from 'mobx-react-lite';
//import { Auth } from '../../context';
import Link from "next/link";
import Image from "next/image";
//import { booksLoad } from '@/app/lib/books-data';

export default function Login() {
  const [logOpen, setLogOpen] = useState(false);
  const user = true;

  // useEffect(() => {
  //    booksLoad()
  // })
  // const navigate = useNavigate();
  // const location = useLocation();
  // const isRegistration = location.pathname === '/registration';
  // const isLoginLink = location.pathname === '/login';
  const [isLogin, setIsLogin] = useState(false);

  // const enter = async (e) => {
  //    e.preventDefault();
  //    try {
  //       let data;
  //       if (isLoginLink) {
  //          data = await login(email, password);
  //          setModelClose(!modelClose)
  //       }
  //       else {
  //          data = await registration(username, email, password, dates);
  //          setModelRegistation(!modelRegistation)
  //          setModelClose(!modelClose)
  //       }
  //       user.setUser(user)
  //       user.setIsAuth(true)
  //       navigate('/')

  //    } catch (e) {
  //       alert(e.response.data.message)
  //    }
  // }

  function handleLogout() {
    setIsLogin(!isLogin);
  }

  //const [logIn, setLogIn] = useState(true);

  return (
    <div className={styles.login}>
      {user ? (
        <Link className={styles.buttonModel} href="/authentication">
          Увійти
        </Link>
      ) : (
        <div className={styles.logIn}>
          <div
            className={`${styles.header} ${logOpen ? styles.headerArrow : ""}`}
            onClick={() => setLogOpen(!logOpen)}
          >
            <div className={styles.name}>Евгений</div>
            <div className={styles.photoWrapper}>
              <Image
                width={250}
                height={250}
                src={avatar}
                alt="your avatar"
                className={styles.photo}
              />
            </div>
          </div>
          {logOpen && (
            <nav className={styles.menu}>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <Link href="/dashboard" className={styles.link}>
                    Мой профиль
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href="/dashboard/settings" className={styles.link}>
                    Настройки
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href="/dashboard/reviews" className={styles.link}>
                    Рецензии
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href="/dashboard/friends" className={styles.link}>
                    Друзі
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href="/admin" className={styles.link}>
                    Dashboard
                  </Link>
                </li>
                <li className={styles.item}>
                  <span className={styles.link} onClick={handleLogout}>
                    Выход
                  </span>
                </li>
              </ul>
            </nav>
          )}
        </div>
      )}
    </div>
  );
}
