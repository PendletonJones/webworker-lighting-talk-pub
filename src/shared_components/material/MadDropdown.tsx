import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import {
    InputGroup,
    MaterialInput,
    HighlightBar,
    FocusBar,
    MaterialLabel,
    InputWrapper,
} from 'shared_components/material/MadInput';

const dropdownKeyframe = keyframes`
    from {
        min-height: 0px;
    }
    to {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        min-height: 400px;
    }
`;

const DropdownList = styled.div`
    position: absolute;
    background: white;
    min-width: 100%;
    margin-top: 8px;
    transition: all 5s ease-in-out;
    /* material shadow */
    input:focus ~ & {
        animation-name: ${dropdownKeyframe};
        animation-fill-mode: forwards;
        animation-duration: 0.3s;
        animation-timing-function: ease;
    };
    input:not(:focus) ~ {
        animation-name: ${dropdownKeyframe};
        animation-fill-mode: backwards;
        animation-duration: 0.3s;
        animation-timing-function: ease;
    };
`;

type Props = {
    label: string;
    short?: boolean;
};

interface State {

}

export default class MadDropdown extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {};
    };
    public render() {
        const {label, short} = this.props;
        return (
            <InputWrapper
                short={short}>
                <InputGroup
                    onClick={() => {
                        console.log('show dropdown');
                        /*
                            might show dropdown here, maybe use "not" selector
                            to show the unmount animation
                        */
                    }}>
                    <MaterialInput
                        placeholder={short ? label : ''}
                        type="text"
                        required={true}/>
                    <HighlightBar/>
                    <FocusBar/>
                    {short ||
                        <MaterialLabel>
                            {label}
                        </MaterialLabel>
                    }
                    <DropdownList
                        onAnimationEnd={() => {
                            console.log('animation ending');
                        }}
                        onAnimationStart={() => {
                            console.log('animation starting');
                        }}/>
                </InputGroup>
            </InputWrapper>
        );
    };
};
