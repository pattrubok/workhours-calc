import React from "react";
import styled from "styled-components";
import { Row as AntRow, Col as AntCol } from "antd";

import { UiButton, UiDrawer } from "../Ui";

import { Item } from "../";

import { paragraph } from "../../base/mixins/typography";

import "./style.less";

const Main = ({
  dayPrice,
  date,
  lastDate,
  result,
  showDrawer,
  monthName,
  dayPriceOld,
  ...drawersProps
}) => {
  return (
    <Wrapper>
      <Row gutter={[0, 40]}>
        <Col>
          <Text>
            Стоимость рабочего часа <br />
            за предыдущий месяц
          </Text>
          <Info>{dayPriceOld || 0} руб.</Info>
        </Col>
        <Col>
          <Text>
            Стоимость рабочего часа <br />
            за {monthName}
          </Text>
          <Info>{dayPrice || 0} руб.</Info>
        </Col>
        <Col>
          <Text>Дата начала отсчета</Text>
          <Info>{date}</Info>
        </Col>
        <Col>
          <Text>Отработано всего часов</Text>
          <Info>{result} ч.</Info>
        </Col>
        <Col>
          <UiButton onClick={showDrawer}>Ввести данные</UiButton>
        </Col>
      </Row>
      <UiDrawer {...drawersProps[0]}>
        <Row
          justify='space-between'
          style={{ height: "100%", flexDirection: "column", padding: "20px" }}
        >
          <Col flex={1}>
            <Item {...drawersProps[1]} />
          </Col>
        </Row>
      </UiDrawer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${paragraph};
  padding: 25px;
  border-radius: 25px;
  background-color: ${(p) => p.theme.color.white};
`;

const Row = styled(AntRow)`
  display: flex;
  flex-direction: column;
`;

const Col = styled(AntCol)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Text = styled.div`
  margin-bottom: 5px;
  white-space: nowrap;
`;
const Info = styled.div`
  font-weight: bold;
  color: ${(p) => p.theme.color.primary};
`;

export default Main;
