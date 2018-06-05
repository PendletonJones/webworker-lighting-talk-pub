import * as React from 'react';
import { Maybe } from 'types';
import { Route, Link } from 'react-router-dom';
import MadButton from 'shared_components/material/MadButton';
import {
    MainNavbarWrapper,
    NavGroupCenter,
    BrandLink,
    NavWrapper,
    NavLinkWrapper,
} from './styles';

interface IProps {

}

interface IState {
    is_rippling: boolean;
    xcoord: number;
    ycoord: number;
    diameter: number;
};

interface IOuterProps {
    match: {
        path: string;
        params: any;
    };
};

export default class MainNavbar extends React.Component<IProps, IState> {
    private routes = [
        {path: '/intro', title: 'Intro'},
        {path: '/basic-example', title: 'Basic'},
        {path: '/message-channel', title: 'Message Channel'},
        {path: '/shared', title: 'Shared Worker'},
        {path: '/broadcast-channel', title: 'Broadcast Channel'},
        // { path: '/wrapped-function', title: 'Wrapped Function' },
        { path: '/caveats', title: 'Caveats' },
    ]
    constructor(props: IProps) {
        super(props);
        this.state = {
            is_rippling: false,
            xcoord: 0,
            ycoord: 0,
            diameter: 0,
        };
    }
    public render() {
        return (
            <MainNavbarWrapper>
                {this.routes.map((route) => (
                    <Route
                        path={route.path}
                        children={(props) =>
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                                to={route.path}>
                                <MadButton>
                                    <NavLinkWrapper
                                        match={!!props.match}>
                                        {route.title}
                                    </NavLinkWrapper>
                                </MadButton>
                            </Link>
                        } />
                ))}
            </MainNavbarWrapper>
        );
    }
};
