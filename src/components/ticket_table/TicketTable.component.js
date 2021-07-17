import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

/*===================================*
        END OF IMPORTS
*===================================*/

export const TicketTable = () => {
  const { filterTicketsRes, isLoading, error } = useSelector(
    (state) => state.tickets
  );

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {filterTicketsRes.length ? (
          filterTicketsRes.map((row) => (
            <tr key={row._id}>
              <td>{row._id}</td>
              <td>
                <Link to={`/ticket/${row._id}`}>{row.subject}</Link>
              </td>
              <td>{row.status}</td>
              <td>{row.opened_on}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No ticket to show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
