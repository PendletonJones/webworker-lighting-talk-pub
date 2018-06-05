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

export default class SharedWorkerExample extends React.Component <IProps, IState> {
    private code_examples = [
        {
            title: "Tab 1 Context",
            code: `
const myWorker = new SharedWorker("worker.js");

myWorker.port.postMessage('send a value over from tab 1');

myWorker.port.onmessage = function(event: MessageEvent) {
    console.log('event from the shared worker', event);
}
`
        },
        {
            title: "Tab 2 Context",
            code: `
const myWorker = new SharedWorker("worker.js");

myWorker.port.postMessage('send a value over from tab 2');

myWorker.port.onmessage = function(event: MessageEvent) {
    console.log('event from the shared worker', event);
}
`
        },
        {
            title: "Worker Context",
            code: `
const ctx: ShareWorker = self as any;

// onconnect is called for each tab that connects
let allports: Array<MessagePort> = [];

ctx.onconnect = function(event: MessageEvent) {
    const port: MessagePort = event.ports[0];

    // store the port in an array
    allports = [...allports, port];

    port.postMessage('connection has been accepted');

    port.onmessage = function(event: MessageEvent) {

        // post a message back to the tab that sent it.
        port.postMessage('reply to tab from the shared worker');

        // or broadcast a message to all ports
        allports.forEach((port: MessagePort) => {
            port.postMessage('sending a message to all tabs');
        })
    }
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
                        href={'https://caniuse.com/#feat=sharedworkers'}>
                        Can I Use: Shared Worker
                        20% USA
                        44% Global
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker'}>
                        MDN: SharedWorker
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://github.com/mdn/simple-shared-worker'}>
                        Github: Mozilla SharedWorker Example
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