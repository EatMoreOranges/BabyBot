import { ChangeEvent, useState } from "react";
import {
  Input,
  Text,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Button,
} from "@chakra-ui/react";

export default function TextArea() {
  const [input, setInput] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);
  const isError = input === "";
  console.log(input);
  // const onsubmit = () => {
  //   console.log("Form submitted with input:", input);
  // };
  function onsubmit() {
    fetch("http://127.0.0.1:8000/message", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ input }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submitted with input:", input);
        console.log("Response from backend:", data);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  }

  return (
    <>
      <FormControl>
        <Input
          variant="outline"
          placeholder="How can I help me boy..."
          // isInvalid={isError}
          size="lg"
          w="lg"
          value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            Watch out! Don't let Mr. Krabs steal your money💰
          </FormHelperText>
        ) : (
          <FormErrorMessage>Is this the Krusty Krab?</FormErrorMessage>
        )}
        <Button type="submit" onClick={onsubmit} size="lg" ml="5px">
          Send
        </Button>
      </FormControl>
    </>
  );
}
