import React from 'react'
import { Link } from 'react-router-dom'

function Menu({btnClick}) {
	return (
		<div className='absolute top-0 right-0 w-4/5 h-screen bg-black z-40 px-20 py-24 bg-menuBg bg-cover'>
			<ul id="menu" className="h-full flex flex-col justify-center gap-10 ">
				<li>
					<Link className="text-white text-lg font-bold opacity-70 hover:opacity-100 duration-300" to="main" onClick={btnClick}>ГЛАВНАЯ</Link>
				</li>
				<li>
					<Link className="text-white text-lg font-bold opacity-70 hover:opacity-100 hover:drop-shadow-[35px_35px_35px_rgba(ff,ff,ff,1)] duration-300" to="services" onClick={btnClick}>УСЛУГИ</Link>
				</li>
				<li>
					<Link className="text-white text-lg font-bold opacity-70 hover:opacity-100 duration-300" to="gallery" onClick={btnClick}>ФОТОГАЛЕРЕЯ</Link>
				</li>

				<li>
					<Link className="text-white text-lg font-bold opacity-70 hover:opacity-100 duration-300" to="prices" onClick={btnClick}>ЦЕНЫ</Link>
				</li>
				<li>
					<Link className="text-white text-lg font-bold opacity-70 hover:opacity-100 duration-300" to="location" onClick={btnClick}>ЛОКАЦИЯ</Link>
				</li>
				<li>
					<Link className="text-white text-lg font-bold opacity-70 hover:opacity-100 duration-300" to="reviews" onClick={btnClick}>ОТЗЫВЫ</Link>
				</li>
			</ul>
		</div>
	)
}

export default Menu