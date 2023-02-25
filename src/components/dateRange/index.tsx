import { useState } from "react";
// import { useEffect } from "react";
import { useSelector } from "react-redux";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function DateRange({ setOrders }: any) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const Orders = useSelector((store: any) => store?.orders?.orders?.docs);

  //   useEffect(() => {
  //     axios
  //       .get("https://63bb90b3cf99234bfa5e3b48.mockapi.io/Products")
  //       .then((response) => {
  //         setProducts(response.data);
  //         setAllProducts(response.data);
  //       });
  //   }, []);

  const handleSelect = (date: any) => {
    let filtered = Orders.filter((order: any) => {
      let productDate = new Date(order["createdAt"]);
      return (
        productDate >= date.selection.startDate &&
        productDate <= date.selection.endDate
      );
    });
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setOrders(filtered);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <div className="App">
      <header className="App-header">
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      </header>
    </div>
  );
}

export default DateRange;
