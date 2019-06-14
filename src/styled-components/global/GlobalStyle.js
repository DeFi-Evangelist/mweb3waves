import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

   body {
        font-family: 'Montserrat', sans-serif;
        padding: 0;
        margin: 0;
        background-color: ${({ theme: { colors } }) => colors.gray[1]};
   }

   a {
        text-decoration: none;
        &:hover {
            text-decoration: none;
            outline: 0;
        }
    }

    * {
        box-sizing: border-box;
    }

    img {
        border: 0px;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    button {
        background: none;
        border: 0;
        color: inherit;
        cursor: pointer;
        padding: 0;
    }
    input, button {
        &:focus {
            outline: none;
        }
        font: inherit;
    }
    textarea {
        resize: none;
    }
`;
