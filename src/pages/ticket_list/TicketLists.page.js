import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb.component";
import { SearchForm } from "../../components/search_form/SearcForm.component";
import { TicketTable } from "../../components/ticket_table/TicketTable.component";
import tickets from "../../assets/data/tickets.json";

export const TicketLists = () => {
  const [search, setSearch] = useState("");
  const [displayTicket, setDisplayTicket] = useState(tickets);

  useEffect(() => {}, [search, displayTicket]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    searchTicket(value);
  };

  const searchTicket = (search) => {
    const searchResult = tickets.filter((row) => {
      return row.subject.toLowerCase().includes(search.toLowerCase());
    });
    setDisplayTicket(searchResult);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col className="text-right">
          <SearchForm handleChange={handleChange} search={search} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={displayTicket} />
        </Col>
      </Row>
    </Container>
  );
};
