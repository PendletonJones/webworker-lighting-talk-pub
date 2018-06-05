const DEV_BORDERS = false;

import {
    material_red,
    material_pink,
    material_purple,
    material_deep_purple,
    material_indigo,
    material_blue,
    material_light_blue,
    material_cyan,
    matieral_teal,
    material_green,
    material_light_green,
    material_lime,
    material_yellow,
    material_amber,
    material_orange,
    material_deep_orange,
    material_brown,
    material_grey,
} from 'utility/colors';

const button_styles = {
    button_styles: `
        color: white;
        font-weight: bold;
        font-size: 18px;

        margin: 10px;
        padding: 8px;

        user-select: none;

        display: flex;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
        border-radius: 3px;
    `,
};

const dev_borders = {
    orange_border_styles: `${
        DEV_BORDERS
            ?
            `
        border-style: solid;
        border-width: 2px;
        border-color: orange;
        `
            :
            ``
        }`,
    blue_border_styles: `${
        DEV_BORDERS
            ?
            `
        border-style: solid;
        border-width: 2px;
        border-color: blue;
        `
            :
            ``
        }`,
    red_border_styles: `${
        DEV_BORDERS
            ?
            `
        border-style: solid;
        border-width: 2px;
        border-color: red;
        `
            :
            ``
        }`,
};

const font_values = {
    app_font_v_light: `
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
    `,
    app_font_v_light_italic: `
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        font-style: italic;
    `,
    app_font_light: `
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
    `,
    app_font_light_italic: `
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-style: italic;
    `,
    app_font_regular: `
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    `,
    app_font_medium: `
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    `,
    app_font_bold: `
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
    `,
};

const shadows = {
    /* the number is the "dp" which is the "height" of the component */
    2: `
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14),
                    0 1px 5px 0 rgba(0, 0, 0, .12),
                    0 3px 1px -2px rgba(0, 0, 0, .2);
    `,
    3: `
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14),
                    0 1px 8px 0 rgba(0, 0, 0, .12),
                    0 3px 3px -2px rgba(0, 0, 0, .4);
    `,
    4: `
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14),
                    0 1px 10px 0 rgba(0, 0, 0, .12),
                    0 2px 4px -1px rgba(0, 0, 0, .4);
    `,
    6: `
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .14),
                    0 1px 18px 0 rgba(0, 0, 0, .12),
                    0 3px 5px -1px rgba(0, 0, 0, .4);
    `,
    8: `
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, .14),
                    0 3px 14px 2px rgba(0, 0, 0, .12),
                    0 5px 5px -3px rgba(0, 0, 0, .4);
    `,
    16: `
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .14),
                    0  6px 30px 5px rgba(0, 0, 0, .12),
                    0  8px 10px -5px rgba(0, 0, 0, .4);
    `,
    24: `
        box-shadow: 0  9px 46px  8px rgba(0, 0, 0, .14),
                    0 24px 38px  3px rgba(0, 0, 0, .12),
                    0 11px 15px -7px rgba(0, 0, 0, .4);
    `,
};

const theme_colors = {
    color_primary: material_blue[700],
    color_primary_light: material_blue[700],
    color_primary_dark: material_blue[700],
    color_secondary: material_blue[700],
    color_secondary_light: material_blue[700],
    color_secondary_dark: material_blue[700],
    color_primary_text: '#ffffff',
    color_secondary_text: '#000000',
};

const shadow = (height: number) => shadows[height];

export const theme = {
    card_styles: `
        ${dev_borders.blue_border_styles}
        background: white;
        margin: 8px;
        ${shadow(4)};
        min-height: 50px;
        // max-height: 400px;
        min-width: 300px;
        max-width: 300px;
        flex-grow: 1;
        flex-shrink: 0;
        padding: 10px;
        transition: all 400ms cubic-bezier(0.165, 0.840, 0.440, 1.000);
        border-radius: 2px;
        &:hover {
            ${shadow(8)};
        };
    `,
    // material color scheme
    ...button_styles,
    ...dev_borders,
    ...font_values,
    ...theme_colors,
    /* pick from material colors */
    material_red,
    material_pink,
    material_purple,
    material_deep_purple,
    material_indigo,
    material_blue,
    material_light_blue,
    material_cyan,
    matieral_teal,
    material_green,
    material_light_green,
    material_lime,
    material_yellow,
    material_amber,
    material_orange,
    material_deep_orange,
    material_brown,
    material_grey,
    shadow,
    pixels: (scale: number) => `${scale * 8}px`,
};
