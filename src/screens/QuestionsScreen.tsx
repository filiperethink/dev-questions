import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { CandidateInfoType } from "../types";

export default function QuestionsScreen() {
  //@ts-ignore
  const state: CandidateInfoType | undefined = useLocation().state;
  return (
    <Flex minHeight='100vh'>
      <Box>
        <Center
          p={10}
          bg='gray.100'
          justifyContent='start'
          alignItems='start'
          flexDirection='column'
          w='300px'
          h='100%'
        >
          <Text>Bem-vindo {state?.name}</Text>
          <Text>
            seu desafio é responder 10 perguntas em 10 minutos sobre o tema
            abaixo:
          </Text>
          <Heading marginTop={10}>{state?.stack}</Heading>
          <Button
            marginTop={10}
            size='lg'
            colorScheme='whatsapp'
            color='brand.details'
            bgColor='brand.dark'
            type='submit'
          >
            Iniciar
          </Button>
        </Center>
      </Box>
      <Box flex='1' bg='gray.50' p={10}>
        <Text>Box 3</Text>
      </Box>
    </Flex>
  );
}
