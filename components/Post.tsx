import React from "react";
import { Image } from "@chakra-ui/react";

import { UserInfoPost } from "./UserInfoPost";
import { PostInfo } from "./PostInfo";

interface PostProps {}

export const Post: React.FC<PostProps> = ({}) => {
  return (
    <>
      <UserInfoPost />
      <Image
        src="https://images.unsplash.com/photo-1553621042-f6e147245754?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80"
        w="full"
        mb={2}
      ></Image>
      <PostInfo />
    </>
  );
};
