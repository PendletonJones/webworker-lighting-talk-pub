import * as React from 'react';
import styled from 'styled-components';
import { StyledLink, LinkWrapper } from 'shared_components/shared_styles';
import { ImageContainer, SectionWrapper } from './styles';
import { Link } from 'react-router-dom';

const multilane = require('assets/multi-lane.jpg');
const singlelane = require('assets/single-lane.jpg');

const TempWrapper = styled.div `
    ${props => props.theme.blue_border_styles}
`;

const PointList = styled.ul`
    ${props => props.theme.blue_border_styles}

`;


const PointItem = styled.li`
    ${props => props.theme.blue_border_styles}
    font-size: 24px;
    margin: 8px;
`;



interface IProps {

}

interface IState {

}

export default class Intro extends React.Component <IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    public render() {
        return (
            <TempWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://stackoverflow.com/questions/26360878/long-running-loops-in-javascript-and-ui-responsiveness'}>
                        Stack Overflow: long running loop
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://github.com/PendletonJones/tsworkerapp-pub/tree/master'}>
                        Github: Presentation Repo
                    </StyledLink>
                </LinkWrapper>
                <SectionWrapper>
                    Single Threaded:
                    <ImageContainer
                        alt={'singlelane traffic'}
                        src={singlelane} />
                </SectionWrapper>
                <SectionWrapper>
                    Multi-Threaded
                    <ImageContainer
                        alt={'multilane traffic'}
                        src={multilane} />
                </SectionWrapper>
                <PointList>
                    <PointItem>
                        Cooperative Multi-Threading
                    </PointItem>
                    <PointItem>
                        For when setTimeout, setImmediate, requestAnimationFrame, requestIdleCallback are not enough
                    </PointItem>
                </PointList>
            </TempWrapper>
        );
    }
}