import React from "react";

import axios from "axios";
import { getMeaningfulData } from "./utils/index";

import Pie from "./components/Pie";

function App() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const getData = async () => {
    setLoading(true);
    const res = await axios.post(
      "https://testapi.bookonelocal.co.nz/api-bookone/api/website/findBookings",
      { fromDate: "2021-12-01", toDate: "2021-12-31", propertyId: 237 }
    );
    setLoading(false);
    if (res.status !== 200) {
      return [];
    }

    const meaningfulData = getMeaningfulData(res.data);

    setData(meaningfulData);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div>
        <div>{loading && <h2>Loading</h2>}</div>
        <div style={{ display: "flex" }}>
          <div>
            <h1>Revenue per source</h1>
            <Pie
              labels={data.map((e) => `${e.externalSite}: ${e.totalAmount}`)}
              values={data.map((e) => e.totalAmount)}
            />
          </div>
          <div>
            <h1>total ammount of booking per source</h1>
            <Pie
              labels={data.map((e) => `${e.externalSite}: ${e.bookingCounts}`)}
              values={data.map((e) => e.bookingCounts)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
