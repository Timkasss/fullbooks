import './fonts.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';
import { useState, useEffect } from 'react';

import { BooksContext, AuthorsContext } from './components/context';
import Book from './pages/Book';
import Header from './components/header/Header';
import Email from './components/email/Email';
import Footer from './components/footer/Footer';
import PagePerson from './pages/PagePerson';

import { url, url2 } from './api.js';
import Personal from './pages/Personal.js';
import PageNews from './pages/PageNews.js';
import Article from './pages/Article.js';
import Feedback from './pages/Feedback.js';
import Error from './pages/Error.js';
import Authors from './pages/Authors.js';


function App() {
  let path = useLocation()
  let finishPath = path.pathname;
  const authors = [
    { id: 0, name: 'Іван Олексійович Бунін' },
    { id: 1, name: 'Іван Олексійович Бунін' },
    { id: 2, name: 'Борис Леонідович Пастернак' },
    { id: 3, name: 'Михайло Афанасійович Булгаков' },
    { id: 4, name: 'Олександр Ісаєвич Солженіцін' },
    { id: 5, name: 'Іван Олександрович Бунін' },
    { id: 6, name: 'Олексій Максимович Пешков' },
    { id: 7, name: 'Микола Васильович Гоголь' },
    { id: 8, name: 'Федір Михайлович Достоєвський' },
    { id: 9, name: 'Лев Миколайович Толстой' },
    { id: 10, name: 'Антон Павлович Чехов' },
    { id: 11, name: 'Іван Олексійович Бунін' },
    { id: 12, name: 'Борис Леонідович Пастернак' },
    { id: 13, name: 'Михайло Афанасійович Булгаков' },
    { id: 14, name: 'Олександр Ісаєвич Солженіцін' },
    { id: 15, name: 'Іван Олександрович Бунін' },
    { id: 16, name: 'Олексій Максимович Пешков' },
    { id: 17, name: 'Микола Васильович Гоголь' },
    { id: 18, name: 'Федір Михайлович Достоєвський' },
    { id: 19, name: 'Лев Миколайович Толстой' },
    { id: 20, name: 'Антон Павлович Чехов' }
  ];

  const [viewArrow, setViewArrow] = useState(false);

  window.addEventListener('scroll', () => {
    let hei = document.documentElement.getBoundingClientRect().top;
    let top = document.documentElement.offsetHeight;
    if (-top > hei) {
      setViewArrow(true)
    } else {
      setViewArrow(false)
    }
  })




  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [finishPath])
  const [dataBooks, setDataBooks] = useState([])
  useEffect(() => {
    const data = async () => {
      const result = await Promise.all([
        fetch(url)
          .then(response => response.json()),
        fetch(url2)
          .then(response => response.json())
      ])
      setDataBooks([...result[0].items, ...result[1].items])

    }
    data()
  }, []);

  return (
    <BooksContext.Provider value={{ dataBooks, setDataBooks }}>
      <AuthorsContext.Provider value={authors}>
        <div className="wrapper">
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/library" element={<Library />} />
              <Route path="/authors" element={<Authors />} />
              <Route path="/authors/:id" element={<PagePerson />} />
              <Route path="/library/:userId" element={<Book />} />
              <Route path="/mypage" element={<Personal />} />
              <Route path="/news" element={<PageNews />} />
              <Route path="/news/id" element={<Article />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="*" element={<Error />} />
            </Routes>
            {
              viewArrow && <div className="top" onClick={scrollTop}></div>
            }

          </main>
          <Email />
          <Footer />
        </div>
      </AuthorsContext.Provider>
    </BooksContext.Provider>
  );
}

export default App;
