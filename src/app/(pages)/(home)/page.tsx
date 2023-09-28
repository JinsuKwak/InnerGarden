import Image from "next/image";
import React from "react";
import LanguageBar from "@/components/Languages/LanguageBar";
import Box from "@mui/material/Box";
import Container from "@/components/Container";

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <LanguageBar />
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
        <div className="h-[100px]">aa</div>
        <Box sx={{ bgcolor: "#eeeeee", height: "100vh" }} />
      </Container>
    </React.Fragment>
  );
};

export default Home;
