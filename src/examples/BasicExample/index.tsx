import * as React from 'react';
import styled from 'styled-components';
import { StyledLink, LinkWrapper, CodeExampleGroup, CodeExampleTitle } from 'shared_components/shared_styles';
import CodeContainer from 'shared_components/CodeContainer/index';

const TempWrapper = styled.div `
    ${props => props.theme.blue_border_styles}

`;

interface IProps {

}

interface IState {

}

export default class BasicExample extends React.Component <IProps, IState> {
    private code_examples = [
        {
            title: "Main Thread",
            code: `
// note that in TS you have to do 'import * as <Name>'
import * as MyWorkerContructor from 'worker-loader!./path-to-my-workers/worker-entrypoint';

const myWorker = new MyWorkerContructor();

myWorker.onmessage = (event: MessageEvent) => {
    console.log('this is a message from the worker', event)
}

myWorker.postMessage("send a message to the worker")
`
        },
        {
            title: "worker.d.ts",
            code: `
declare module 'worker-loader!*' {
    class WebpackWorker extends Worker {
        constructor();
    }
    export default WebpackWorker;
}
`
        },
        {
            title: "Worker Context (worker-entrypoint.js)",
            code: `
const ctx: Worker = self as any;

self.onmessage = (event: MessageEvent) => {
    const result do_long_running_computation(event.data);
    console.log(event, result);
    self.postMessage(result);
}

self.postMessage("send a message to the main thread");
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
                        href={'https://developer.mozilla.org/en-US/docs/Web/API/Worker'}>
                        MDN: Worker
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers'}>
                        MDN: Using Web Workers
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API'}>
                        MDN: Web Worker API
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging'}>
                        MDN: Using Channel Messaging
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://caniuse.com/#feat=webworkers'}>
                        Can I Use: WebWorker
                        94% Global
                        97% USA
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://github.com/PendletonJones/tsworkerapp-pub'}>
                        Github: Full Example
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