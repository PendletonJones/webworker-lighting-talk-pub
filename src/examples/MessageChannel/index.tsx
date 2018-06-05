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

export default class MessageChannelExample extends React.Component <IProps, IState> {
    private code_examples = [
        {
            title: "Main Thread",
            code: `
// note that in TS you have to do 'import * as <Name>'
import * as MyWorkerContructor from 'worker-loader!./path-to-my-workers/worker-entrypoint';

const myWorker = new MyWorkerContructor();

const mySecondWorker = new MyWorkerContructor();


myWorker.onmessage = (event: MessageEvent) => {
    console.log('this is a message from the first worker', event)
}

mySecondWorker.onmessage = (event: MessageEvent) => {
    console.log('this is a message from the second worker', event)
}

// create the channel
const worker_channel = new MessageChannel();

myWorker.postMessage('sending over the port to worker 1', [worker_channel.port1]);
mySecondWorker.postMessage('sending over the port to worker 2', [worker_channel.port1]);

// the second argument is a 'transferable' which can be type ArrayBuffer, MessagePort, or ImageBitmap
// transferables are nearly instantaneous and are 'transfered' instead of copied
// now the two workers have a MessageChannel to communicate without coordinating with
// the main thread

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
    self.postMessage("reply to the main thread", event);
    if(event.ports){
        // this is how we recieve a message from the other worker
    	event.ports[0].onmessage = () => {
    		console.log('message from the other side of the port');
        }
        // this is how we send a message to the other worker
    	event.ports[0].postMessage('sending a message through the port to the other worker');
    }
}
// you can still communicate to the main thread
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
                        href={'https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel'}>
                        MDN: MessageChannel
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://developer.mozilla.org/en-US/docs/Web/API/MessagePort'}>
                        MDN: MessagePort
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging'}>
                        MDN: Using_channel_messaging
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://developer.mozilla.org/en-US/docs/Web/API/Transferable'}>
                        MDN: Transferable
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://caniuse.com/#feat=channel-messaging'}>
                        Can I Use: Channel Messaging
                        96% USA
                        94% Global
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://github.com/PendletonJones/tsworkerapp-pub/tree/message_channel'}>
                        Github: Full Example with Channels
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