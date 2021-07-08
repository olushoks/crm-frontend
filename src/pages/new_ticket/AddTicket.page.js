import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../components/add_ticket_form/AddTicketForm.component";
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb.component";

const initialState = {
  subject: "",
  issueDate: "",
  detail: "",
};

export const AddTicket = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};
