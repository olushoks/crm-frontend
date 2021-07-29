import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TicketTable } from "../../components/ticket_table/TicketTable.component";
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb.component";
import { useSelector, useDispatch } from "react-redux";
import { fetchTickets } from "../ticket_list/ticketsAction";
import { useEffect } from "react";

/*===================================*
        END OF IMPORTS
*===================================*/

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.tickets);

  useEffect(() => {
    if (!tickets.length) {
      dispatch(fetchTickets());
    }
  }, [tickets, dispatch]);

  const pendingTickets = tickets.filter((ticket) => ticket.status !== "closed");
  const totalTickets = tickets.length;

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="/add-ticket">
            <Button
              variant="info"
              style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              Add New Ticket
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div>Total tickets: {totalTickets}</div>
          <div>Pending tickets: {pendingTickets.length}</div>
        </Col>
      </Row>
      <Row>
        <Col className="mb-2">Rcently added tickets</Col>
      </Row>
      <Row>
        <Col className="recent-ticket">
          {/* <TicketTable tickets={tickets} /> */}
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
