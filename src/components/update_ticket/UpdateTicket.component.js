import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

/*===================================*
        END OF IMPORTS
*===================================*/

export const UpdateTicket = ({ message, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      {/* <Form.Label>Reply</Form.Label> */}
      <Form.Text>Reply message or update ticket</Form.Text>
      <Form.Control
        as="textarea"
        row="5"
        name="detail"
        value={message}
        onChange={handleChange}
      />
      <div className="text-right mt-3 mb-3">
        <Button variant="info" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
};

UpdateTicket.propTypes = {
  message: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
