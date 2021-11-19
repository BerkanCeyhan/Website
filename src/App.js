import logo from './logo.svg';
import {Box, Container, Flex, Heading, VStack} from "@chakra-ui/react";
import Header from "./components/Header";
import Callout from "./components/Callout";
import Content from "./components/Content";

function App() {
  return (
      <div className="main">
          <Container maxW="container.md">
              <Header>
              </Header>
          </Container>
          <Container maxW="container.sm">
              <Callout>
              </Callout>
              <Content>
              </Content>
          </Container>
      </div>
  );
}

export default App;
