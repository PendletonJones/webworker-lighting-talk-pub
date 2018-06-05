import * as React from 'react';
import { StyledLink, LinkWrapper, CodeExampleGroup, CodeExampleTitle } from 'shared_components/shared_styles';
import styled from 'styled-components';
import CodeContainer from 'shared_components/CodeContainer/index';

const TempWrapper = styled.div `
    ${props => props.theme.blue_border_styles}

`;

interface IProps {

}

interface IState {

}

export default class WrappedFunctionExample extends React.Component <IProps, IState> {
    private code_examples = [
        {
            title: "Creation Context",
            code: `
const blob = new Blob([
    /*
        make the function inline here
    */
], { type: "text/javascript" });

const worker = new Worker(window.URL.createObjectURL(blob));

worker.onmessage = (event: MessageEvent) => {
    console.log("Received: " + event.data);
}

worker.postMessage("hello"); // Start the worker.
`
        },
    ]
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
                        href={'https://stackoverflow.com/questions/5408406/web-workers-without-a-separate-javascript-file'}>
                        Stack Overflow: web-workers-without-a-separate-javascript-file
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://developer.mozilla.org/en-US/docs/Web/API/Blob'}>
                        MDN: Blob
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL'}>
                        MDN: createObjectURL
                    </StyledLink>
                </LinkWrapper>
                {this.code_examples.map((example) => (
                    <CodeExampleGroup key={example.title}>
                        <CodeExampleTitle>
                            {example.title}
                        </CodeExampleTitle>
                        <CodeContainer code={example.code} />
                    </CodeExampleGroup>
                ))}
            </TempWrapper>
        );
    }
}