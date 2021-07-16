import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTickets } from "./ticketsAction";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb.component";
import { SearchForm } from "../../components/search_form/SearcForm.component";
import { TicketTable } from "../../components/ticket_table/TicketTable.component";
import { Link } from "react-router-dom";

export const TicketLists = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchTickets());
  }, [search, dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link to="/add-ticket">
            <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};
