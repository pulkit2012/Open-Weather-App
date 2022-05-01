import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const { data } = await axios({ url });
    setProducts(data);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  return { loading, products };
};
