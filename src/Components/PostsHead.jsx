import React from 'react';
import ReactDOM from 'react-dom';

import UlList from './Elements/UlLlist';

import mainMenu from '../data/menu';
import categories from '../data/categories';

class PostsHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: mainMenu,
            typeSlug: this.props.match.params.typeSlug,
            categorySlug: this.props.match.params.categorySlug,
            categoryList: null,
            typeList: null
        }
    }


    componentWillMount(){
      this.setState({
            categoryList:categories
      });
    }
    
    
    render() {
        return(

            <div className="projectinsidehead">
                <div className="headertop">
                    <div className="logoname"><span>Kanni Farhad</span></div>

                    <div className="headermenu">
                        <UlList menu={this.state.menu} listClass='headmenu' icons={true} typeSlug={this.state.typeSlug} />
                    </div>

                <div className="clear"></div>
                </div>

                    <div className="categories">
                        <a href='{{URL}}{{lang}}/posts/{{currenttype}}' className={(this.state.categorySlug == null) ? 'active' : ''}>All</a>
                        {this.state.categoryList.map(item => 
                            <a key={item.id} href='{{URL}}{{lang}}/posts/{{currenttype}}/{{ category.slug }}' className={(this.state.categorySlug == item.slug) ? 'active' : ''} data-filter={item.slug}>{item.title}</a>
                            )}
                        
                    </div>
              
        </div>
        )
    }
}

export default PostsHead;