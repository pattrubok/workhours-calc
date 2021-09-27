import React, { useContext } from "react";
import styled from "styled-components";

import { Main } from "../../components";
import AppContext from "../../assets/func/context";

import { summHours, addMonthName } from "../../assets/func/Calc/count";
import { salaryPerMonth } from "../../assets/func/const";

const AppContainer = () => {
  const {
    isDrawer,
    onCloseFirstDrawer,
    showDrawer,
    data,
    dataPerMonth,
    dataPerMonthOld,
  } = useContext(AppContext);

  const date = data.length && data[0].createdAt.substr(0, 10);

  const dayPrice =
    dataPerMonth.length &&
    Number((salaryPerMonth / summHours(dataPerMonth)).toFixed(0));

  const dayPriceOld =
    dataPerMonthOld.length &&
    Number((salaryPerMonth / summHours(dataPerMonthOld)).toFixed(0));

  const props = {
    result: summHours(data),
    date: date,
    dayPrice: dayPrice,
    dayPriceOld: dayPriceOld,
    showDrawer: showDrawer,
    monthName: addMonthName(),
  };

  const drawersProps = [
    {
      height: "60%",
      title: "Отправка данных на сервер",
      placement: "top",
      closable: true,
      onClose: onCloseFirstDrawer,
      visible: isDrawer,
      maskStyle: {
        fontSize: "12px",
      },
    },
  ];

  return (
    <Wrapper>
      <Main {...drawersProps} {...props} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: auto;

  background-image: url("/static/img/background.jpeg");
  background-size: 20%;
  background-repeat: repeat;
`;

export default AppContainer;
