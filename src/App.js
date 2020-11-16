import React from 'react';
import './App.css';
import Display from './Display';
import ImageViewer from './ImageViewer';
import a from './a.png';

const MENU = [
  { type: 2, name: "Схема Филёвской линии", src: '/Image/FilLine.png' },
  { type: 1, name: "Человек на пути", url: "https://www.youtube.com/embed/xzyvgdpGbjI", description: "Вследствие возникновения данного инцидента поезд №44, с временем отправления 7 час. 42 мин. был отправлен со станции Киевская в 7 час. 52 мин.&Остановка движения поездов из-за инцидента составляет 10 мин.&Время на полное восстановление интервалов движения в нечетном направлении: 153 мин.&Время на полное восстановление интервалов в чётном направлении: 182 мин.", day:"/Image/гирчеловекнапути1.svg", graphik:"/Image/человекнапути2.svg" },
  { type: 1, name: "Потеря управления", url: "https://www.youtube.com/embed/SA-sZV9DF8c", description: "Вследствие возникновения данного инцидента поезд №44, с временем отправления со станции Смоленская 7 час. 44 мин. был отправлен в 8 час. 04 мин.&Остановка движения поездов из-за инцидента составляет 16 мин.&Время на полное восстановление интервалов движения в нечетном направлении: 180 мин.&Время на полное восстановление интервалов в чётном направлении: 195 мин.", graphik:"/Image/потеряуправления.svg" },
  { type: 1, name: "Заклинивание колесных пар", url: "https://www.youtube.com/embed/8EDOj3qeFgo", description: "Вследствие возникновения данного инцидента поезд №45, с временем отправления 7 час. 58 мин. был отправлен со станции Студенческая в 8 час. 09 мин.&Остановка движения поездов из-за инцидента составляет 11 мин. Далее неисправный поезд следует с уменьшенной скоростью в депо на протяжении 30 мин.&Время на полное восстановление интервалов движения в нечетном направлении: 137 мин.&Время на полное восстановление интервалов в чётном направлении: 162 мин.", day:"/Image/ГИРзаклиниваниеколпар.svg", graphik:"/Image/заклиниваниеколпар.svg" },
  { type: 1, name: "Проезд запрещающего", url: "https://www.youtube.com/embed/T6ULuuq6InI", description: "Вследствие возникновения данного инцидента поезд №44, с временем отправления 7 час. 46 мин. был отправлен в 7 час. 53 мин.&Остановка движения поездов из-за инцидента составляет 7 мин.&Время на полное восстановление интервалов движения в нечетном направлении: 146 мин.&Время на полное восстановление интервалов в чётном направлении: 148 мин.", day:"/Image/ГИРпроездзапрещ.svg.svg", graphik:"/Image/проездзапрещ.svg" },
  { type: 1, name: "Ложная занятость", url: "https://www.youtube.com/embed/kX4A8u8NeuU", description: "Продолжительность ложной занятости: 1 час.&С уменьшенной скоростью, под запрещающее показание светофора КИ-701 со станции Киевская отправились поезда №№ 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67.&Время на полное восстановление интервалов движения в нечетном направлении: 195 мин.&Время на полное восстановление интервалов в чётном направлении: 162 мин.", day:"/Image/ГИРложнаязанятость.svg", graphik:"/Image/ложнаязанятость.svg" },
  { type: 1, name: "Плюс одна пара поездов", url: "https://www.youtube.com/embed/8OuTpTrD-x8", description: "В час-пик добавлена 1 пара поездов по маршруту Кунцевская – Александровский сад.&При увеличении размеров движения возникают задержки в движении поездов из-за недостаточной пропускной способности ст. Кунцевская.&Увеличивается время стоянки на ст. Пионерская. По перегону ст. Пионерская – ст. Кунцевская поезда следуют с задержками.", day:"/Image/ГИРпара.svg", graphik:"/Image/парапоездов.svg" },
  { type: 2, name: "Скоростные ограничения", src: '/Image/SpeedLimit.jpg' },
  { type: 2, name: "Лимитирующие участки", src: '/Image/LimitItem.png' },
  { type: 2, name: "Расстановка составов", src: '/Image/расстановка.png' }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: 0,
      menu: false
    };
  }

  render() {
    const activeItem = this.state.activeItem;
    return (
      <div className="App">
        <div className="Appheader">
          <div
            className="App-navButtons-menu"
            onClick={() => this.setState({ menu: true })}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
          <a
            href="http://rut.digital"
            target="_blank"
          >
            <img
              className="logoImg"
              height="23"
              width="23"
              alt="logo"
              src={a}
            />
          </a>
          <span
            style={{
              color: '#c92622',
              marginLeft: 20
            }}
          >
            Интерактивная модель Филёвской линии Московского метро
          </span>
        </div>
        <div className="Appbody">
          <div className="App-navButtons"
            style={{
              display: this.state.menu ? 'block' : 'none'
            }}
          >
            <div className="App-navButtons-close">
              <span
                className="App-navButtons-close-btn"
                onClick={() => this.setState({ menu: false })}
              >
                &#10006;
            </span>
            </div>
            <div className="App-navButtons-btns">
              {MENU.map((item, index) => (
                <div
                  className="App-navButtons-button"
                  key={index}
                  onClick={() => {
                    this.setState({ activeItem: index });
                  }}                  
                >
                  <span
                    className={this.state.activeItem === index ? "App-navButtons-span-active" : "App-navButtons-span"}
                  >
                    {item.name}
                  </span>
                </div>
              ))}
            </div>            
          </div>
          <div className="App-result">

            <div className="App-result-content">
              {(MENU[activeItem].type === 1) &&
                <Display name={MENU[activeItem].name} url={MENU[activeItem].url} day={MENU[activeItem].day} graphik={MENU[activeItem].graphik} description={MENU[activeItem].description}></Display>
              }
              {(MENU[activeItem].type === 2) &&
                <ImageViewer src={MENU[activeItem].src}></ImageViewer>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;