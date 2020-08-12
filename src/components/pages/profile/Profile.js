import React from 'react';
import ImgProfile from '../../../images/photo_4.jpg';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='John Doe' />
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						Ulrich Gram
					</span>
					<p>Full Stack Developer</p>
				</div>
			</div>
		</div>
	);
}
