import React from 'react';
import './styles/article.scss';
import ScreenshotPic from './imgs/overturescreen.png';
								

const Article = () => {
	return (
		<article className="overture">
			<div className="overture-container aniIn">
				<div className="skill-set">
					<ul className="skills">
						<li className="skill">UX</li>
						<li className="skill">Visual Design</li>
						<li className="skill">E-commerce</li>
						<li className="skill">Graphic Design</li>
					</ul>
				</div>
				<div className="info nonmob">
					<h2>Overture Apparel</h2>
					<p>An e-commerce fashion site. Clothes are designed by an artist and an actor. With the introduction of a new line we wanted to completely rebrand the site. The whole site has been overhauled and redone, the UI is made to be touchable and draggable.</p>
				</div>
				<div className="screenshotContainer">
					<div className="screenshot">
						<img src={ScreenshotPic} alt="" className="screenshotMobile"/>
					</div>
				</div>
				<div className="info mobileOnly">
					<h2>Overture Apparel</h2>
					<p>An e-commerce fashion site. Clothes are designed by an artist and an actor. With the introduction of a new line we wanted to completely rebrand the site. The whole site has been overhauled and redone, the UI is made to be touchable and draggable.</p>
				</div>
			</div>
		</article>
	)
}

export default Article