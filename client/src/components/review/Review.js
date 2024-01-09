import './review.scss';

import avatar from '../../img/book/avatar.png';

function Review() {
   return (
      <article className="review">
         <header className="review__header">
            <div className="review__img-wrapper">
               <img src={avatar} alt="avatar" className="review__img" />
            </div>
            <div className="review__header-name-kind">
               <h1 className="review__header-name">Lerata</h1>
               <span className="review__header-kind">Позитивна рецензія</span>
            </div>
            <div className="review__person-data">
               <div className="review__reviews review_name">Рецензії<span className='review__count'>(113)</span></div>
               <div className="review__grade review_name">Оцінки<span className='review__count'>(13)</span></div>
               <div className="review__friends review_name">Друзі<span className='review__count'>(3)</span></div>
               <div className="review__books review_name">Книги<span className='review__count'>(1)</span></div>
               <div className="review__writer review_name">Письменики<span className='review__count'>(11)</span></div>
            </div>
            <div className="review__grade-pick">
               <div className="review__grade-like-wrapper">
                  <div className="review__grade-like"></div>
                  <span className='review__count-like'>3</span>
               </div>
               <div className="review__grade-dislike-wrapper">
                  <div className="review__grade-dislike"></div>
                  <span className='review__count-dislike'>0</span>
               </div>
            </div>

         </header>
         <div className="review__title-wrapper">
            <h1 className="review__title">На пути к цели</h1>
            <div className="review__time">14 апреля 2020 | 09:59</div>
         </div>
         <p className="review__text">Честно скажу, я раньше не особо задумывалась о таком понятии, как апартеид. Он казался чем-то старым, давно ушедшим в небытие и не заслуживающим внимания современного человека, однако хочу признаться, что просмотр фильма «Побег из Претории» заставил меня пересмотреть многие вещи. Сюжет основан на вполне реальных событиях, описанных в книге одного из участников тех жутких событий, и я считаю, что зрителям будет не лишним ознакомиться с тем, что творилось в ЮАР посредством настоящей приключенческой драмы, в которой правды куда больше, чем вымысла. </p>
         <p className="review__text">Развитие событий происходит в 1979 году, когда апартеид в ЮАР находится на пике своего могущества. Но с подобной политикой дискриминации по расовому признаку согласны совсем не все. Даже многие белые люди не могут воспринимать адекватно политику властей. Среди таких революционеров оказываются Тим Дженкин и Стивен Ли. Молодые люди не были готовы к открытому оружейному противостоянию и считали, что могут принести гораздо больше пользы раздавая листовки.</p>
         <p className="review__text">Но власть не дремлет, полиция пристально следит за нарушителями спокойствия вне зависимости от цвета кожи. Даже если ты белый — это ничего не значит. И вот нашим бравым революционерам приходится отправиться в Преторию, страшную тюрьму, откуда можно выйти только при большом везении или помиловании главы государства. Понятное дело, что Дженкин и Ли на подобное рассчитывать не могут и им приходится обдумать план побега.</p>
         <p className="review__text">Что мне в этом фильме понравилось, так это то, что авторы не слишком сильно нагнетают драму. Они, конечно, показывают все несправедливость апартеида и как много без он принес темнокожему населению, но это скорее фильм о том, как переломить суть событий, изменить себя и окружающих, добиться правды и воли даже тогда, когда на тебя наставлено дуло пистолета.</p>
         <p className="review__text">Дэниэл Рэдклифф открылся для меня с неожиданно позитивной стороны. В последние пару лет он играет в каких-то очень странных проектах. Например, «Пушки Акимбо», «Человек- швейцарский нож». На каждый такой проект находятся свои любители, но, например, мне интересней видеть Рэдклиффа в образе нормального, простого человека. А когда он еще и бежит из тюрьмы, словно какой-нибудь Вентворт Миллер, тогда это просто шикарно. Во многом мое внимание к фильмы приковал именно Дэниэл, который совсем не подвел и очень даже порадовал.</p>
         <p className="review__text">«Побег из Претории» стоит посмотреть зрителям, плохо знакомым с историей апартеида. Я выделила для себя немало интересной информации, которая осела в моей памяти надолго. И даже если вы большие знатоки того, что происходило в ЮАР, это все равно не помешает вам получить удовольствие от просмотра фильм о побеге с отличной игрой Дэниэла Рэдклиффа.</p>
         <p className="review__text">8 из 10</p>
         <footer className="review__footer">
            <div className="review__comment-link-wrapper">
               <div className="review__footer-commeting">Коментувати</div>
               <a href="#" className="review__footer-link">Пряме посилання</a>
            </div>
            <div className="review__foter-complain">Поскаржитися на спойлер</div>
         </footer>
      </article>
   )
}
export default Review;