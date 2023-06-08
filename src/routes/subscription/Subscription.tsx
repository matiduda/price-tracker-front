import { ReactElement, useCallback, useState } from "react";
import { WelcomeBox } from "../../components/LandingInfo/WelcomeBox";
import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text,
  Flex,
  List,
  ListItem,
  ListIcon,
  Box,
  useDisclosure,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import SubscriptionInfo from "../../components/SubscriptionInfo/SubscriptionInfo";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { SubscriptionApi } from "../../api/SubscriptionApi";
import { paths } from "../../utils/paths";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export enum SubscriptionType {
  ONE_MONTH = 0,
  THREE_MONTHS = 1,
  TWELVE_MONTHS = 2,
}

export type SubscriptionInfoType = {
  price: number,
  months: number,
  type: SubscriptionType,
  heading: string,
  description: string,
};

const subscriptions: SubscriptionInfoType[] = [
  {
    price: 4.99,
    months: 1,
    type: SubscriptionType.ONE_MONTH,
    heading: "1 month",
    description: "Our most basic plan which includes basic price tracking",
  },
  {
    price: 11.97,
    months: 3,
    type: SubscriptionType.THREE_MONTHS,
    heading: "3 months",
    description: "Our most basic plan which includes basic price tracking",
  },
  {
    price: 35.88,
    months: 12,
    type: SubscriptionType.TWELVE_MONTHS,
    heading: "One year",
    description: "Our most basic plan which includes basic price tracking",
  },
]

const Subscription = (): ReactElement => {
  const [activeSubscription, setActiveSubscription] = useState<SubscriptionInfoType>(subscriptions[1]);

  const navigate = useNavigate();

  const selectSubsrciprion = (info: SubscriptionInfoType) => {
    setActiveSubscription(info);
  };

  const onPaypalTransactionFinished = () => {
    SubscriptionApi.createSubscription(activeSubscription.months)
      .then((response: string) => {
        navigate(paths.user);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Flex width="100%" alignItems="center" flexDirection={"column"} marginTop={"200px"}>
        <Text
          mb={10}
          sx={{
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          Select you plan
        </Text>
      </Flex>
      <Flex width="100%" justifyContent="center" flexWrap="wrap">
        <SimpleGrid columns={3} spacing={10}>
          {
            subscriptions.map((details) => {
              return (
                <SubscriptionInfo
                  onSelect={selectSubsrciprion}
                  active={activeSubscription === details}
                  details={details}
                  key={details.type}
                >
                  <Text>{details.description}</Text>
                </SubscriptionInfo>
              )
            })
          }
        </SimpleGrid>
      </Flex>
      <Flex width="100%" justifyContent="center" marginTop="100px">
        <Box minHeight={"200px"} bgColor="#FFFFFF20" width="fit-content" borderRadius={6} paddingX={5} paddingTop={6}>
          <Flex width="100%" justifyContent="center" flexWrap="wrap">
            <PayPalScriptProvider options={{
              "client-id": "AXlOjOw1Ri9LNbgkXUhFtGkdMDjgWm-gc4sVz_ZtlA-1Kt_MLMYzutR72tAAp7t7Dor9sK_RLjkCqHii"
            }}>
              <PayPalButtons
                createOrder={(data, actions) => {
                  console.log(activeSubscription.price.toString());
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: activeSubscription.price.toString(),
                        },
                      },
                    ],
                  });
                }}
                forceReRender={[activeSubscription]}
                onApprove={async (data, actions) => {
                  const details = await actions.order?.capture();
                  const name = details?.payer.name?.given_name;
                  alert("Transaction completed by " + name);
                  onPaypalTransactionFinished();
                }}
              />
            </PayPalScriptProvider>
          </Flex>
        </Box>
      </Flex>

      <Box height="100px" />
    </>
  );
};

export default Subscription;
