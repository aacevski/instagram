import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface FollowUserProps {}

export const FollowUser: React.FC<FollowUserProps> = ({}) => {
  return (
    <Flex w="full" alignItems="center" pt={4}>
      <Image
        h="30px"
        rounded="full"
        src="https://instagram.fskp4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/110231923_360016218315043_7492124123133191624_n.jpg?tp=1&_nc_ht=instagram.fskp4-1.fna.fbcdn.net&_nc_ohc=yk2k1NXuIRgAX9PAFqv&ccb=7-4&oh=fbc71bd43671b985036a10d619e00a24&oe=60805911"
      ></Image>
      <Flex w="full" justifyContent="flex-start" alignItems="center">
        <VStack align="flex-start" ml={3} w="full">
          <Text fontSize="sm" fontWeight="bold" mb={-2} textAlign="left">
            aacevski
          </Text>
          <Text fontSize="xs" textAlign="left" textColor="#718096">
            Andrej Acevski
          </Text>
        </VStack>
        <Flex justifyContent="flex-end" w="full">
          <Text color="rgb(26, 114, 255)" fontWeight="bold" fontSize="sm">
            Follow
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
