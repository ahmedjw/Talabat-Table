import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addOrders } from "../../store/orders";

const useGetOrders = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getOrders = async () => {
      await axios
        .get(
          "https://apimenudev.talabatmenu.com/order?pagination=false&sortBy=_id&sortDirection=-1",
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhbG11d2FsbGFkQGdtYWlsLmNvbSIsInVzZXJJZCI6IjYzZDMyNWU4MDcwYzY4ODNmOGQzYjgwYyIsInN1cHBsaWVySWQiOiI2M2QzMjVlNzA3MGM2ODgzZjhkM2I4MDgiLCJyb2xlSWQiOiI2M2QyYzc5NWI2MmI5YzM2MzBkNGNmZTkiLCJpYXQiOjE2NzU1MTI4OTl9.0GCewzQdRFGl05dVVLQfrnxQQicyq6culVQ1BGzgzZQ",
            },
          }
        )
        .then((res) => {
          dispatch(addOrders(res?.data?.data));
          setResponse(res.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setloading(false);
        });
    };
    getOrders();
  }, [dispatch]);

  return { response, error, loading };
};

export default useGetOrders;
