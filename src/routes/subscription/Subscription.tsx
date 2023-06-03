import { ReactElement } from "react";
import { WelcomeBox } from "../../components/LandingInfo/WelcomeBox";
import { SimpleGrid, Card, CardHeader, Heading, CardBody, CardFooter, Button, Text, Flex, List, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import SubscriptionInfo from "../../components/SubscriptionInfo/SubscriptionInfo";

export enum SubscriptionType {
  ONE_MONTH = 0,
  THREE_MONTHS = 1,
  TWELVE_MONTHS = 2,
}

const Subscription = (): ReactElement => {
  return (
    <>
      <Box height="200px" />
      <Text textAlign={"center"} mb={10} sx={{
        fontWeight: "bold",
        fontSize: "30px"
      }}>
        Select you plan
      </Text>
      <Flex width="100%" justifyContent="center" flexWrap="wrap">
        <SimpleGrid columns={3} spacing={10}>
          <SubscriptionInfo price={4.99} months={1} type={SubscriptionType.ONE_MONTH} heading={"1 month"}>
            <Text>
              Our most basic plan which includes basic price tracking
            </Text>
          </SubscriptionInfo>
          <SubscriptionInfo price={11.97} months={3} type={SubscriptionType.THREE_MONTHS} heading={"3 months"}>
            <Text>
              Our most basic plan which includes basic price tracking
            </Text>
          </SubscriptionInfo>
          <SubscriptionInfo price={35.88} months={12} type={SubscriptionType.ONE_MONTH} heading={"One year"}>
            <Text>
              Our most basic plan which includes basic price tracking
            </Text>
          </SubscriptionInfo>
        </SimpleGrid>
      </Flex>
      <Box height="200px" />

    </>
  );
};

export default Subscription;
