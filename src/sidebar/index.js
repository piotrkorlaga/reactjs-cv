import React from 'react';

import HeadSidebar from './headSidebar/HeadSidebar.js';
import PersonalDetails from './personalDetails/PersonalDetails.js';
import AboutDescription from './aboutDescription/AboutDescription.js';
import './Sidebar.scss';

class Sidebar extends React.Component{
	render(){

		return(
			<div className="Sidebar">
				<HeadSidebar />
				<PersonalDetails />
				<AboutDescription />
				<p><a className="Pobierz-Cv" href="http://codedev.pl/Truchan_Przemyslaw_CV.pdf">Pobierz CV</a></p>
			</div>
		);
	}
}
export default Sidebar;
