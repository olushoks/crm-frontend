import { useState, useEffect } from "react";
import {
  Jumbotron,
  Form,
  Row,
  Col,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openNewTicket } from "./addTicketAction";
import { validateText } from "../../utilities/form_validation";
import "./add_ticket_form.style.css";

/*===================================*
        END OF IMPORTS
*===================================*/

const initialState = {
  subject: "",
  opened_on: "",
  message: "",
};

const initialFormError = {
  subject: false,
  opened_on: false,
  message: false,
};

export const AddTicketForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState(initialFormError);

  const { isLoading, error, successMsg } = useSelector(
    (state) => state.createTicket
  );

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

    dispatch(openNewTicket(formData));
    setFormData(initialState);
  };

  return (
    <Jumbotron className="mt-3 add-new-ticket form-bckgrd bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <div>
        {error && <Alert variant="danger">{error}</Alert>}
        {successMsg && <Alert variant="success">{successMsg}</Alert>}
        {isLoading && <Spinner variant="primary" animation="border" />}
      </div>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
            />
            <Form.Text className="text-danger">
              {formError.subject && "Subject is required"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue found on:
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="opened_on"
              value={formData.opened_on}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Detail</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            rows="5"
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" variant="info" className="form-btn" block>
          Open New Ticket
        </Button>
      </Form>
    </Jumbotron>
  );
};
