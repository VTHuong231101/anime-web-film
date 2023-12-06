import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Slide.css';

Slide.propTypes = {

};

function Slide(props) {

	const [idSlide, setIDSlide] = useState(0); //thay đổi img của banner

	return (
		<div className='slide__block'>

			<div className='container'>
				<img className='slide__img w-100 opacity-75'
					src='/slidebar__imgs/tv-5.jpg'
					alt='' />
			</div>

			<div className='slide__btn--container left'>
				<button className='slide__change--left'>
					<span className="fa-solid fa-angle-left"></span>
				</button>
			</div>

			<div className='slide__btn--container right'>
				<button className='slide__change--right'>
					<span className="fa-solid fa-angle-left"></span>
				</button>
			</div>




			<div className='slide__content'>
				<span className='movie__type'>
					Adventure
				</span>
				<h2 className='movie__name'>
					Fate / Stay Night: Unlimited Blade Works
				</h2>
				<p className='movie__description'>
					After 30 days of travel across the world asdc zsca
				</p>
				<button className='movie__btn'>
					WATCH NOW
				</button>
			</div>

			<nav className='slide__pagination'>
				<ul className='d-flex justify-content-center'>
					<li className='page-item active'>
						<i className="fa-solid fa-circle"></i>
					</li>

					<li className='page-item'>
						<i className="fa-solid fa-circle"></i>
					</li>

					<li className='page-item'>
						<i className="fa-solid fa-circle"></i>
					</li>

				</ul>
			</nav>
		</div>
	);
}

export default Slide;