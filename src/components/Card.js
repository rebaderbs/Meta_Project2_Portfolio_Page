import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack spacing={4}>
      <VStack 
        spacing={3}
        bg={"white"}
        color={"black"}
        borderRadius="10px"
        align={"left"}
        >
        <Image src={imageSrc}
              borderRadius="10px" />
        <Heading size="md"
                  padding="10px">{title}</Heading>
        <Text padding="10px">{description}</Text>
        <Heading size="sm" padding="10px">See more <FontAwesomeIcon icon={faArrowRight} size="1x"/></Heading>
            
      </VStack>
    </HStack>
  );
};

export default Card;
