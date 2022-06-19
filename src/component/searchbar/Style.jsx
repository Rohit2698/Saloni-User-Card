import Styled from "@emotion/styled";
import { TextField, Button } from "@mui/material";

export const StyledTextfield = Styled(TextField)`
    background: #F5F6FA !important;
    border-radius: 8px;
    & .MuiOutlinedInput-root {
        border-radius: 8px;
    }
`;

export const StyledPrimaryButton = Styled(Button)`
    background: #FFA46B !important;
    border-radius: 8px;
    height: 100%;
    
    &:hover {
        opacity: 0.8;
    }
`;