import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";

interface FooterSidebarProps {}

export const FooterSidebar: React.FC<FooterSidebarProps> = ({}) => {
  return (
    <Flex fontSize="xs" textColor="gray.400" w="full" justifyContent="center">
      <Link>About</Link>
      <Text mx={1}>&bull;</Text>
      <Link>Help</Link>
      <Text mx={1}>&bull;</Text>
      <Link>Press</Link>
      <Text mx={1}>&bull;</Text>
      <Link>API</Link>
      <Text mx={1}>&bull;</Text>
      <Link>Jobs</Link>
      <Text mx={1}>&bull;</Text>
      <Link>Privacy</Link>
    </Flex>
  );
};
