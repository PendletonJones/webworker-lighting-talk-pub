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

export default class BroadcastChannelExample extends React.Component <IProps, IState> {
    private code_examples = [
        {
            title: "Tab 1 Context",
            code: `
const mytab1channel = new BroadcastChannel('test_channel');
mytab1channel.onmessage = (event: MessageEvent) => {
    console.log('event recieved over broadcast channel');
}
// this will be recieve by all subscribers
mytab1channel.postMessage('broadcasting from tab 1');
`
        },
        {
            title: "Tab 2 Context",
            code: `
const mytab2channel = new BroadcastChannel('test_channel');
mytab2channel.onmessage = (event: MessageEvent) => {
    // should recieve 'broadcasting from tab 1' becasue we sent that message
    console.log('event recieved over broadcast channel');
}
`
        },
        {
            title: "Worker 1 Context",
            code: `
const myworkerchannel = new BroadcastChannel('test_channel');
myworkerchannel.onmessage = (event: MessageEvent) => {
    // should recieve 'broadcasting from tab 1' becasue we sent that message
    console.log('event recieved over broadcast channel');
}
`
        },
        {
            title: "Worker 2 Context",
            code: `
const myotherworkerchannel = new BroadcastChannel('test_channel');
myotherworkerchannel.onmessage = (event: MessageEvent) => {
    // should recieve 'broadcasting from tab 1' becasue we sent that message
    console.log('event recieved over broadcast channel');
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
                        href={'https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel'}>
                        MDN: BroadcastChannel
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API'}>
                        MDN: Broadcast_Channel_API
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink
                        target={'_blank'}
                        rel={'noopener'}
                        href={'https://caniuse.com/#feat=broadcastchannel'}>
                        Can I Use: Broadcast Channel
                        71% Global
                        47% USA
                    </StyledLink>
                </LinkWrapper>
                {this.code_examples.map((example) => (
                    <CodeExampleGroup key={example.title}>
                        <CodeExampleTitle>
                            {example.title}
                        </CodeExampleTitle>
                        <CodeContainer code={example.code}/>
                    </CodeExampleGroup>
                ))}
            </TempWrapper>
        );
    }
}