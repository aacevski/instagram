import React from "react";
import { Box, Image } from "@chakra-ui/react";

interface OneStoryProps {}

export const OneStory: React.FC<OneStoryProps> = ({}) => {
  return (
    <Box rounded="full" border="2px solid #b55f7d" mr={4} overflow="scroll">
      <Image
        src="https://instagram.fskp4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/110231923_360016218315043_7492124123133191624_n.jpg?tp=1&_nc_ht=instagram.fskp4-1.fna.fbcdn.net&_nc_ohc=yk2k1NXuIRgAX9PAFqv&ccb=7-4&oh=fbc71bd43671b985036a10d619e00a24&oe=60805911"
        rounded="full"
        h={["40px", "45px", "50px", "55px", "60px"]}
        border="2px solid white"
      />
    </Box>
  );
};
