import { Box } from "@chakra-ui/react";
import { Navigation } from "../components/Navigation";
import { Content } from "../components/Content";

const IndexPage = () => {
  return (
    <Box h="full" pos="relative">
      <Navigation />
      <Content />
    </Box>
  );
};

export default IndexPage;
