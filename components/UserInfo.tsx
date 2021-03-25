import React from "react";
import { Flex, VStack, Image, Text } from "@chakra-ui/react";

interface UserInfoProps {}

export const UserInfo: React.FC<UserInfoProps> = ({}) => {
  return (
    <Flex alignItems="center" h="full">
      <Image
        src="https://instagram.fskp4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/110231923_360016218315043_7492124123133191624_n.jpg?tp=1&_nc_ht=instagram.fskp4-1.fna.fbcdn.net&_nc_ohc=yk2k1NXuIRgAX9PAFqv&ccb=7-4&oh=fbc71bd43671b985036a10d619e00a24&oe=60805911"
        rounded="full"
        h="50px"
        mr={4}
      />
      <VStack align="flex-start" spacing="0">
        <Text fontSize="sm" fontWeight="bold">
          aacevski
        </Text>
        <Text fontSize="sm" textColor="gray.500">
          Andrej Acevski
        </Text>
      </VStack>
    </Flex>
  );
};
