import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Entry } from "./pages/entry/Entry.page";
import { Registration } from "./pages/registration/Registration.page";
import { UserVerification } from "./pages/userVerification/UserVerification.page";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Ticket } from "./pages/ticket/Ticket.page";
import { TicketLists } from "./pages/ticket_list/TicketLists.page";
import { AddTicket } from "./pages/new_ticket/AddTicket.page";
import { PrivateRoute } from "./components/private_route/PrivateRoute.component";
import { PasswordResetPage } from "./pages/password_reeset/PasswordReset.page";

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
          <Route exact path="/reset-password">
            <PasswordResetPage />
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
          <Route exact path="/new-user-verification/:_id/:email">
            <UserVerification />
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
