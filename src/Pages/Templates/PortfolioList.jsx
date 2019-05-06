import React from 'react';
import ReactDOM from 'react-dom';

class PortfolioList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        /*axios.get('http://api.kanni.loc/main')
            .then(response => response.data())
            .then(test => this.setState({ test }))
            .catch(error=> console.error(error.message));*/
    }
    render(){
        return(
            <div class="projectslist">


                <div class="items {{post.categorylist|join(' ')}}">
                    <div class="itemover" style="background:{{ post.extras.color }}">
                        <div class="texts">
                            <h2>title</h2>
                            <p>
                                <a href="{{URL}}{{lang}}/posts/{{categories[cats].type}}/{{cats}}" target="_blank"></a>
                            </p>
                            <a class="readmore" href="{{URL}}{{lang}}/posts/{{currenttype}}/{{poscategory}}/view/{{post.slug}}">View More</a>
                        </div>
                    </div>
                    <img src="{{post.thumb_image}}" />
                </div>
            </div>
        )
    }
}

export default PortfolioList;