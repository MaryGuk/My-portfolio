import "./user-education.css";

const UserEducation = () => {
  return (
    <div className="education-blog">
      <div className="education-title">Самообразование</div>
      <div className="education-information">
        <div className="education-information__text">
          IT-incubator, React JS - путь самурая(видеоуроки); <br />
          <br />
          HTML Academy, Skillbox, Базовые уроки: основы HTML, CSS, JS; <br />
          <br />
          BrainsCloud: курс HTML, CSS с нуля для начинающих, практические
          работы; <br />
          <br />
          Евгений Андриканич/Фрилансер по жизни:курс по вёрстке сайтов
          (видеоуроки). HTML, CSS, JS, адаптивная и кроссбраузерная вёрстка
          сайтов;
          <br />
        </div>
        <img className="education-information__image" src="/images/ноут.png" />
      </div>
    </div>
  );
};

export default UserEducation;
