import { createGlobalStyle } from "styled-components";

import BackgroundImage from "../Assets/Images/background.jpg";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html{
        font-size: 63.5%;
    }

    body{
        background-image: url("${BackgroundImage}");
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        overflow: hidden;

        font-family: 'Fredoka';
    }
    
`;
