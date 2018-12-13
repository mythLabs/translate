import React from 'react';
import UserCreate from './UserCreate';

class App extends React.Component {
    state = {language: 'english'}

    onLanguagechange = language => {
        this.setState({language})
    }

    render() {
        return (
            <div className="ui container">
             <div>
                 Select a language: 
                 <i className="flag us" onClick={() => this.onLanguagechange('english') }/>
                 <i className="flag in" onClick={() => this.onLanguagechange('hindi') }/>
             </div>
             <UserCreate />
            </div>
        ) 
    }

}

export default App;