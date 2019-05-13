import React from 'react';

import UlList from './Elements/UlLlist';

import mainMenu from '../data/menu';
import categories from '../data/categories';

class InnerHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: mainMenu,
            categorySlug: this.props.match.params.category,
            categoryList: null,
            typeList: null
        }
        this.handleLangChange = this.handleLangChange.bind(this);
    }


    componentWillMount(){
      this.setState({
            categoryList:categories
      });
    }
    
    handleLangChange(lang) {
        this.props.handleAppLangChange(lang);
    }
    
    render() {
        return(

            <div className="projectinsidehead">
                <div className="headertop">
                    <div className="logoname"><span>Kanni Farhad</span></div>
                    <div className="headermenu">
                        <UlList 
                                lang={this.props.lang}
                                LangClicked={this.handleLangChange} 
                                menu={this.props.menuData} 
                                config={this.props.config}
                                listClass='headmenu'
                                icons={true}
                                categorySlug={this.state.categorySlug} />
                    </div>

                <div className="clear"></div>
                </div>

                    <div className="categories">
                        {/* <a href='{{URL}}{{lang}}/posts/{{currenttype}}' className={(this.state.categorySlug == null) ? 'active' : ''}>All</a>
                        {this.state.categoryList.map(item => 
                            <a key={item.id} href='{{URL}}{{lang}}/posts/{{currenttype}}/{{ category.slug }}' className={(this.state.categorySlug == item.slug) ? 'active' : ''} data-filter={item.slug}>{item.title}</a>
                            )} */}
                    </div>
              
        </div>
        )
    }
}

export default InnerHeader;