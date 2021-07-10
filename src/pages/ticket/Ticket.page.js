import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb.component";
import tickets from "../../assets/data/tickets.json";
import { MessageHistory } from "../../components/message_history/MessageHistory.component";
import { UpdateTicket } from "../../components/update_ticket/UpdateTicket.component";

// const ticket = tickets[0];

export const Ticket = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    const [currentTicket] = tickets.filter((el) => el.id == id);
    setTicket(currentTicket);
  }, [message, id]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted`);
  };

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
            {ticket.history && <MessageHistory message={ticket.history} />}
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <UpdateTicket
              message={message}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
