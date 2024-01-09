import './my-reviews.scss';
import avatar from '../../img/personal/avatar.png';

function MyReviews() {
   return (
      <div className="my-reviews">
         <div className="my-reviews__head">
            <h1 className="my-reviews__title">Ваши рецензии</h1>
            <div className="my-reviews__links-wrapper">
               <div className="my-reviews__link">
                  <div className="my-reviews__links-name">
                     Всего
                  </div>
                  <span className="my-reviews__count">15</span>
               </div>
               <div className="my-reviews__link">
                  <div className="my-reviews__links-name">
                     Положительные
                  </div>
                  <span className="my-reviews__count">1</span>
               </div>
               <div className="my-reviews__link">
                  <div className="my-reviews__links-name">
                     Нейтральные
                  </div>
                  <span className="my-reviews__count">0</span>
               </div>
               <div className="my-reviews__link">
                  <div className="my-reviews__links-name">
                     Отрицательные
                  </div>
                  <span className="my-reviews__count">0</span>
               </div>
            </div>
         </div>
         <div className="my-reviews__reviews-wrapper">
            <div className="my-reviews__block">
               <header className="my-reviews__header">
                  <div className="my-reviews__img-wrapper">
                     <img src={avatar} alt="avatar" className="my-reviews__img" />
                  </div>
                  <div className="my-reviews__header-name-kind">
                     <h1 className="my-reviews__header-name">Lerata</h1>
                     <div className="my-reviews__time">14 апреля 2020 | 09:59</div>
                     <span className="my-reviews__header-kind">Позитивна рецензія</span>
                  </div>
                  <div className="my-reviews__grade-pick">
                     <div className="my-reviews__grade-like-wrapper">
                        <div className="my-reviews__grade-like"></div>
                        <span className='my-reviews__count-like'>3</span>
                     </div>
                     <div className="my-reviews__grade-dislike-wrapper">
                        <div className="my-reviews__grade-dislike"></div>
                        <span className='my-reviews__count-dislike'>0</span>
                     </div>
                  </div>

               </header>
               <div className="my-reviews__title-wrapper">
                  <h1 className="my-reviews__title">На пути к цели</h1>
               </div>
               <p className="my-reviews__text">Честно скажу, я раньше не особо задумывалась о таком понятии, как апартеид. Он казался чем-то старым, давно ушедшим в небытие и не заслуживающим внимания современного человека, однако хочу признаться, что просмотр фильма «Побег из Претории» заставил меня пересмотреть многие вещи. Сюжет основан на вполне реальных событиях, описанных в книге одного из участников тех жутких событий, и я считаю, что зрителям будет не лишним ознакомиться с тем, что творилось в ЮАР посредством настоящей приключенческой драмы, в которой правды куда больше, чем вымысла. </p>
               <p className="my-reviews__text">Развитие событий происходит в 1979 году, когда апартеид в ЮАР находится на пике своего могущества. Но с подобной политикой дискриминации по расовому признаку согласны совсем не все. Даже многие белые люди не могут воспринимать адекватно политику властей. Среди таких революционеров оказываются Тим Дженкин и Стивен Ли. Молодые люди не были готовы к открытому оружейному противостоянию и считали, что могут принести гораздо больше пользы раздавая листовки.</p>
               <p className="my-reviews__text">Но власть не дремлет, полиция пристально следит за нарушителями спокойствия вне зависимости от цвета кожи. Даже если ты белый — это ничего не значит. И вот нашим бравым революционерам приходится отправиться в Преторию, страшную тюрьму, откуда можно выйти только при большом везении или помиловании главы государства. Понятное дело, что Дженкин и Ли на подобное рассчитывать не могут и им приходится обдумать план побега.</p>
               <p className="my-reviews__text">Что мне в этом фильме понравилось, так это то, что авторы не слишком сильно нагнетают драму. Они, конечно, показывают все несправедливость апартеида и как много без он принес темнокожему населению, но это скорее фильм о том, как переломить суть событий, изменить себя и окружающих, добиться правды и воли даже тогда, когда на тебя наставлено дуло пистолета.</p>
               <p className="my-reviews__text">Дэниэл Рэдклифф открылся для меня с неожиданно позитивной стороны. В последние пару лет он играет в каких-то очень странных проектах. Например, «Пушки Акимбо», «Человек- швейцарский нож». На каждый такой проект находятся свои любители, но, например, мне интересней видеть Рэдклиффа в образе нормального, простого человека. А когда он еще и бежит из тюрьмы, словно какой-нибудь Вентворт Миллер, тогда это просто шикарно. Во многом мое внимание к фильмы приковал именно Дэниэл, который совсем не подвел и очень даже порадовал.</p>
               <p className="my-reviews__text">«Побег из Претории» стоит посмотреть зрителям, плохо знакомым с историей апартеида. Я выделила для себя немало интересной информации, которая осела в моей памяти надолго. И даже если вы большие знатоки того, что происходило в ЮАР, это все равно не помешает вам получить удовольствие от просмотра фильм о побеге с отличной игрой Дэниэла Рэдклиффа.</p>
               <p className="my-reviews__text">8 из 10</p>
               <footer className="my-reviews__footer">
                  <div className="my-reviews__comment-link-wrapper">
                     <div className="my-reviews__footer-commeting">7 коментарів</div>
                     <a href="#" className="my-reviews__footer-link">Пряме посилання</a>
                  </div>
                  <div className="my-reviews__foter-complain">Удалить рецензию</div>
               </footer>
            </div>
         </div>
      </div>
   )
}
export default MyReviews;