import { ReactElement } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

export const WelcomeBox = (): ReactElement => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      flexDirection="column"
      columnGap={5}
      width="fit-content"
      margin="auto"
      padding="7"
      bg="blackAlpha.600"
      borderRadius="30"
      border="2px"
      borderColor="white"
      color="white"
      mt={10}
    >
      <Text as="b" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
        Welcome to the best price tracking website!
      </Text>
      <Flex
        justifyContent="center"
        alignItems="center"
        mt={4}
        flexDirection="column"
      >
        <Text
          fontSize={{ base: "18px", md: "24px", lg: "30px" }}
          minW="250px"
          maxW="500px"
        >
          Here you can keep track of how prices of your favourite products
          change over time. Sign up today and start monitoring changes!
        </Text>
        <Image
          src="/rocket2.png"
          alt="rocket"
          height={{ base: "150px", md: "250px", lg: "350px" }}
          width={{ base: "250px", md: "400px", lg: "550px" }}
        />
      </Flex>
    </Flex>
  );
};
