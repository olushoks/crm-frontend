import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Entry } from "./pages/entry/Entry.page";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Ticket } from "./pages/ticket/Ticket.page";
import { TicketLists } from "./pages/ticket_list/TicketLists.page";
import { AddTicket } from "./pages/new_ticket/AddTicket.page";
import { PrivateRoute } from "./components/private_route/PrivateRoute.component";

/*===================================*
        END OF IMPORTS
*===================================*/

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/add-ticket">
            <AddTicket />
          </PrivateRoute>
          <PrivateRoute path="/tickets">
            <TicketLists />
          </PrivateRoute>
          <PrivateRoute path="/ticket/:id">
            <Ticket />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
