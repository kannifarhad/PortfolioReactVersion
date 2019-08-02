import React from 'react';
import { connect } from 'react-redux';


function HomeSkills (props) {
    return (	
        <div className="skills">
            <div className="skillsblock ">
				<h1>{props.languageData['Personal Information']}</h1>
				<ul className="myskills">
					<li><b>{props.languageData['Birthdate']} :</b> <span> {props.config.birthdate}</span></li>
					<li><b>{props.languageData['Phone']} :</b> <span> {props.config.phone}</span></li>
					<li><b>{props.languageData['E-mail']} :</b> <span> {props.config.email}</span></li>
					<li><b>{props.languageData['LinkedIn']} :</b> <a href={props.config.linkedin} target="_blank"> Farhad Aliyev</a></li>
					<li><b>{props.languageData['Facebook']} :</b> <a href={props.config.facebook}  target="_blank">{props.languageData['View Page']}</a></li>
				</ul>
				<a className="button" href={props.config.resume}>{props.languageData['DOWNLOAD RESUME']}</a>
			</div>

            <div className="skillsblock">
				<h1>{props.languageData['Designer Skills']}</h1>
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
				<h1>{props.languageData['Programming Skills']}</h1>
				<ul className="skilllist programming">
                {props.skills.programming.map(skill => 
						<li key={skill.id}><p>{skill.name}</p> <span>{skill.level}</span> <img src={skill.icon} /></li>
                    )}
                </ul>
			</div>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
		config: store.config,
		languageData: store.languageData
    }
};

const HomeCont = connect(mapStateToProps, null)(HomeSkills);
export default HomeCont;