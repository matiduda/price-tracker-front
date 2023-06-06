import { ReactElement } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import { SubscriptionType } from "../../routes/subscription/Subscription";
import { SubscriptionApi } from "../../api/SubscriptionApi";
import { useNavigate } from "react-router-dom";
import { paths } from "../../utils/paths";
import { AxiosError } from "axios";

const CARD_WIDTH = 300;

type SubscriptionInfoPropsType = {
  type: SubscriptionType;
  heading: string;
  price: number;
  months: number;
  children: ReactElement;
};

const SubscriptionInfo = (props: SubscriptionInfoPropsType): ReactElement => {
  const navigate = useNavigate();

  const selectSubscription = () => {
    console.log(
      `selected subscription: ${props.heading}, of type ${props.type}. amount to charge: ${props.price}`
    );
    // THIS WILL BE INVOKED AFTER SUCCESSFULL PAYPAL TRANSACTION
    onPaypalTransactionFinished();
  };

  const onPaypalTransactionFinished = () => {
    SubscriptionApi.createSubscription(props.months)
      .then((response: string) => {
        navigate(paths.user);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Card maxW={CARD_WIDTH}>
        <CardBody>
          <Text
            textAlign={"center"}
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {props.heading}
          </Text>
          <Text
            textAlign={"center"}
            sx={{
              fontWeight: "bold",
              fontSize: "30px",
            }}
            mt={3}
          >
            {props.price / props.months} $
          </Text>
          <Text textAlign={"center"} mb={6}>
            per month
          </Text>
          {props.children}
        </CardBody>
        <CardFooter>
          <Flex justifyContent={"center"} width="100%">
            <Button onClick={selectSubscription}>Select</Button>
          </Flex>
        </CardFooter>
      </Card>
    </>
  );
};

export default SubscriptionInfo;
