import React from 'react';

import Skills from './Elements/HomeSkills';

function HomeAbout(props) {
    return(
    <div id="aboutme">
		<div className="aboutmecircles"><div className="photo"></div></div>
		<div className="name">
			<span>{props.aboutData.title}</span>
			<p className="profession">{props.aboutData.shortstory}</p>
			<div className="aboutext">{props.aboutData.fullstory}</div>
			<div className="clear"></div>
		</div>
		<Skills store={props.store} skills={props.mySkills} config={props.config} />
	</div>/* About me end*/
    )
}

export default HomeAbout;