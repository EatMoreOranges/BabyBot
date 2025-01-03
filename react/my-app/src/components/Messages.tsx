import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { ListItem } from "@chakra-ui/react";

interface MessageProps {
  userName: string;
  userMessage: string;
}

export default function Messages(MessageProps: MessageProps) {
  return (
    <>
      <ListItem>
        <Card size="sm" m="10px" p="1px">
          <CardBody>
            <Heading size="xs" textTransform="uppercase">
              {MessageProps.userName}
            </Heading>
            <Text>{MessageProps.userMessage}</Text>
          </CardBody>
        </Card>
      </ListItem>
    </>
  );
}
