"use client"
import { useState } from 'react';
//import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './login.module.scss';
import avatar from '../../../../public/img/header/avatar.png';
//import { login, registration, logout } from '../../../http/userAPI';
//import { observer } from 'mobx-react-lite';
//import { Auth } from '../../context';
import Link from 'next/link';
import Image from 'next/image';


export default function Login() {
   const [modelRegistation, setModelRegistation] = useState(false);
   const [logOpen, setLogOpen] = useState(false);
   const [modelClose, setModelClose] = useState(false);
   const user = true;
   // const navigate = useNavigate();
   // const location = useLocation();
   // const isRegistration = location.pathname === '/registration';
   // const isLoginLink = location.pathname === '/login';
   const [isLogin, setIsLogin] = useState(false);

   const [username, setUsername] = useState('');
   const [email, setLogin] = useState('');
   const [password, setPassword] = useState('')
   const [dates, setDate] = useState('')

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
      setIsLogin(!isLogin)
   };

   //const [logIn, setLogIn] = useState(true);


   const [modelRestoreOne, setModelRestoreOne] = useState(false);

   const [modelRestoreTwo, setModelRestoreTwo] = useState(false);

   return (

      <div className={styles.login}>
         {
            !user ? <div className={styles.buttonModel} onClick={() => setModelClose(!modelClose)}>Увійти</div> :
               <div className={styles.logIn}>
                  <div className={`${styles.header} ${logOpen ? styles.headerArrow : ''}`} onClick={() => setLogOpen(!logOpen)}>
                     <div className={styles.name}>Евгений</div>
                     <div className={styles.photoWrapper}>
                        <Image src={avatar} alt="your avatar" className={styles.photo} />
                     </div>
                  </div>
                  {
                     logOpen &&
                     <nav className={styles.menu}>
                        <ul className={styles.list}>
                           <li className={styles.item}>
                              <Link href='/dashboard' className={styles.link}>Мой профиль</Link>
                           </li>
                           <li className={styles.item}>
                              <Link href="/dashboard/settings" className={styles.link}>Настройки</Link>
                           </li>
                           <li className={styles.item}>
                              <Link href="/dashboard/reviews" className={styles.link}>Рецензии</Link>
                           </li>
                           <li className={styles.item}>
                              <Link href="/dashboard/friends" className={styles.link}>Друзі</Link>
                           </li>
                           <li className={styles.item}>
                              <span className={styles.link} onClick={handleLogout}>Выход</span>
                           </li>
                        </ul>
                     </nav>
                  }
               </div>
         }

         {
            modelClose &&
            <>
               <div className={styles.background} onClick={() => setModelClose(!modelClose)}></div>
               <div className={styles.model}>
                  <div className={styles.close} onClick={() => setModelClose(!modelClose)}></div>
                  <form className={styles.loginFormWrapper}>
                     <h1 className={styles.formTitle}>Увійти</h1>
                     <input type="text"
                        name="login"
                        className={styles.formLogin}
                        placeholder='Логін, пошта та телефон'
                        value={email}
                        onChange={(e) => setLogin(e.target.value)}
                     />
                     <input type="password"
                        name="password"
                        className={styles.formPassword}
                        placeholder='Ваш пароль'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     <button className={styles.formEnter}>Увійти</button>
                     <div className={styles.formRegistration} onClick={() => setModelRegistation(!modelRegistation)}>Зареєструватися</div>
                  </form>
                  <div className={styles.restore} onClick={() => setModelRestoreOne(!modelRestoreOne)}>Відновити пароль</div>
                  <div className={styles.socials}>
                     <a href="telegram.com" className={styles.socialItem}>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                     </a>
                     <a href="google.com" className={styles.socialItem}>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google</title><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" /></svg>
                     </a>
                     <a href="twitter.com" className={styles.socialItem}>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                     </a>
                     <a href="instagram.com" className={styles.socialItem}>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
                     </a>
                  </div>
               </div>
            </>
         }
         {
            modelRegistation &&
            <>
               <div className={styles.backgroundRegistration} onClick={() => setModelRegistation(!modelRegistation)}></div>
               <div className={styles.registration}>
                  <div className={styles.registrationClose} onClick={() => setModelRegistation(!modelRegistation)}></div>
                  <h1 className={styles.registrationTitle}>Зареєструватися</h1>
                  <form className={styles.formRegistrationWrapper}>
                     <input type="text"
                        className={styles.registrationInput}
                        id="name" name="name"
                        placeholder="Ім'я"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                     />
                     {/* <input type="text" className={styles.registration-input' id="surname" name="surname" placeholder="Прізвища" /> */}
                     <input type="text"
                        className={styles.registrationInput}
                        id="login" name="login"
                        placeholder="Логин"
                        value={email}
                        onChange={(e) => setLogin(e.target.value)}
                     />
                     <input type="password"
                        className={styles.registrationInput}
                        id="password"
                        name="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     <input type="string"
                        className={styles.registrationInput}
                        id="date"
                        name="date"
                        placeholder="дата"
                        value={dates}
                        onChange={(e) => setDate(e.target.value)}
                     />
                     {/* <input type="password"
                        className={styles.registration-input'
                        id="repeatPassword"
                        name="repeatPassword"
                        placeholder="Повторити пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     <input type="text" className={styles.registration-input' id="contact" name="contact" placeholder="Номер телефона або Email" /> */}
                     <div className={styles.checkboxWrapper}>
                        <input id={styles.ckeckbox_1} type="checkbox" className={styles.checkbox_1} />
                        <label className={styles.checkboxLabel_1} htmlFor="ckeckbox_1">Соглашаюсь на условия <a href="#" className={styles.checkboxLink}>политики конфиденциальности</a>    </label>
                        <input id={styles.ckeckbox_2} type="checkbox" className={styles.checkbox_2} />
                        <label className={styles.checkboxLabel_2} htmlFor="ckeckbox_2">Соглашаюсь на обработку персональных данных</label>
                     </div>
                     <button className={styles.sent} >Зареєструватися</button>
                  </form >
               </div >
            </>
         }
         {
            modelRestoreOne &&
            <>
               <div className={styles.backgroundRestore} onClick={() => setModelRestoreOne(!modelRestoreOne)}></div>
               <div className={styles.restoreBlock}>
                  <div className={styles.restoreClose} onClick={() => setModelRestoreOne(!modelRestoreOne)}></div>
                  <h1 className={styles.restoreTitle}>Восстановить пароль</h1>
                  <form className={styles.restoreForm}>
                     <input type="text" className={styles.restoreInput} id="emailornumber" name="emailornumber" placeholder="Почта или номер телефона" />
                     <div className={styles.sendGetWrapper}>
                        <button className={styles.send}>Отправить</button>
                        <input className={styles.get} placeholder="Полученный код"></input>
                     </div>
                     <div className={styles.continue} onClick={() => setModelRestoreTwo(!modelRestoreTwo)}>Далее</div>
                  </form>
               </div>
            </>
         }
         {
            modelRestoreTwo &&
            <>
               <div className={styles.backgroundRestoreTwo} onClick={() => setModelRestoreTwo(!modelRestoreTwo)}></div>
               <div className={styles.restoreBlockTwo}>
                  <div className={styles.restoreCloseTwo} onClick={() => setModelRestoreTwo(!modelRestoreTwo)}></div>
                  <h1 className={styles.restoreTitle}>Восстановить пароль</h1>
                  <form className={styles.restoreFormTwo}>
                     <input type="password" className={styles.newPassword} placeholder="Придумайте новый пароль" />
                     <input type="password" className={styles.newPassword} placeholder="Подтвердите новый пароль"></input>
                     <button className={styles.done}>Готово!</button>
                  </form>
               </div>
            </>
         }
      </div >

   )
}