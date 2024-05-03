import React from 'react'
import s from './header.module.sass'

function Header() {
  return (
    <div className={s.container}>
        <div className={s.innerContainer}>
            <img src="/header.jpg" alt="logo" />
            <button>ЗАБРОНИРОВАТЬ</button>
        </div>
    </div>
  )
}

export default Header