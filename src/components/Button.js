import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends React.Component {
    static contextType = LanguageContext;
    render() {
        const text = this.context === 'english' ? 'Submit' : 'जमा करें'
        return (<div className="ui button primary">{text}</div>)
    }
}

export default Button;