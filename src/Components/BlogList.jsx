import React from 'react';

class BlogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeSlug: this.props.match.params.type,
            categorySlug: this.props.match.params.category,
            postsList: null,
            pageInfo: this.props.pageInfo
        }
    }

    render(){
        return(
            // <div></div>
            // <div className="categories">
            //         <NavLink exact to={`/${this.props.lang}/${this.state.typeSlug}`}>All</NavLink>
            //         {this.props.pageInfo.categories.map(item => 
            //             <NavLink exact key={item.id} to={`/${this.props.lang}/${this.state.typeSlug}/${item.slug}`} data-filter={item.slug}>{item.title}</NavLink>
            //             )}
            // </div>

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