import React, { createContext, useState, useEffect } from "react";
import request from "../helper/request";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  // const [state, setState] = useState({});
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await request.get("/courses");
      setCourses(data.courses);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        courses,
        setCourses,
        user,
        setUser,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
