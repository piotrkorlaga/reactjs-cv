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
			</div>
		);
	}
}
export default Sidebar;
