import { ReactElement } from "react";
import { WelcomeBox } from "../../components/LandingInfo/WelcomeBox";
import { SimpleGrid, Card, CardHeader, Heading, CardBody, CardFooter, Button, Text, Flex, List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";


const CARD_WIDTH = 300;

const Subscription = (): ReactElement => {
  return (
    <>
      <Flex width="100%" justifyContent="center" flexWrap="wrap">

        <SimpleGrid columns={4} spacing={5}>
          <Card maxW={CARD_WIDTH}>
            <CardBody>
              <Text textAlign={"center"} sx={{
                fontWeight: "bold",
                fontSize: "20px"
              }}>Standard</Text>
              <Text textAlign={"center"} sx={{
                fontWeight: "bold",
                fontSize: "30px"
              }} my={3}>4.99 $</Text>
              <Text mb={2}>Our most basic plan which includes:</Text>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
              </List>
            </CardBody>
            <CardFooter>
              <Flex justifyContent={"center"} width="100%">
                <Button>Select</Button>
              </Flex>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Subscription;
