import { useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb.component";
import { MessageHistory } from "../../components/message_history/MessageHistory.component";
import { UpdateTicket } from "../../components/update_ticket/UpdateTicket.component";
import { fetchSingleTicket, closeTicket } from "../ticket_list/ticketsAction";

/*===================================*
        END OF IMPORTS
*===================================*/

export const Ticket = () => {
  const { replyMsg } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();
  const { id } = useParams();

  const { isLoading, error, selectedTicket } = useSelector(
    (state) => state.tickets
  );

  useEffect(() => {
    dispatch(fetchSingleTicket(id));
  }, [id, dispatch]);

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
          {error && <Alert variant="danger">{error}</Alert>}
          {replyMsg && <Alert variant="success">{replyMsg}</Alert>}
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">Subject: {selectedTicket.subject}</div>
          <div className="date">
            Date Created: {new Date(selectedTicket.opened_on).toLocaleString()}
          </div>
          <div className="status">Status: {selectedTicket.status}</div>
        </Col>
        <Col className="text-right">
          <Button
            variant="outline-info"
            disabled={selectedTicket.status === "closed"}
            onClick={() => dispatch(closeTicket(id))}
          >
            Close selected Ticket
          </Button>
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
            <UpdateTicket />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
