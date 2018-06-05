import * as React from 'react';
import styled from 'styled-components';
import { StyledWrapper } from 'types';
import { throttle } from 'lodash';

/*
    Things to Implement
    - click anywhere on the bar to jump to that location.
    - hover on the bar, show highlight up to that point
    - show styles on hover for the slider.
*/

const ReactSliderWrapper = styled.div `
    ${props => props.theme.blue_border_styles}
    display: flex;
    margin: 16px;
    margin-bottom: 32px;
`;

const Timeline = styled.div `
    ${props => props.theme.blue_border_styles}
    flex-grow: 1;
    border-bottom: solid gray 2px;
    align-items: center;
    max-height: 0px;
    min-height: 0px;
    border-radius: 1px;
`;

const ProgressBarWrapper = styled.div `
    ${props => props.theme.blue_border_styles}
    /* border: solid orange 1px; */
    position: relative;
    display: flex;
    flex-grow: 1;
    /* margin: 16px; */
`;

const PERCENT = 100;

interface IHandleProps {
    percent: number;
    mousing: boolean;
}

const styledhandle: StyledWrapper<IHandleProps, HTMLDivElement> = styled.div;

const ProgressBar = styledhandle `
    ${props => props.theme.blue_border_styles}
    position: absolute;
    flex-grow: 1;
    border-bottom: solid #5264AE 4px;
    border-radius: 1px;
    align-items: center;
    max-height: 0px;
    min-height: 0px;
    min-width: ${(props) => JSON.stringify(props.percent)}%;
    bottom: -1px;
`;

const Handle = styledhandle `
    ${props => props.theme.blue_border_styles}
    position: absolute;
    left: ${(props) => JSON.stringify(props.percent - 2)}%;
    bottom: -6px;
    /* min-height: 10px;
    min-width: 10px; */
    border: solid #5264AE 7px
    border-radius: 7px;
    box-shadow: ${props => props.mousing ? '0px 0px 0px 4px rgba(0,0,0,0.4)' : 'unset'};

    &:hover {
        cursor: ew-resize;
    }
`;
const TextContainer = styled.div `
    ${props => props.theme.blue_border_styles}

`;

const DragGhost = styled.div `
    ${props => props.theme.blue_border_styles}
    min-height: 1px;
    max-height: 1px;
    min-width: 1px;
    max-width: 1px;
    background-color: white;
    opacity: 10%;
    position: relative;
    top: 8px;
    left: 8px;
`;

interface IRecentPosition {
    screenX: number;
    screenY: number;
    pageX: number;
    pageY: number;
}

interface IProps {
    onChangeHander: (percent: number) => void;
    percent: number;
}

interface IState {
    recent_position: IRecentPosition;
    mousing: boolean;
}

export default class ReactSlider extends React.Component <IProps, IState> {
    private ghost_ref: HTMLElement;
    private timeline_ref: HTMLElement;
    private setPercent = throttle((percent: number) => {
        this.props.onChangeHander(percent);
        // this.setState({ percent });
    }, 10);
    constructor(props: IProps) {
        super(props);
        this.state = {
            mousing: false,
            recent_position: {
                screenX: 0,
                screenY: 0,
                pageX: 0,
                pageY: 0,
            }
        };
    }
    public render() {
        return (
            <ReactSliderWrapper>
                <ProgressBarWrapper>
                    <Timeline
                        innerRef={(timeline_ref: HTMLElement) => {
                            this.timeline_ref = timeline_ref;
                        }} />
                    <ProgressBar
                        mousing={this.state.mousing}
                        percent={this.props.percent}/>
                    <Handle
                        mousing={this.state.mousing}
                        percent={this.props.percent}
                        draggable={true}
                        onDragStart={(event: React.DragEvent<HTMLDivElement>) => {
                            event.dataTransfer.setDragImage(this.ghost_ref, 0, 0);
                            this.setState({mousing: true});
                        }}
                        onDragEnd={(event: React.DragEvent<HTMLDivElement>) => {
                            this.setState({ mousing: false });
                        }}
                        onDrag={(event: React.DragEvent<HTMLDivElement>) => {
                            const position = {
                                screenX: event.screenX,
                                screenY: event.screenY,
                                pageX: event.pageX,
                                pageY: event.pageY,
                            };
                            if(
                                position.screenX === 0
                                && position.screenY === 0
                                && position.pageX === 0
                                && position.pageY === 0
                            ){ return; }
                            const boundingRect = this.timeline_ref.getBoundingClientRect();
                            const distance_from_left = position.pageX - boundingRect.left;
                            const distance_from_right = position.pageX - boundingRect.right;

                            const capped_distance_from_left = distance_from_left <= 0 ? 0 : distance_from_left;
                            const capped_distance_from_right = Math.abs(distance_from_right >= 0 ? 0 : distance_from_right);

                            let new_percent = 0;
                            if(capped_distance_from_left === 0){
                                new_percent = 0;
                                this.setPercent(new_percent);
                            }
                            else if(capped_distance_from_right === 0){
                                new_percent = 100;
                                this.setPercent(new_percent);
                            }
                            else {
                                new_percent = Math.round(100 * (capped_distance_from_left / (boundingRect.right - boundingRect.left)));
                                this.setPercent(new_percent);;
                            }
                        }}
                        onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => {
                            console.log('onmousedown');
                        }}/>
                </ProgressBarWrapper>
                <DragGhost
                    innerRef={(ghost_ref: HTMLElement) => {
                        this.ghost_ref = ghost_ref;
                    }}/>
            </ReactSliderWrapper>
        );
    }

}