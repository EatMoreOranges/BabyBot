import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

interface MessageProps {
  userName: string;
  userMessage: string;
}
// define custom variant
const variants = {
  funky: definePartsStyle({
    container: {
      borderColor: "#459cc6",
      borderWidth: "3px",
      color: "chakra-body-text",
    },
  }),
};
// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    backgroundColor: "blue.50",
    _dark: {
      backgroundColor: "blue.800",
    },
  },
  header: {
    paddingBottom: "2px",
  },
  body: {
    paddingTop: "2px",
  },
  footer: {
    paddingTop: "4px",
  },
});

// export the component theme
export const cardTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    // define which size and variant is applied by default
    variant: "funky",
  },
});
export default function Messages(MessageProps: MessageProps) {
  return (
    <>
      <Card size="sm" m="10px" p="1px">
        <CardBody>
          <Heading size="xs" textTransform="uppercase">
            {MessageProps.userName}
          </Heading>
          <Text>{MessageProps.userMessage}</Text>
        </CardBody>
      </Card>
    </>
  );
}
