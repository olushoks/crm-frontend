import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../components/add_ticket_form/AddTicketForm.component";
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb.component";

/*===================================*
        END OF IMPORTS
*===================================*/

export const AddTicket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm />
        </Col>
      </Row>
    </Container>
  );
};
