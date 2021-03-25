import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Post } from "./Post";
import { Sidebar } from "./Sidebar";
import { Stories } from "./Stories";
import { UserInfo } from "./UserInfo";

interface ContentProps {}

export const Content: React.FC<ContentProps> = ({}) => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={4}
      mx={{ base: "5%", lg: "20%" }}
      pt={4}
      mb={20}
    >
      <GridItem
        colSpan={{ base: 3, lg: 2 }}
        bg="white"
        rounded="md"
        border="1px solid #DBDBDB"
        p={2}
      >
        <Stories />
      </GridItem>
      <GridItem colSpan={1} rowSpan={1} d={["none", "none", "none", "flex"]}>
        <UserInfo />
      </GridItem>

      <GridItem
        colSpan={{ base: 3, lg: 2 }}
        bg="white"
        rounded="md"
        border="1px solid #DBDBDB"
        overflow="hidden"
        d="relative"
      >
        <Post />
      </GridItem>
      <GridItem
        colSpan={1}
        rowSpan={1}
        d={["none", "none", "none", "flex"]}
        w="full"
      >
        <Sidebar />
      </GridItem>
    </Grid>
  );
};
