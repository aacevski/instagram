import React from "react";
import { Flex, VStack, Text } from "@chakra-ui/react";
import { FooterSidebar } from "./FooterSidebar";
import { FollowUser } from "./FollowUser";

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <Flex w="full">
      <VStack align="flex-start" spacing="0" w="full">
        <Flex w="full" justifyContent="space-between">
          <Text fontSize="sm" fontWeight="bold" textColor="#718096">
            Suggestions for you
          </Text>
          <Text fontSize="sm" fontWeight="bold" cursor="pointer">
            See All
          </Text>
        </Flex>
        <FollowUser />
        <FollowUser />
        <FollowUser />
        <FollowUser />
        <FollowUser />
        <Flex w="full" alignItems="center" h={20}>
          <FooterSidebar />
        </Flex>
      </VStack>
    </Flex>
  );
};
