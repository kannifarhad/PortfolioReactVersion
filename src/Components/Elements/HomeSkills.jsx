import React from 'react';
import { connect } from 'react-redux';
import {getCategory, getPost, getPostList} from '../../Redux/actions';

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
					{(typeof props.posts['designer-skills'] != 'undefined') ? 
						props.posts['designer-skills'].postslist.map(skill => 
							<li key={skill.id}><p>{skill.title}</p> <span>{skill.shortstory}</span>
								<div className="skillicon">
									<img className="svgicon" src={skill.thumb_image} />
								</div>
							</li>
                    	) :''}
				</ul>
			</div>

            <div className="skillsblock">
				<h1>{props.languageData['Programming Skills']}</h1>
				<ul className="skilllist programming">
				{(typeof props.posts['programming-skills'] != 'undefined') ? 
                props.posts['programming-skills'].postslist.map(skill => 
						<li key={skill.id}><p>{skill.title}</p> <span>{skill.shortstory}</span> <img src={skill.thumb_image} /></li>
                    ) :''}
                </ul>
			</div>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
		config: store.common.config,
		languageData: store.common.translations,
		posts : store.posts
    }
};

const mapDispatchToProps = dispatch => ({
	getCategory: (lang, slug) => dispatch(getCategory(lang, slug)),
	getPost: (lang, slug) => dispatch(getPost(lang, slug)),
	getPostList: (lang, slug) => dispatch(getPostList(lang, slug)),
	
});
const HomeCont = connect(mapStateToProps, mapDispatchToProps)(HomeSkills);
export default HomeCont;