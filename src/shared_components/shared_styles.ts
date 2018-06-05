
import styled from 'styled-components';

export const LinkWrapper = styled.div`
    ${props => props.theme.blue_border_styles}
    display: flex;
    margin: 8px;
`;

export const StyledLink = styled.a`
    ${props => props.theme.blue_border_styles}
    font-size: 24px;
`;

export const CodeExampleGroup = styled.div `
    ${props => props.theme.blue_border_styles}
    margin-top: 16px;
    margin-bottom: 16px;
`;

export const CodeExampleTitle = styled.div `
    ${props => props.theme.blue_border_styles}
    font-size: 24px;
`;


