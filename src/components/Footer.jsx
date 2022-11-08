import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc =
  "https://avatars.githubusercontent.com/u/65596695?s=400&u=17c1d7ac16d1b3e5faf8345a86782518330949a3&v=4";

const Footer = () => {
  return (
    <Box
      bgColor={"#404258"}
      color={"#F2DEBA"}
      minH={"30"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Made with ❤ By Yash Pratap Singh
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
