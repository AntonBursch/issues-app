import Axios from 'axios';
import React from 'react';
import axios from 'axios';

interface AppProps {}
interface AppState {
    issues: any[];
}

class App extends React.Component<AppProps, AppState> {
    componentDidMount() {
        this.getIssues();
    }

    render() {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }

    async getIssues(): Promise<any> {
        try {
            const response = await axios.get('https://api.github.com/repos/octocat/hello-world/issues');
            console.log(response.data);
        } catch(error) {
            console.log(error);
        }
    }
}



export default App;
