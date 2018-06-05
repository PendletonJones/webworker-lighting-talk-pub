import * as React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { theme } from 'utility/theme';
import './App.css';


import Intro from './examples/Intro/index';
import BasicExample from './examples/BasicExample/index';
import MessageChannelExample from './examples/MessageChannel/index';
import SharedWorkerExample from './examples/SharedWorker/index';
import BroadcastChannelExample from './examples/BroadcastChannel/index';
import MainNavbar from './shared_components/NavBar/index';
import WrappedFunctionExample from './examples/WrappedFunction/index';
import Caveats from './examples/Caveats/index';

export const StyledLink = styled.a`
    border: solid blue 1px;
`;
const AppContainer = styled.div `
    ${props => props.theme.blue_border_styles}
    font-size: 16px;
    font-family: sans-serif;
`;

const ExampleContainer = styled.div `
    ${props => props.theme.blue_border_styles}
    padding: 48px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: scroll;
`;



class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <ThemeProvider
                    theme={theme}>
                    <AppContainer>
                        <Helmet>
                            <title>
                                Webworker.rocks
                            </title>
                        </Helmet>
                        <MainNavbar />
                        <ExampleContainer>
                            <Route
                                path={'/intro'}
                                component={Intro} />
                            <Route
                                path={'/basic-example'}
                                component={BasicExample} />
                            <Route
                                path={'/message-channel'}
                                component={MessageChannelExample} />
                            <Route
                                path={'/shared'}
                                component={SharedWorkerExample} />
                            <Route
                                path={'/wrapped-function'}
                                component={WrappedFunctionExample} />
                            <Route
                                path={'/broadcast-channel'}
                                component={BroadcastChannelExample} />
                            <Route
                                path={'/caveats'}
                                component={Caveats} />
                        </ExampleContainer>
                    </AppContainer>
                </ThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;
