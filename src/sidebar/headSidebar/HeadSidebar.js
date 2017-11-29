import React from 'react';
import fotoo from '../../images/foto.jpg';

import './HeadSidebar.scss';

class HeadSidebar extends React.Component{
	render(){

		return(
			<div className="Sb">
				<img src={fotoo} alt="personal foto" />
				<h1>Truchan <strong>Przemysław </strong></h1>
				<h4>WebDeveloper</h4>
			</div>
		);
	}
}
export default HeadSidebar;
