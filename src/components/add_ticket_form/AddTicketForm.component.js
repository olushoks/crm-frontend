import { Jumbotron, Form, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";

import "./add_ticket_form.style.css";

export const AddTicketForm = ({
  formData,
  formError,
  handleSubmit,
  handleChange,
}) => {
  return (
    <Jumbotron className="mt-3 add-new-ticket form-bckgrd bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
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
              name="issueDate"
              value={formData.issueDate}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Detail</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            value={formData.detail}
            rows="5"
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" variant="info" className="form-btn" block>
          Login
        </Button>
      </Form>
    </Jumbotron>
  );
};

AddTicketForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  formError: PropTypes.object.isRequired,
};
