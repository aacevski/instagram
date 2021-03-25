import React from "react";
import { Flex, Image, VStack, Text } from "@chakra-ui/react";

interface UserInfoPostProps {}

export const UserInfoPost: React.FC<UserInfoPostProps> = ({}) => {
  return (
    <>
      <Flex w="full" p={4}>
        <Image
          h="40px"
          rounded="full"
          src="https://instagram.fskp4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/110231923_360016218315043_7492124123133191624_n.jpg?tp=1&_nc_ht=instagram.fskp4-1.fna.fbcdn.net&_nc_ohc=yk2k1NXuIRgAX9PAFqv&ccb=7-4&oh=fbc71bd43671b985036a10d619e00a24&oe=60805911"
        ></Image>
        <Flex w="full" justifyContent="flex-start">
          <VStack align="flex-start" ml={3}>
            <Text fontSize="sm" fontWeight="bold" mb={-2} textAlign="left">
              aacevski
            </Text>
            <Text fontSize="xs" textAlign="left">
              Skopje, Macedonia
            </Text>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};
