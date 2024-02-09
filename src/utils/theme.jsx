import {
  ThemeProvider,
  createGlobalStyle,
  StyleSheetManager,
} from 'styled-components';

import isPropValid from '@emotion/is-prop-valid';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

h1,
h2,
h3,
p {
  margin: 0;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;

const theme = {
  mediaPoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1280px',
  },
  media: {
    miniPhone: 'screen and (min-width: 320px)',
    phone: 'screen and (min-width: 480px)',
    tab: 'screen and (min-width: 768px)',
    desk: 'screen and (min-width: 1280px)',
  },
  mediaMax: {
    phone: 'screen and (max-width: 480px)',
    tab: 'screen and (max-width: 768px)',
    desk: 'screen and (max-width: 1280px)',
  },
  mediaRetina: {
    retinaSize:
      '(min-device-pixel-ratio: 2), ' +
      '(min-resolution: 192dpi), ' +
      '(min-resolution: 2dppx)',
  },
  fonts: {
    main: 'Roboto, san-serif',
    placeholders: 'Inter, san-serif',
  },
  fontSizes: {
    xs: '12px',
    search: '14px',
    s: '16px',
    m: '20px',
    l: '24px',
    // xl: '28px',
    // title: '48px',
    // heroTitle: '68px',
  },
  lineHeights: {
    main: 1.67,
  },
  fontWeiths: {
    normal: '400',
    semi: '500',
    semiBold: '600',
    bold: '700',
  },
  shadows: {
    default: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    // hover: '7px 13px 14px rgba(116, 177, 232, 0.24)',
    // promo: '3px 8px 19px rgba(244, 196, 48, 0.8)',
  },
  colors: {
    primaryColor: '#ffffff',
    accentColor: '#ff6b01',
    buttonColor: '#111111',
    buttonModalNavColor: '#111111',
    buttonHeaderNavColor: '#ffffff',
    textColor: '#111111',
    titleColor: '#111111',
    backgroundColor: '#FEF9F9',
    buttonOutline: 'none',
    borderButtonBlack: 'solid 1px #111111',
    borderButtonWhite: 'solid 1px #ffffff',
    borderButtonAct: 'solid 1px #ff6b01',
    inputBorder: 'solid 1px #ffffff',
    inputOutline: 'none',
    backgroundModal: 'transparent',
    inputText: '#8c8c8c',
    inputBackground: '#ffffff',
    notificationColorTheme: 'ligth',

    // pagginationOutline: 'none',
    // link: '#54ADFF',
    // grey: '#888888',
    // yellow: '#FFC107',
    // green: '#00C3AD',
    // red: '#F43F5E',
    // lightBlue: '#CCE4FB',
    // gradient: 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)',
    // buttonText: '#FEF9F9',
    // promo: '#c154c1',
    // navActive: '#FFC107',
  },
};

export const Theme = ({ children }) => {
  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string'
          ? isPropValid(propName)
          : true;
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export function setWidth({ w }) {
  if (!w) return 'none';
  if (w && w.endsWith('%')) {
    return `${w}`;
  } else {
    return `${w}px`;
  }
}

export function setHeight({ h }) {
  if (!h) return 'none';
  if (h && h.endsWith('%')) {
    return `${h}`;
  } else {
    return `${h}px`;
  }
}
