import React from 'react';

function HomeSkills (props) {
	var state = props.store.getState();
    return (
		
        <div className="skills">

            <div className="skillsblock ">
				<h1>Personal Information</h1>
				<ul className="myskills">
					<li><b>Birthdate :</b> <span> {state.config.birthdate}</span></li>
					<li><b>Phone :</b> <span> {state.config.phone}</span></li>
					<li><b>E-mail :</b> <span> {state.config.email}</span></li>
					<li><b>LinkedIn :</b> <a href={state.config.linkedin} target="_blank"> Farhad Aliyev</a></li>
					<li><b>Facebook :</b> <a href={state.config.facebook}  target="_blank">View Page</a></li>
				</ul>
				<a className="button" href={state.config.resume}>DOWNLOAD RESUME</a>
			</div>

            <div className="skillsblock">
				<h1>Designer Skills</h1>
				<ul className="skilllist design">
                    {props.skills.design.map(skill => 
                        <li key={skill.id}><p>{skill.name}</p> <span>{skill.level}</span>
                            <div className="skillicon">
                                <img className="svgicon" src={skill.icon} />
                            </div>
                        </li>
                    )}
				</ul>
			</div>

            <div className="skillsblock">
				<h1>Programming Skills</h1>
				<ul className="skilllist programming">
                {props.skills.programming.map(skill => 
						<li key={skill.id}><p>{skill.name}</p> <span>{skill.level}</span> <img src={skill.icon} /></li>
                    )}
                </ul>
			</div>
            
        </div>/* SKILLS END */
    )
}

export default HomeSkills;