import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const portfolioUrl = "https://ramsay-portfolio.netlify.app/"

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={`${process.env.REACT_APP_API_URL}/assets/advert.jpeg`}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      </a>
      <FlexBetween>
      <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
        <Typography color={main}>Check Out Ramsay's Porfolio</Typography>
        </a>
        <Typography color={medium}>Projects and Experience</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Explore my portfolio to see a variety of projects that reflect my skills and experiences. It's a window into my professional journey, showcasing my dedication and passion for my work. 
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;