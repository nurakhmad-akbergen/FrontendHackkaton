import React from 'react'
import s from './MainPage.module.sass'
function MainPage() {
  return (
    <div className={s.container}>
        <img src="https://thumb.tildacdn.com/tild6633-3532-4233-b334-376139363365/-/format/webp/bgbgbg.jpg" alt="" />
        <div className={s.innerContainer}>
            <div className={s.left}>
                <h1>Прокат автомобилей в Алматы без водителя от 9000 ₸/сутки</h1>
                <p>Car Rent предоставляет возможность арендовать автомобиль без водителя по разумным ценам. Путешествуйте по всему Казахстану без ограничений!</p>
                <p>Мы индивидуально подходим к вашему заказу, техническое состояние автомобилей проверяется постоянно, что гарантирует вашу безопасность.</p>

                <div className={s.clients}>
                    <div className={s.block}>
                        <h1>20</h1>
                        <p>и более комфортных автомобилей для вас</p>
                    </div>
                    <div className={s.block}>
                        <h1>7</h1>
                        <p>Лет на рынке услуг автопроката</p>
                    </div>
                    <div className={s.block}>
                        <h1>11 250 +</h1>
                        <p>Благодарных клиентов</p>
                    </div>
                </div>
            </div>

            <div className={s.right}>
                <div className={s.block}>
                    <h2>Срочно нужна машина? <br></br>Оставьте номер телефона!</h2>
                    <p>Наш менеджер свяжется в течение 5 минут и мы подберем оптимальный вариант автомобиля</p>

                    <div className={s.input}>
                        <p>Ваше имя</p>
                        <input type="text" placeholder='Имя' />
                    </div>
                    <div className={s.input}>
                        <p>Номер телефона</p>
                        <input type="text" placeholder='+7-705' />
                    </div>

                    <button>ПЕРЕЗВОНИТЕ МНЕ</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default MainPage