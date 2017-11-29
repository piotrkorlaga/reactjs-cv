import React from 'react';
import './HeadSection.scss';

class HeadSection extends React.Component{
	render(){

		return(
			<div className="HeadSection">
				<h3>{this.props.name}</h3>
			</div>
		);
	}
}
export default HeadSection;
