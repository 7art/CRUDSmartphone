import React from "react";

import PhoneCard from "../components/PhoneCard";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Spinner from "../components/Spinner";

import { useSelector } from "react-redux";

const PhoneList = () => {
  const [phones, loading] = useSelector((state) => [
    state.phones.list,
    state.phones.isLoading,
  ]);

  return (
    <Container>
      {loading && <Spinner />}
      <CardDeck>
        {phones.map((phone) => (
          <PhoneCard {...phone} key={phone.id} />
        ))}
      </CardDeck>
    </Container>
  );
};

export default PhoneList;
