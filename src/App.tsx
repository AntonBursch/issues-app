import React from 'react';
import axios from 'axios';
import { Issue } from './models/Issue';
import { Issues } from './components/Issues';

interface AppProps {}
interface AppState {
    issues: Issue[];
}

class App extends React.Component<AppProps, AppState> {
    state = {
        issues: []
    };

    componentDidMount() {
        this.getIssues();
    }

    render() {
        return (
            <React.Fragment>
               <Issues issues={this.state.issues} />
            </React.Fragment>
        )
    }

    async getIssues(): Promise<void> {
        try {
            const response = await axios.get('https://api.github.com/repos/octocat/hello-world/issues');
            if(response) {
                if(response.status === 200) {
                    if(response.data) {
                        this.setState({
                            issues: response.data
                        });
                    } else {
                        console.log('ERROR: GET Issues returned response with null data');
                    }
                } else {
                    console.log(`ERROR: GET Issues returned status ${response.status}`);
                }
            } else {
                console.log('ERROR: GET Issues returned a null response');
            }
        } catch(error) {
            console.log(error);
        }
    }
}



export default App;
