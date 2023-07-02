import { AdvancedVideo } from "@cloudinary/react";
import { styled } from "@mui/material";

export const CLDVideo = styled(AdvancedVideo)(
  ({ theme }) => `
    width: 100%;
    ${theme.breakpoints.up('sm')} {
      
    }
  `
)