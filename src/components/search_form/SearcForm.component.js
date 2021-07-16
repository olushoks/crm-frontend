import { Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterTicketTable } from "../../pages/ticket_list/ticketsAction";

export const SearchForm = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(filterTicketTable(value));
  };

  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Search:
          </Form.Label>
          <Col sm="9">
            <Form.Control
              placeholder="search...."
              name="searchText"
              // value={value}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
