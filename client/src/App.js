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

//import { author } from './dataSever.js';

function App() {
  let path = useLocation()
  let finishPath = path.pathname;

  // useEffect(() => {
  //   author();
  // }, []);

  const [viewArrow, setViewArrow] = useState(false);

  window.addEventListener('scroll', () => {
    let bodyHeight = document.documentElement.getBoundingClientRect().top;
    let top = document.documentElement.offsetHeight;
    if (-top > bodyHeight) {
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
  const [dataAuthors, setDataAuthors] = useState([])
  useEffect(() => {

    const fetchData = async () => {
      try {
        const [dataBooks, dataAuthors] = await Promise.all([
          fetch(url).then(response => response.json()),
          fetch(url2).then(response => response.json())
        ]);
        setDataBooks(dataBooks);
        setDataAuthors(dataAuthors);
      } catch (error) {
        console.error('Error. try again', error)
      }

    }
    fetchData()
  }, []);

  return (
    <BooksContext.Provider value={{ dataBooks, setDataBooks }}>
      <AuthorsContext.Provider value={{ dataAuthors, setDataAuthors }}>
        <div className="wrapper">
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/library" element={<Library />} />
              <Route path="/authors" element={<Authors />} />
              <Route path="/authors/:authorId" element={<PagePerson />} />
              <Route path="/library/:bookId" element={<Book />} />
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
