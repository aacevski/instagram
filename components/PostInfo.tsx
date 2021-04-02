import React from "react";
import {
  Flex,
  VStack,
  HStack,
  Icon,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { BiNavigation, BiSmile } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";

interface PostInfoProps {}

export const PostInfo: React.FC<PostInfoProps> = ({}) => {
  return (
    <Flex>
      <VStack w="full" mx={4}>
        <HStack
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          w="full"
          _last={{ mx: 0 }}
        >
          <Icon as={AiOutlineHeart} w={6} h={6} mr={1} cursor="pointer" />
          <Icon as={AiOutlineMessage} w={6} h={6} mr={1} cursor="pointer" />
          <Icon as={BiNavigation} w={6} h={6} mr={1} cursor="pointer" />
          <Flex w="full" justifyContent="flex-end" bg="white" cursor="pointer">
            <Icon as={BsBookmark} w={6} h={6} mr={1} cursor="pointer" />
          </Flex>
        </HStack>
        <Flex w="full" mt={4}>
          <Text fontSize="sm" fontWeight="bold" cursor="pointer">
            18 likes
          </Text>
        </Flex>
        <Flex w="full" alignItems="center">
          <Text fontSize="sm" mt={-2} fontWeight="bold">
            <span style={{ cursor: "pointer" }}>aacevski</span>{" "}
            <span style={{ fontWeight: "normal" }}>
              😍 This is probably the best plated sushi I've ever seen.
            </span>
          </Text>
        </Flex>
        <Flex w="full">
          <Text fontSize="xs" textColor="gray.500">
            11 HOURS AGO
          </Text>
        </Flex>
        <Flex w="full" borderTop="1px solid #DBDBDB" mt={2} py={2}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={BiSmile} cursor="pointer" w={6} h={6} />}
            />
            <Input
              bg="transparent"
              w="full"
              border="transparent"
              placeholder="Add a comment..."
              _placeholder={{ fontSize: "md" }}
              _active={{ borderColor: "transparent" }}
              _focus={{ borderColor: "transparent" }}
            />
          </InputGroup>
          <Button variant="ghost" color="rgb(26, 114, 255)">
            Post
          </Button>
        </Flex>
      </VStack>
    </Flex>
  );
};
