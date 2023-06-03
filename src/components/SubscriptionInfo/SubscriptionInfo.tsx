import { ReactElement } from "react";
import { WelcomeBox } from "../../components/LandingInfo/WelcomeBox";
import { SimpleGrid, Card, CardHeader, Heading, CardBody, CardFooter, Button, Text, Flex, List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { SubscriptionType } from "../../routes/subscription/Subscription";

const CARD_WIDTH = 300;

type SubscriptionInfoPropsType = {
    type: SubscriptionType
    heading: string,
    price: number,
    months: number,
    children: ReactElement,
}

const SubscriptionInfo = (props: SubscriptionInfoPropsType): ReactElement => {
    const selectSubscription = () => {
        console.log(`selected subscription: ${props.heading}, of type ${props.type}. amount to charge: ${props.price}`);
    }

    return (
        <>
            <Card maxW={CARD_WIDTH}>
                <CardBody>
                    <Text textAlign={"center"} sx={{
                        fontWeight: "bold",
                        fontSize: "20px"
                    }}>
                        {props.heading}
                    </Text>
                    <Text textAlign={"center"} sx={{
                        fontWeight: "bold",
                        fontSize: "30px"
                    }} mt={3}>
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
