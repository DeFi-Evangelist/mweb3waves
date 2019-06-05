import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styled-components/global';
import App from './App';
import theme from './styled-components/theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <App />
        </>
    </ThemeProvider>,
    document.getElementById('root'),
);
