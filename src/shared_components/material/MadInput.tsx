import { StyledWrapper } from 'types';
import * as React from 'react';
import styled, { keyframes  } from 'styled-components';

interface InputWrapper {
    short?: boolean;

}

const shortablediv: StyledWrapper<InputWrapper, HTMLInputElement> = styled.div;

export const InputWrapper = shortablediv`
    ${props => props.theme.blue_border_styles}
    /* test properties */
    margin-right: 2px;
    margin-left: 2px;
    /*border: solid pink 1px;*/
    min-width: 0px;
    flex-shrink: 1;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-top: ${props => props.short ? '0px' : '32px'};
    /*padding-top: 32px;*/
`;

export const InputGroup = styled.div`
    position: relative;
    display: 'flex';
    flex-direction: column;
`;

export const MaterialInput = styled.input`
    /* 
        HERE HERE HERE
        - somehow have to make this a flex container.
        - one option might be to wrap in a div, and make this fit the container
        or something 

        ^ scratch that -- no idea why max-width has an affect here, but in combination
        with flex-grow in InputWrapper above the inputs seem to work correctly 
    */
    max-width: 20px;
    display: flex;
    flex-shrink: 1;
    /* normal properties below here */
    font-size: 18px;
    /* top | right | bottom | left */
    padding: 10px 0px 10px 0px;
    display: block;
    min-width: 100%;
    border: none;
    border-bottom: 1px solid #757575;
    &:focus {
        outline: none;
    };
`;

export const MaterialLabel = styled.div`
    position: absolute;
    color: #999;
    font-size: 18px;
    font-weight: normal;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
    input:focus ~ &, input:valid ~ & {
        top: -20px;
        font-size: 14px;
        color: #5264AE;
        z-index: 100;
    };

    input:focus ~ &, input:valid ~ & {
        top: -20px;
        font-size: 14px;
        color: #5264AE;
        z-index: 100;
    };
`;


export const FocusBar = styled.span`
    position: relative;
    display: block;
    &:before, &:after {
        content: '';
        height: 2px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: #5264AE;
        transition: 0.2s ease all;
    };

    &:before {
        left: 50%;
    };

    &:after {
        right: 50%;
    };

    input:focus ~ &:before, input:focus ~ &:after {
        width: 50%;
    };
`;


const inputHighlighter = keyframes`
    from  {
        background: #5264AE;
    }
    to    {
        width: 0px;
        background: transparent;
    }
`;

export const HighlightBar = styled.span`
    position: absolute;
    height: 60%;
    min-width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;

    input:focus ~ & {
        animation: ${inputHighlighter} 0.3s ease;
    }
`;

type Props = {
    label: string;
    short?: boolean;
};

interface State {

}

export default class MadInput extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {};
    }
    render() {
        const {label, short} = this.props;
        return (
            <InputWrapper
                short={short}>
                <InputGroup>
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
                </InputGroup>
            </InputWrapper>
        );
    }
}
