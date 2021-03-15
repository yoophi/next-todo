import { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
  font-style: italic;
`;

const Home: NextPage = () => <Container>Hello, TypeScript</Container>;

export default Home;
