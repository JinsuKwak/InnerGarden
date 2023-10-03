"use client";
import React from "react";
import Container from "@/components/Container";
import PostPreviewContainer from "@/components/posts/PostPreviewContainer";
import { PREVEIW_NUM_PAGE } from "@/app/constants";

const page = () => {
  return (
    <React.Fragment>
      <Container>
        <PostPreviewContainer
          isMainPage={false}
          sections={["announcement", "news"]}
          postsPerPage={PREVEIW_NUM_PAGE}
          isVeiwOnlyPage={false}
          showBlank={true}
        />
      </Container>
    </React.Fragment>
  );
};

export default page;
