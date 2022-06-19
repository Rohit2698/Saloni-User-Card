import Styled from "@emotion/styled";
import { Typography, TextField, Button } from "@mui/material";

export const Header2 = Styled(Typography)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #243349;
`;

export const InputFieldLabel = Styled(Typography)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #6D7C94;
`;

export const StyledInputField = Styled(TextField)`
    border-radius: 8px;
    & .MuiOutlinedInput-root {
        border-radius: 8px;
    }
`;

export const SecondaryButton = Styled(Button)`
    background: #183E62 !important;
    border-radius: 8px;
    color: #FFFFFF;
    padding: 16px 40px;

    &:hover {
        opacity: 0.8;
    }
`;
