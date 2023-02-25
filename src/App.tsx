import { useRef, useState, useEffect } from "react";
import Header from "./components/Header";
import Table from "./components/table/table";
import useGetOrders from "./hooks/useGetOrders";
import StatusHeaders from "./components/statusHeaders";
import Pagination from "./components/pagination/wraper";
import { useSelector } from "react-redux";

export default function App() {
  const { error, loading } = useGetOrders();
  const [orders, setOrders] = useState();
  const tableRef = useRef(null);
  const data = useSelector((store: any) => store?.orders?.orders?.docs);

  useEffect(() => {
    data && setOrders(data);
  }, [data]);

  if (loading) return <div>...Loading</div>;
  if (error) return <div>There is an Error :{error}</div>;

  return (
    <div
      className="container relative ml-4 "
      style={{ backgroundImage: "url(Images/backGround.svg)" }}
    >
      <Header tableRef={tableRef} setOrders={setOrders} />
      <StatusHeaders />
      <Table orders={orders} tableRef={tableRef} />
      <Pagination />
    </div>
  );
}
