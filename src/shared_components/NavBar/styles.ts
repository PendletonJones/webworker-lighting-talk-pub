import { StyledWrapper } from 'types';
import styled from 'styled-components';

interface INavLinkProps {
    match: boolean;
}

const matchednavlink: StyledWrapper<INavLinkProps, HTMLDivElement> = styled.div;

export const MainNavbarWrapper = styled.div`
    position: relative;
    z-index: 100;
    ${props => props.theme.shadow(4)};
    display: flex;
    justify-content: center;
    min-height: 42px;
    max-height: 42px;
    background: ${props => props.theme.material_blue[700]};
`;



export const NavGroupCenter = styled.div`
    /* flex-grow: 1; */
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const BrandLink = styled.div`
    color: white;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
`;

export const NavWrapper = styled.div`
    ${props => props.theme.app_font_light}
    display: flex;
    padding: 10px;
    color: white;
`;

export const NavLinkWrapper = matchednavlink`
    ${props =>
        props.match
            ? props.theme.app_font_regular
            : props.theme.app_font_light
    };
    ${props =>
        props.match
            ? `
                border-bottom: 3px;
                border-bottom-color: white;
                border-bottom-style: solid;
            `
            : `
                border-bottom: 3px;
                border-bottom-color: ${props.theme.color_primary};
                border-bottom-style: solid;
            `
    };
    transition-property: border-bottom;
    transition-duration: .3s;
    transition-timing-function: ease-in-out;
    padding: 10px;
`;
