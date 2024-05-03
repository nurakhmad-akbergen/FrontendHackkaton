import React from 'react'
import s from './CarsPage.module.sass'

function CarsPage() {

    const cars = [
        {
            id: 1,
            name: "Kia Sportage 2023",
            mainImage: "https://thumb.tildacdn.com/tild3633-6465-4863-a631-373964363664/-/resize/499x/-/format/webp/Kia-Sportage-2023-2.png",
            engine: '2,0',
            fill: "бензин",
            kpp: "автоматическая",
            price: '50 000'
        },
        {
            id: 3,
            name: "Kia Sorento 2014",
            mainImage: "https://thumb.tildacdn.com/tild3533-6366-4535-b135-613639333432/-/resize/411x/-/format/webp/pngwingcom_2.png",
            engine: '2,4',
            fill: "бензин",
            kpp: "автоматическая",
            price: '30 000'
        },
        {
            id: 4,
            name: "Suzuki Grand Vitara",
            mainImage: "https://thumb.tildacdn.com/tild6563-3837-4231-b238-333265646430/-/resize/441x/-/format/webp/SUZUKI_Grand_Vitara_.png",
            engine: '2,7',
            fill: "бензин",
            kpp: "автоматическая",
            price: '18 000'
        },
        {
            id: 5,
            name: "Toyota Camry 50",
            mainImage: "https://thumb.tildacdn.com/tild3937-6666-4436-b061-363731633361/-/resize/450x/-/format/webp/canry50.png",
            engine: '2,0',
            fill: "бензин",
            kpp: "автоматическая",
            price: '22 000'
        },
        {
            id: 6,
            name: "Nissan Patrol",
            mainImage: "https://thumb.tildacdn.com/tild6332-3961-4637-a632-633332613238/-/resize/607x/-/format/webp/patrol.png",
            engine: '5,6',
            fill: "газ - бензин",
            kpp: "автоматическая",
            price: '40 000'
        },
    ]
    return (
        <div className={s.container}>
            <img className={s.background} src="https://www.tts.ru/upload/blog/top-otechestvennykh-avtomobiley-2022.jpg" alt="" />
            <img className={s.background} style={{marginTop: "200vh"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALbFLMydTNm0i2obO552JY9vGS74pwf6Si1HXihx1lA&s" alt="" />
            <div className={s.innerContainer}>
                <h1 className={s.mainText}>Авто в прокат в Алматы</h1>
                <p className={s.par}>Для вашего удобства и простоты выбора мы предлагаем самые популярные автомобили конца 2020 и начала 2021 года. Полный список доступных машин в каталоге и он постоянно пополняется...</p>

                <div className={s.cars}>
                    {
                        cars.map((elem) => 
                            <div className={s.car} key={elem.id}>
                                <img className={s.carPicture} src={elem.mainImage} alt="" />
                                <div className={s.description}>
                                    <h2>{elem.name}</h2>
                                    <div className={s.engine}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/2061/2061956.png" alt="" />
                                        <p>Объем: {elem.engine} литра</p>
                                    </div>
                                    <div className={s.fill}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/4016/4016575.png" alt="" />
                                        <p>Тип топлива: {elem.fill}</p>
                                    </div>
                                    <div className={s.kpp}>
                                        <img src="https://cdn-icons-png.flaticon.com/256/2061/2061963.png" alt="" />
                                        <p>КПП: {elem.kpp}</p>
                                    </div>
                                </div>

                                <div className={s.price}>
                                    <h3>{elem.price} ₸ / сутки</h3>
                                    <button>Забронировать</button>
                                </div>

                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CarsPage
