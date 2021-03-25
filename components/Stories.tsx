import React from "react";
import { Flex } from "@chakra-ui/react";
import { OneStory } from "./OneStory";

interface StoriesProps {}

export const Stories: React.FC<StoriesProps> = ({}) => {
  return (
    <Flex alignItems="center" ml={4} h="full">
      <OneStory />
      <OneStory />
    </Flex>
  );
};
