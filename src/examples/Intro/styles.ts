import styled from 'styled-components';


export const SectionWrapper = styled.div `
    ${props => props.theme.blue_border_styles}
    display: flex;
    flex-direction: column;
    font-size: 24px;
    margin-top: 48px;
    align-items: flex-start;
`;



export const ImageContainer = styled.img `
    ${props => props.theme.blue_border_styles}
    max-height: 300px;
    min-height: 300px;
`;
