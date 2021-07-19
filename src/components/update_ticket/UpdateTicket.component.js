import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { replyTicket } from "../../pages/ticket_list/ticketsAction";
import { Form, Button } from "react-bootstrap";

/*===================================*
        END OF IMPORTS
*===================================*/

export const UpdateTicket = () => {
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.tickets.selectedTicket);
  const [msg, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = {
      message: msg,
    };
    dispatch(replyTicket(_id, message));
    setMessage("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Text>Reply message or update ticket</Form.Text>
      <Form.Control
        as="textarea"
        row="5"
        name="detail"
        value={msg}
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
