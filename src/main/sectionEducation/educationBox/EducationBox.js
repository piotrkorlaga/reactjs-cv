import React from 'react';
import './EducationBox.scss';

class EducationBox extends React.Component{
	render(){

		return(
			<div className="EducationBox">
				<p>
					{this.props.date}
				</p>
				<p>{this.props.school}</p>
				<p>{this.props.spec}</p>
			</div>
		);
	}
}
export default EducationBox;
