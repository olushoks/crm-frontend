import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb.component";
import { MessageHistory } from "../../components/message_history/MessageHistory.component";
import { UpdateTicket } from "../../components/update_ticket/UpdateTicket.component";
import { fetchSingleTicket } from "../ticket_list/ticketsAction";

/*===================================*
        END OF IMPORTS
*===================================*/

export const Ticket = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { isLoading, error, selectedTicket } = useSelector(
    (state) => state.tickets
  );

  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(fetchSingleTicket(id));
  }, [message, id, dispatch]);

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
        <Col>
          {isLoading && <Spinner variant="primary" animation="border" />}
        </Col>
        <Col>{error && <Alert variant="danger">{error}</Alert>}</Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">Subject: {selectedTicket.subject}</div>
          <div className="date">Date Created: {selectedTicket.opened_on}</div>
          <div className="status">Status: {selectedTicket.status}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info">Close selected Ticket</Button>
        </Col>
        <Row className="mt-4">
          <Col>
            {selectedTicket.conversation && (
              <MessageHistory message={selectedTicket.conversation} />
            )}
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
