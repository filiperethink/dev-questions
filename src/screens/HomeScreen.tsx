import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { createCandidate } from "../services/UserServices";
import { sx } from "../theme/theme";
import { CandidateInfoType } from "../types";

function HomeScreen() {
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [seniority, setSeniority] = React.useState("");
  const [stack, setStack] = React.useState("");
  const [rethinker, setRethinker] = React.useState("");

  const isEmpty = !name || !seniority || !stack || !rethinker;

  const authenticateUser = async (candidate: CandidateInfoType) => {
    setLoading(true);

    const wasCreated = await createCandidate(candidate);
    if (wasCreated) {
      const createdCandidateInfo = { name, seniority, stack, rethinker };
      setTimeout(() => {
        setLoading(false);
        navigate("/questions", { state: createdCandidateInfo });
      }, 2000);
    } else {
      setLoading(false);
    }
  };

  return (
    <Container paddingTop={10} maxW='container.xl' align='center'>
      <Heading>Avaliação Técnica</Heading>
      <Flex maxW='container.sm'>
        <Center marginTop={10}>
          <FormControl isRequired>
            <FormLabel htmlFor='first-name'>Nome do candidato:</FormLabel>
            <Input
              id='first-name'
              onChange={(val: any) => setName(val.target.value)}
              placeholder='Digite o nome do candidato nesse desafio'
            />
            <Box marginTop={5}>
              <FormLabel htmlFor='first-name'>Rethinker Responsável:</FormLabel>
              <Stack direction='row'>
                <Select
                  onChange={(value: any) => setRethinker(value.target.value)}
                  placeholder='Selecione o Rethinker Responsável'
                >
                  <option value='Arthur Vargas'>Arthur Vargas</option>
                  <option value='Filipe Prado'>Filipe Prado</option>
                  <option value='Gabriel Louback'>Gabriel Louback</option>
                  <option value='Marcos Rodrigues'>Marcos Rodrigues</option>
                  <option value='Gustavo Souto'>Gustavo Souto</option>
                </Select>
              </Stack>
            </Box>
            <Box marginTop={5}>
              <FormLabel htmlFor='seniority'>Senioridade:</FormLabel>

              <RadioGroup onChange={setSeniority}>
                <Stack direction='row'>
                  <Radio sx={sx} colorScheme='blackAlpha' value='Estagiário'>
                    Estagiário
                  </Radio>
                  <Radio sx={sx} value='Júnior'>
                    Júnior
                  </Radio>
                  <Radio sx={sx} value='Pleno'>
                    Pleno
                  </Radio>
                  <Radio sx={sx} value='Sênior'>
                    Sênior
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
            <Box marginTop={5}>
              <FormLabel htmlFor='first-name'>Stack do desafio:</FormLabel>
              <RadioGroup onChange={setStack}>
                <Stack direction='row'>
                  <Radio sx={sx} value='React JS'>
                    React JS
                  </Radio>
                  <Radio sx={sx} value='React Native'>
                    React Native
                  </Radio>
                  <Radio sx={sx} value='Javascript'>
                    Javascript
                  </Radio>
                  <Radio sx={sx} value='Node JS'>
                    Node JS
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
            <Box marginTop={5}>
              <Button
                onClick={(values) =>
                  authenticateUser({ name, seniority, stack, rethinker })
                }
                isLoading={isLoading}
                loadingText='Criando novo candidato...'
                w='container.sm'
                size='lg'
                disabled={isEmpty}
                marginTop={2}
                colorScheme='blackAlpha'
                color='brand.details'
                bgColor='brand.dark'
                type='submit'
              >
                Iniciar Teste Técnico
              </Button>
            </Box>
          </FormControl>
        </Center>
      </Flex>
    </Container>
  );
}

export default HomeScreen;
