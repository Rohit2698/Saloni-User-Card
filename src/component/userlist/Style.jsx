import Styled from "@emotion/styled";
import {Typography, Paper} from "@mui/material";

export const StyledCardInfoContainer = Styled(Paper)`
    border-radius: 10px;
    height: 100%;
    background: ${(props) => props.backgroundcolor};
    padding: 20px;
`;

export const Header1 = Styled(Typography)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
`;

export const SubText = Styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #EFEFEF;
`;