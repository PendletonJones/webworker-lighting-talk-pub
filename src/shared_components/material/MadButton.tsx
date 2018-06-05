import * as React from 'react';
import { Maybe } from 'types';
import styled, { keyframes } from 'styled-components';
import offset from 'utility/document-offset';
// import offset from 'document-offset';
import { StyledWrapper } from 'types';

console.warn('offset', offset);

interface IProps {
    children: any;
}

interface IState {
    is_rippling: boolean,
    xcoord: number,
    ycoord: number,
    diameter: number,
}

interface IRippleProps {
    diameter: number;
    xcoord: number;
    ycoord: number;
}

const ripplewavediv: StyledWrapper<IRippleProps, HTMLDivElement> = styled.div;

const rippleElemKeyframe = keyframes`
    0%   {box-shadow: 0 0 0 rgba(0,0,0,0.0);}
    100% {box-shadow: 0 0 0 rgba(0,0,0,0.0);}
`;

const rippleWaveKeyframe = keyframes`
    to {
        transform: scale(24);
        opacity:0;
    }
`;

const ANIMATION_DURATION = `350ms`;

const RippleButton = styled.div`
    /* inherited styles */
    transition-property: border-bottom;
    transition-duration: .3s;
    transition-timing-function: ease-in-out;
    /*padding: 10px;*/
    position: relative;
`;

const RippleElem = styled.div`
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    overflow: hidden;
    transform: translateZ(0);
    border-radius: inherit;
    pointer-events: none;
    animation: ${rippleElemKeyframe} 2s forwards;
    animation-duration: ${ANIMATION_DURATION};
    animation-timing-function: ease-in-out;
`;

const RippleWave = ripplewavediv`
    background: white;
    backface-visibility: hidden;
    position: absolute;
    border-radius: 50%;
    transform: scale(0.7); -webkit-transform: scale(0.7);
    /* guide says that its .45 */
    opacity: 0.35;
    animation: ${rippleWaveKeyframe} 2s forwards;
    animation-duration: ${ANIMATION_DURATION};
    animation-timing-function: ease-in-out;
    width: ${props => props.diameter}px;
    height: ${props => props.diameter}px;
    left: ${props => props.xcoord - (props.diameter/2)}px;
    top: ${props => props.ycoord - (props.diameter/2)}px;
`;

interface IOffs {left: number, top: number};

export default class MaterialButton extends React.Component<IProps, IState> {
    private ripplebutton: Maybe<HTMLElement>;
    constructor(props: IProps){
        super(props);
        this.state = {
            is_rippling: false,
            xcoord: 0,
            ycoord: 0,
            diameter: 0,
        };
        this.ripplebutton = undefined;
    }
    public render() {
        return (
            <RippleButton
                innerRef={this.setRippleButton}
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                    const offs: Maybe<IOffs> = offset(this.ripplebutton);
                    console.log('offs', offs);
                    if(offs){
                        const xcoord = event.pageX - offs.left;
                        const ycoord = event.pageY - offs.top;
                        if(this.ripplebutton){
                            const offsetHeight = this.ripplebutton.offsetHeight || 0;
                            const offsetWidth = this.ripplebutton.offsetWidth || 0
                            const diameter = Math.min(offsetHeight, offsetWidth, 100);
                            this.setState({
                                is_rippling: true,
                                xcoord,
                                ycoord,
                                diameter,
                            });
                        }
                    }
                }}>
                {this.state.is_rippling &&
                    <RippleElem
                        onAnimationStart={() => {}}
                        onAnimationEnd={() => {
                            this.setState({
                                is_rippling: false,
                                xcoord: 0,
                                ycoord: 0,
                                diameter: 0,
                            });
                        }}>
                        <RippleWave
                            onAnimationStart={() => {}}
                            onAnimationEnd={() => {}}
                            xcoord={this.state.xcoord}
                            ycoord={this.state.ycoord}
                            diameter={this.state.diameter}
                        />
                    </RippleElem>
                }
                {this.props.children}
            </RippleButton>
        );
    }
    private setRippleButton = (ripplebutton: Maybe<HTMLElement>) => {
        if(ripplebutton instanceof HTMLElement){
            this.ripplebutton = ripplebutton
        }else{
            console.warn('ripple button not found');
        };
    };
}
