import React, { Component } from 'react';
//import 'materialize-css/dist/css/materialize.min.css';
import { HashLink as Link } from 'react-router-hash-link';

export default class Navbar extends Component {
	render() {
		return (
			<>
				<nav className='grey darken-4'>
					<div className='container'>
						<div className='nav-wrapper'>
							<Link to='/' className='brand-logo'>
								Ulrich Gram
							</Link>
							<a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
							<ul class="right hide-on-med-and-down">
								<li><Link to='/skills'><a href="sass.html"><i class="material-icons left">content_copy</i>Skills</a></Link></li>
								<li><Link to='/experiences'><a href="sass.html"><i class="material-icons left">work</i>Erfahrung</a></Link></li>
								<li><Link to='/educations'><a href="sass.html"><i class="material-icons left">school</i>Ausbildung</a></Link></li>
							</ul>
						</div>
					</div>
				</nav>

				<ul class="sidenav grey darken-4" id="mobile-demo">
					<li><Link to='/skills'><a href="sass.html"><i class="material-icons left">content_copy</i>Skills</a></Link></li>
					<li><Link to='/experiences'><a href="sass.html"><i class="material-icons left">work</i>Erfahrung</a></Link></li>
					<li><Link to='/educations'><a href="sass.html"><i class="material-icons left">school</i>Ausbildung</a></Link></li>
				</ul>

			</>
		);
	}
}
