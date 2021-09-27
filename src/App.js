import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { AppContainer } from "./components";

import AppContext from "./assets/func/context";

import { api } from "./assets/func/api";

import notification from "./assets/func/notification";

import {
  beginMonth,
  beginNextMonth,
  beginPrevMonth,
} from "./assets/func/Calc/beginMonth";

const App = () => {
  const [isDrawer, setIsDrawer] = useState(false);
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");

  const [data, setData] = useState([]);
  const [dataPerMonthOld, setDataPerMonthOld] = useState([]);
  const [dataPerMonth, setDataPerMonth] = useState([]);

  const fetchData = async () => {
    const response = await api.get("hours");
    setData(response);
  };
  const fetchDataMonth = async () => {
    const response = await api.get(
      `hours?createdAt_gte=${beginMonth}&createdAt_lt=${beginNextMonth}`
    );
    setDataPerMonth(response);
  };

  const fetchDataMonthOld = async () => {
    const response = await api.get(
      `hours?createdAt_gte=${beginPrevMonth}&createdAt_lt=${beginMonth}`
    );
    setDataPerMonthOld(response);
  };

  useEffect(() => {
    fetchData();
    fetchDataMonth();
    fetchDataMonthOld();
  }, []);

  const showDrawer = () => {
    setIsDrawer(true);
  };

  const onCloseFirstDrawer = () => {
    setIsDrawer(false);
    setHour();
    setMin();
  };

  const addData = () => {
    if (!hour || !min) {
      const props = {
        message: "Данные не введены!",
        description: "Введите данные для отправки на сервер",
      };
      notification({ ...props });
      return;
    }
    if (Math.sign(min) === -1) {
      const props = {
        message: "Только положительное число!",
        description: "Введите положительное число",
      };
      notification({ ...props });
      return;
    }
    if (Math.sign(hour) === -1) {
      const props = {
        message: "Только положительное число!",
        description: "Введите положительное число",
      };
      notification({ ...props });
      return;
    }

    const obj = {
      hour: parseInt(hour),
      min: parseInt(min),
    };

    api.post("hours", obj).then(() => {
      fetchData();
      fetchDataMonth();
      fetchDataMonthOld();
    });
    onCloseFirstDrawer();
  };

  return (
    <Wrapper>
      {data && (
        <AppContext.Provider
          value={{
            isDrawer,
            hour,
            min,
            dataPerMonth,
            data,
            dataPerMonthOld,
            setIsDrawer,
            showDrawer,
            onCloseFirstDrawer,
            addData,
            setHour,
            setMin,
          }}
        >
          <AppContainer />
        </AppContext.Provider>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default App;
