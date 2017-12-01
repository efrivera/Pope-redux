import React, {Component} from 'react';
import {connect} from 'react-redux';

class MainHeader extends Component {

    createMenuList() {
        return this.props.sections.map((section) => {
            return (
                <li 
                    key={section.id}
                >
                    <a 
                        href={section.link} 
                        className={section.cssClass}>
                            {section.title}
                    </a>
                </li>
            );
        });
    }

    render() {
        return (
            <div className='main-header'>
                <h1 className='site-name'>Rule of Thumb</h1>
                <nav className='main-nav'>
                    <ul>
                        {this.createMenuList()}
                    </ul>
                </nav>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        sections: state.sections
    };
}

export default connect(mapStateToProps)(MainHeader);