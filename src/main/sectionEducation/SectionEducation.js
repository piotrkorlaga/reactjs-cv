import React from 'react';

import './SectionEducation.scss';
import HeadSection from '../../common/headSection/HeadSection.js';
import EducationBox from './educationBox/EducationBox.js';

class SectionEducation extends React.Component{
	render(){

		return(
			<div className="sectionEducation">
				<HeadSection name="Wykształcenie" />
				<EducationBox date="2008-2012" school="Zespół Szkół Technicznych w Suwałkach" spec="kierunek: Elektronika"/>
				<EducationBox date="2012-2017" school="Uniwersytet w Białymstoku, Informatyka magisterskie" spec="specjalizacja: Technologie mobilne i intenretowe"/>
			</div>
		);
	}
}
export default SectionEducation;
