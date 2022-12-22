import "./user-information.css";

const UserInformation = () => {
  return (
    <div className="information-blog">
      <div className="information-title">Обо мне</div>

      <div className="user-information">
        <img className="user-information__icon" src="/images/note.jpg" />
        <div className="user-information__text">
          Доброго времени суток, меня зовут Гук Мария! Я занимаюсь вёрсткой
          сайтов. Верстаю адаптивные сайты под планшеты и мобильные устройства.
          Таким образом, сайт получается красивым на любом устройстве, будь то
          компьютер, ноутбук или телефон! В процессе создания сайта использую
          библиотеку React. Также занимаюсь дизайном страниц, могу создавать
          шаблоны с нуля. Работаю в таких графических редакторах, как Adobe
          Photoshop и Figma.
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
