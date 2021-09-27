import React, { useContext } from "react";
import styled from "styled-components";

import { Row as AntRow, Col, Input } from "antd";
import { UiButton } from "../Ui";

import AppContext from "../../assets/func/context";

const Item = () => {
  const { addData, setHour, setMin, hour, min } = useContext(AppContext);

  const onChangeHour = (e) => {
    setHour(e.target.value);
  };

  const onChangeMin = (e) => {
    setMin(e.target.value);
  };

  return (
    <Wrapper className='wrapper-item'>
      <Row gutter={[0, 20]}>
        <Col>
          <Text>Введите часы</Text>
          <Input
            type='number'
            onChange={onChangeHour}
            value={hour}
            placeholder='Введите часы'
          />
        </Col>
        <Col>
          <Text>Введите минуты</Text>
          <Input
            type='number'
            onChange={onChangeMin}
            value={min}
            placeholder='Введите минуты'
          />
        </Col>
        <Col className='col-with-addbtn'>
          <UiButton onClick={addData}>Отправить данные на сервер</UiButton>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .col-with-btn {
    flex-direction: column;
    text-align: center;
    div:nth-child(2) {
      display: flex;
      justify-content: space-between;
    }
  }
  .col-with-addbtn {
    margin-top: 20px;
    .uibutton__wrapper {
      display: flex;
      justify-content: center;
    }
  }
  .col-percent {
    display: flex;
    justify-content: center;
  }
`;

const Row = styled(AntRow)`
  display: flex;
  flex-direction: column;
`;
const Text = styled.div`
  margin-bottom: 10px;
`;

export default Item;
