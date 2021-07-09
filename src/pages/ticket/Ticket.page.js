import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb.component";
import tickets from "../../assets/data/tickets.json";
import { MessageHistory } from "../../components/message_history/MessageHistory.component";

const ticket = tickets[0];

export const Ticket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">Subject: {ticket.subject}</div>
          <div className="date">Date Created: {ticket.addedAt}</div>
          <div className="status">Status: {ticket.status}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
        <Row className="mt-4">
          <Col>
            <MessageHistory msg={ticket.history} />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
