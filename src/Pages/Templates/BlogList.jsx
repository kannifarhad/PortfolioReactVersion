import React from 'react';
import ReactDOM from 'react-dom';

class BlogList extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="blogitemscont">
                    <div className="blogitem leftalign">
                            <div className="imageblock">
                                <div className="blogcategory">
                                    <span className="icons icon-webdesign"></span>
                                </div>
                                <a href="{{URL}}{{lang}}/posts/{{currenttype}}/{{poscategory}}/view/{{post.slug}}" className="imageitem"> <img src="{{post.thumb_image}}" /></a>
                            </div>

                            <div className="shortstory">
                                <h1><a href="{{URL}}{{lang}}/posts/{{currenttype}}/{{poscategory}}/view/{{post.slug}}">Title asdas</a></h1>
                                <span>21MAY 2018</span><div className="clear"></div>
                                <p>Lorem ipsum dolor text</p>
                            </div>

                            <div className="clear"></div>
                    </div>

            </div>
        )
    }
}

export default BlogList;