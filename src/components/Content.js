import {
    Box,
    Flex,
    Heading,
    Text,
    Menu,
    Button,
    MenuButton,
    MenuItem,
    MenuList,
    IconButton,
    Container, VStack, Stack
} from "@chakra-ui/react";
import Profilepicture from "./Profilepicture";

function Content() {
    return (
        <Container>
            <Stack direction="column" spacing="100px">
            <Stack direction={["column", "row"]} spacing="24px" wrap>
        <Box>
            <Heading as="h2" size="xl" variant="page-title">
                Berkan Ceyhan
            </Heading>
            <Text w="80">
                Student, Entwickler, Social Media Marketer
            </Text>
        </Box>
            <Box>
            <Profilepicture>
            </Profilepicture>
        </Box>
            </Stack>
            </Stack>
            <Box>
                <Heading as="h2" size="md" textDecoration="underline" variant="page-title">
                    Arbeit:
                </Heading>
                <Text textAlign="justify">
                    ⠀  ⠀Ich bin Berkan Ceyhan und komme aus dem Rhein Kreis Neuss. Neben meinem Informatik Studium beschäftige ich mich jetzt schon seit drei Jahren intensiv mit dem Thema Ecommerce. Von der Produktfotografie, bis hin zum Schalten von Werbeanzeigen auf Plattformen wie Google oder Facebook. Die Erfahrungen die ich gesammelt habe, sind für meine Kunden wertvoll. Ich biete das fundamentale was jedes Online Geschäft braucht:
                </Text>

            </Box>
        </Container>
    );
}

export default Content;