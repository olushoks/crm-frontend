import "./App.css";
// import { Entry } from "./pages/entry/Entry.page";
// import { Dashboard } from "./pages/dashboard/Dashboard";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Ticket } from "./pages/ticket/Ticket.page";
// import { TicketLists } from "./pages/ticket_list/TicketLists.page";
// import { AddTicket } from "./pages/new_ticket/AddTicket.page";

function App() {
  return (
    <div>
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketLists /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
