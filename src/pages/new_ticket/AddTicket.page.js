import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../components/add_ticket_form/AddTicketForm.component";
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb.component";
import { validateText } from "../../utilities/form_validation";

const initialState = {
  subject: "",
  issueDate: "",
  detail: "",
};

const initialFormError = {
  subject: false,
  issueDate: false,
  detail: false,
};

export const AddTicket = () => {
  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState(initialFormError);

  useEffect(() => {}, [formData, formError]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(initialFormError);
    const isSubjectValid = await validateText(formData.subject);

    setFormError({ ...formError, subject: !isSubjectValid });
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
            formError={formError}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};
