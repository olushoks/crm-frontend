import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TicketTable } from "../../components/ticket_table/TicketTable.component";
import tickets from "../../assets/data/tickets.json";
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb.component";

/*===================================*
        END OF IMPORTS
*===================================*/

export const Dashboard = () => {
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
          <div>Total tickets: {tickets.length}</div>
          <div>Pending tickets: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className="mb-2">Rcently added tickets</Col>
      </Row>
      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
