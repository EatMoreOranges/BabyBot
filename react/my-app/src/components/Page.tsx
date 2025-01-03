import { Box, Center, StackDivider, VStack } from "@chakra-ui/react";
import TextArea from "./TextArea";
import MessageList from "./MessageList";

export default function Page() {
  const messages = [
    { id: 1, text: "Hello!", userName: "user" },
    { id: 2, text: "How are you?", userName: "bot" },
    { id: 3, text: "I'm good, thanks!", userName: "user" },
  ];
  return (
    <>
      <Center>
        <VStack
          direction="column"
          divider={<StackDivider borderColor="gray.200" />}
          spacing={5}
          align="stretch"
          justifyContent="flex-end"
          height="100%"
        >
          <Box h="38em">
            <MessageList messages={messages} />
          </Box>
          {/*Area for the running messages */}
          <Box>
            <TextArea />
          </Box>
        </VStack>
      </Center>
    </>
  );
}
