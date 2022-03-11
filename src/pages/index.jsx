import Head from "next/head";
import { useContext } from "react";
// import styles from "../../styles/Home.module.css";
import { AuthContext } from "../context/context";
import styled from "styled-components";
import Inventory from "../components/Inventory";

export const Container = styled.div`
  grid-area: main;
  background-color: green;

  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
`;

export default function Home() {
  const { data } = useContext(AuthContext);
  console.log(data);

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Inventory></Inventory>
    </Container>
  );
}
