import * as React from 'react';
import styled from 'styled-components';
import { initHighlightingOnLoad, highlightBlock } from 'highlight.js';

import 'utility/highlight/styles/androidstudio.css';

initHighlightingOnLoad();

const CodeWrapper = styled.div `
    ${props => props.theme.blue_border_styles}
    text-align: left;
    display: flex;
`;

interface IProps {
    code: string;
}

interface IState {

}

export default class CodeContainer extends React.Component <IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    public render() {
        return (
            <CodeWrapper>
                <code
                    style={{
                        whiteSpace: 'pre',
                        flexGrow: 1,
                    }}
                    ref={(block: HTMLElement) => {
                        if(block){
                            try {
                                highlightBlock(block);
                            } catch (error) {
                                console.warn(error);
                            }
                        }
                    }}
                    className={"typescript"}>
                    {this.props.code}
                </code>
            </CodeWrapper>
        );
    }
}