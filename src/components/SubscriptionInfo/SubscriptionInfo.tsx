import { ReactElement } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import {
  SubscriptionInfoType,
} from "../../routes/subscription/Subscription";

const CARD_WIDTH = 300;

type SubscriptionInfoPropsType = {
  details: SubscriptionInfoType;
  children: ReactElement;
  onSelect: (info: SubscriptionInfoType) => void;
  active: boolean;
};

const SubscriptionInfo = (props: SubscriptionInfoPropsType): ReactElement => {
  const setBackgroundColor = () => (props.active ? "#CBD5E0" : "white");

  return (
    <>
      <Card maxW={CARD_WIDTH} bgColor={setBackgroundColor()}>
        <CardBody>
          <Text
            textAlign={"center"}
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {props.details.heading}
          </Text>
          <Text
            textAlign={"center"}
            sx={{
              fontWeight: "bold",
              fontSize: "30px",
            }}
            mt={3}
          >
            {props.details.price / props.details.months} $
          </Text>
          <Text textAlign={"center"} mb={6}>
            per month
          </Text>
          {props.children}
        </CardBody>
        <CardFooter>
          <Flex justifyContent={"center"} width="100%">
            <Button onClick={() => props.onSelect(props.details)}>
              Select
            </Button>
          </Flex>
        </CardFooter>
      </Card>
    </>
  );
};

export default SubscriptionInfo;
