import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
// import logo from '../img/logo.png';

function Header() {
const [showMenu, setShowMenu] = useState(false);

function onMenuBtnClick() {
    setShowMenu(!showMenu);
}

return (
    <>
    <header className="w-full container relative h-36 md:h-[600px] xl:h-[900px] bg-headerBg bg-center md:bg-cover">
    {(showMenu) ? <Menu  btnClick={onMenuBtnClick}/> : ""}
        <div className=" p-6 flex justify-between ">
            <Link to="/main">
            <img src={require('../img/logo.png')} alt='logo' className='w-14 md:w-36'/>
            </Link>

            <ul id="menu" className="hidden absolute top-0 right-0 px-10 py-16 bg-gray-800 z-50 md:relative md:flex justify-center w-full md:p-0 md:bg-transparent md:flex-row md:space-x-6 xl:space-x-16">
                <li>
                    <Link className="text-white opacity-70 hover:opacity-100 duration-300" to="main">ГЛАВНАЯ</Link>
                </li>
                <li>
                    <Link className="text-white opacity-70 hover:opacity-100 duration-300" to="services">УСЛУГИ</Link>
                </li>
                <li>
                    <Link className="text-white opacity-70 hover:opacity-100 duration-300" to="gallery">ФОТОГАЛЕРЕЯ</Link>
                </li>
                <li>
                    <Link className="text-white opacity-70 hover:opacity-100 duration-300" to="prices">ЦЕНЫ</Link>
                </li>
                <li>
                    <Link className="text-white opacity-70 hover:opacity-100 duration-300" to="location">ЛОКАЦИЯ</Link>
                </li>
                <li>
                    <Link className="text-white opacity-70 hover:opacity-100 duration-300" to="reviews">ОТЗЫВЫ</Link>
                </li>
            </ul>

            <div className="flex items-center md:hidden z-50">
                <button className="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
                    onClick={onMenuBtnClick}>
                        { (showMenu) ? "X" : <span>&#9776;</span>}

                </button>
            </div>
        </div>
            <div className="absolute w-full font-['Ledger'] text-xl md:text-4xl xl:text-6xl text-center text-white top-1/2 xl:top-2/3 left-1/2 -translate-x-1/2  z-20">
                Маленькая парикмахерская<br />с большой историей</div>
            <img src={require('../img/hero.png')} alt='hero' className='hidden md:block absolute max-h-[80%]  bottom-0 left-1/2 -translate-x-1/2  z-10'/>

    </header>
    </>
    )
}

export default Header