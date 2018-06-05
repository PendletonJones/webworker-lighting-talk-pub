import * as React from 'react';
import styled from 'styled-components';
import { StyledLink, LinkWrapper, CodeExampleGroup, CodeExampleTitle } from 'shared_components/shared_styles';
import CodeContainer from 'shared_components/CodeContainer/index';

const TempWrapper = styled.div `
    ${props => props.theme.blue_border_styles}

`;

const CaveatList = styled.ul `
    ${props => props.theme.blue_border_styles}

`;


const CaveatItem = styled.li `
    ${props => props.theme.blue_border_styles}
    font-size: 24px;
    margin: 8px;
`;


interface IProps {

}

interface IState {

}

export default class Caveats extends React.Component <IProps, IState> {
    private code_examples = [
        {
            title: "Create Worker Inline",
            code: `
function wrapFunctionInWorker(func: Function){
    const blob = new Blob([
        // wrap function in onmessage and postMessage handlers
        \`
            self.onmessage = (event) => {
                const result  = (\${func.toString()})(event.data),
                self.postMessage(result);
            }
        \`
    ], { type: "text/javascript" });

    const worker = new Worker(window.URL.createObjectURL(blob));

    worker.onmessage = (event: MessageEvent) => {
        console.log("Received: " + event.data);
    }

    worker.postMessage("hello"); // Start the worker.
}

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
                        href={'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API'}>
                        MDN: Service_Worker_API
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://caniuse.com/#feat=serviceworkers'}>
                        Can I Use: Service Worker
                        83% Global
                        75% USA
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://github.com/PendletonJones/zorigami-pub'}>
                        Github: Zorigami
                    </StyledLink>
                </LinkWrapper>
                <CaveatList>
                    <CaveatItem>
                        Support for SharedWorker and Broadcast Channel is Poort
                    </CaveatItem>
                    <CaveatItem>
                        Use Transferables, copying things can get slow
                    </CaveatItem>
                    <CaveatItem>
                        Use Observable or wrap in Promise, managing ports can get tedious
                    </CaveatItem>
                    <CaveatItem>
                        Create an HOC with React or Service with Angular, make it
                        easy to get results for display and tie your postMessage to DOM events
                    </CaveatItem>
                    <CaveatItem>
                        Beware of bundle size, may want to use DLLs or async imports becasue
                        the worker will have another copy of the code.
                    </CaveatItem>
                    <CaveatItem>
                        No DOM access, different navigator refernce, totally separate context
                    </CaveatItem>
                    <CaveatItem>
                        Difficult to create on the fly, could be risky.
                    </CaveatItem>
                </CaveatList>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://stackoverflow.com/questions/5408406/web-workers-without-a-separate-javascript-file'}>
                        Stack Overflow: web-workers-without-a-separate-javascript-file
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