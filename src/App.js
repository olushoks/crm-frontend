import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Entry } from "./pages/entry/Entry.page";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Ticket } from "./pages/ticket/Ticket.page";
import { TicketLists } from "./pages/ticket_list/TicketLists.page";
import { AddTicket } from "./pages/new_ticket/AddTicket.page";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
          <DefaultLayout>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/add-ticket">
              <AddTicket />
            </Route>
            <Route path="/tickets">
              <TicketLists />
            </Route>
            <Route path="/ticket/:id">
              <Ticket />
            </Route>
          </DefaultLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
