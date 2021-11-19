import {Badge, Box, Center, Container, Flex, Text} from "@chakra-ui/react";

function Callout(){
    return(
        <div>
            <Container>
           <Box borderRadius="lg" bg="teal.500" p={3} align="center" mb={6}>
              Hallo! Ich bin ein Entwickler und Marketer aus Düsseldorf!
           </Box>
           </Container>
        </div>
    );
}
export default Callout;