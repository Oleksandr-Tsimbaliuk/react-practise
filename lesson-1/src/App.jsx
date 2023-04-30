import { PageTitle } from "./components/PageTitle/PageTitle";
import { EventBoard } from "./components/EventBoard/EventBoard";
// import  from "";
import data from "./data.json";

export const App = () => {
  return (
    <div>
      <PageTitle text="This title" />
      <EventBoard events={data} />
    </div>
  );
};
