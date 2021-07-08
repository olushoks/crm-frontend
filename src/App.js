import "./App.css";
// import { Entry } from "./pages/entry/Entry.page";
// import { Dashboard } from "./pages/dashboard/Dashboard";
import { DefaultLayout } from "./layout/DefaultLayout";
import { AddTicket } from "./pages/new_ticket/AddTicket.page";

function App() {
  return (
    <div>
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
