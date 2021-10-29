import React from "react";
import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
import Form from "./components/Form/Form";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";

import "react-toastify/dist/ReactToastify.css";

export default function AppHooks() {
  return (
    <div>
      <Container>
        <Section title="Phonebook">
          <Form />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactsList />
        </Section>
      </Container>

          </div>
  );
}
