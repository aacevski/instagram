import React from "react";
import {
  Box,
  Flex,
  Image,
  Input,
  Link,
  Icon,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { BsHouseDoor } from "react-icons/bs";
import {
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlineCamera,
} from "react-icons/ai";
import { BiNavigation, BiSearch } from "react-icons/bi";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <Box w="100%" bg="#FFFFFF" borderBottom="1px solid #DBDBDB">
      <Box mx={{ base: "5%", lg: "20%" }}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          p="1.5"
          textColor="black"
        >
          <Icon
            as={AiOutlineCamera}
            display={["flex", "flex", "none"]}
            fontSize="1.6rem"
          />
          <Link href="./">
            <Image src="https://svgshare.com/i/VEq.svg" h="10" />
          </Link>
          <InputGroup
            display={["none", "none", "flex"]}
            w={{ base: "15rem", xl: "25rem" }}
          >
            <InputLeftElement
              children={<Icon as={BiSearch} w={5} h={5} color="gray.400" />}
            />
            <Input
              w="full"
              bg="#FAFAFA"
              border="1px solid #DBDBDB"
              placeholder="Search"
              display={["none", "none", "flex"]}
            />
          </InputGroup>
          <Flex alignItems="center" justifyContent="flex-end">
            <Icon
              as={BsHouseDoor}
              display={["none", "none", "flex"]}
              fontSize="1.6rem"
              marginRight="1.5rem"
              cursor="pointer"
            />
            <Icon
              as={AiOutlineMessage}
              display={["none", "none", "flex"]}
              fontSize="1.6rem"
              marginRight="1.5rem"
              cursor="pointer"
            />
            <Icon
              as={BiNavigation}
              display={["none", "none", "flex"]}
              fontSize="1.6rem"
              marginRight="1.5rem"
              cursor="pointer"
            />
            <Icon
              as={AiOutlineHeart}
              display={["none", "none", "flex"]}
              fontSize="1.6rem"
              marginRight="1.5rem"
              cursor="pointer"
            />
            <Image
              h="6"
              rounded="full"
              cursor="pointer"
              src="https://instagram.fskp4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/110231923_360016218315043_7492124123133191624_n.jpg?tp=1&_nc_ht=instagram.fskp4-1.fna.fbcdn.net&_nc_ohc=yk2k1NXuIRgAX9PAFqv&ccb=7-4&oh=fbc71bd43671b985036a10d619e00a24&oe=60805911"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
