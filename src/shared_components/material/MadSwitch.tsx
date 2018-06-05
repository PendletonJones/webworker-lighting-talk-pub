import * as React from 'react';
import styled from 'styled-components';
import { StyledWrapper } from 'types';

interface ISwitchLabel {
	checked: boolean;
	disabled?: boolean;
};

const switchlabel: StyledWrapper<ISwitchLabel, HTMLDivElement> = styled.label;

const MadSwitchDemoWrapper = styled.div`
	border: solid blue 1px;
	margin: 10px;
	padding: 10px;
	background: #EEEEEE;
`;

const MadSwitchWrapper = styled.div`
	/*border: solid green 1px;*/
`;

const MadSwitchRow = styled.div`
	/*border: solid blue 1px;*/

	margin-bottom: 40px;
`;

const MadSwitchInput = styled.input`
	/*border: solid blue 1px;*/
	display: none;
`;

const MadSwitchLabel = switchlabel`
	/*border: solid blue 1px;*/
	position: relative;
	display: block;
	height: 20px;
	width: 44px;
	background: #898989;
	border-radius: 100px;
	cursor: pointer;
	transition: all .3s ease;
	&:after {
		position: absolute;
		left: -2px;
		top: -3px;
		display: block;
		width: 26px;
		height: 26px;
		border-radius: 100px;
		background: white;
		box-shadow: 0px 3px 3px rgba(#000,.05);
		content: '';
		transition: all .3s ease;
	};
	
	&:active {
		&:after {
			transform: scale(1.15, .85);
		};
	};

	${props => props.checked && `
		background: #6FBEB5;
		&:after {
			left: 20px;
			background: #179588;
		};
	`}

	${props => props.disabled && `
		background: #D5D5D5;
		pointer-events: none;
		&:after {
		  background: #BCBDBC;
		};
	`}
`;

interface IProps {
	
}
interface IState {
	checked: boolean;
}

class MadSwitch extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = { checked: false };
    }
    render(){
        return (
            <MadSwitchDemoWrapper>
            	<MadSwitchWrapper
    				onClick={() => {console.log("toggle"); this.setState((state) => ({checked: !this.state.checked}))}}>
            		<MadSwitchRow>
            			<MadSwitchInput/>
            			<MadSwitchLabel
            				checked={this.state.checked}/>
            		</MadSwitchRow>
            		<MadSwitchRow>
            			<MadSwitchInput/>
            			<MadSwitchLabel
            				disabled={true}
            				checked={this.state.checked}/>
            		</MadSwitchRow>
            	</MadSwitchWrapper>
            	<pre>
            		{JSON.stringify(this.state.checked, null, 4)}
            	</pre>
            </MadSwitchDemoWrapper>
        );
    }
}

export default MadSwitch
