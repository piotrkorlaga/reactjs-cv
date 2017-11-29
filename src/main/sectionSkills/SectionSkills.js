import React from 'react';

import './SectionSkills.scss';
import HeadSection from '../../common/headSection/HeadSection.js';
import Skill from './Skill/Skill.js';
class SectionSkills extends React.Component{
	render(){

		return(
			<div className="SectionSkills">
				<HeadSection name="Umiejętności" />
				<h5>Legenda poziomu znajomości technologii i narzędzi*</h5>
				<ul className="Legend-Skills">
					<li>podstawowa</li>
					<li><div className="Low"></div></li>
					<li><div className="Basic"></div></li>
					<li><div className="Medium"></div></li>
					<li><div className="High"></div></li>
					<li>zaawansowana</li>
				</ul>
				<div className="SkillWrapper">
					<Skill level="Basic" name="JavaScript (ES6)"></Skill>
					<Skill level="Low" name="Java"></Skill>
					<Skill level="Basic" name="React"></Skill>
					<Skill level="Low" name="Redux"></Skill>
					<Skill level="Basic" name="GIT"></Skill>
					<Skill level="Basic" name="SQL"></Skill>
					<Skill level="High" name="Wordpress"></Skill>
					<Skill level="Basic" name="SCRUM"></Skill>
					<Skill level="Basic" name="jQuery"></Skill>
					<Skill level="Low" name="PHP"></Skill>
					<Skill level="Basic" name="Python/Django"></Skill>
					<Skill level="High" name="SEO"></Skill>
					<Skill level="High" name="HTML/CSS"></Skill>
					<Skill level="Basic" name="Webpack"></Skill>
					<Skill level="Basic" name="REST"></Skill>
					<Skill level="Basic" name="Nginx"></Skill>
					<Skill level="Medium" name="Linux"></Skill>
					<Skill level="Basic" name="Jira"></Skill>
					<Skill level="Medium" name="Bootstrap"></Skill>
					<Skill level="Basic" name="FlexBox"></Skill>
				</div>
				<p className="Star">* - Jest to subiektywna ocena umiejętności</p>

			</div>
		);
	}
}
export default SectionSkills;
