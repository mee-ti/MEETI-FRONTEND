import React from 'react'
import styled from "styled-components";

// img, icon
import color from "./../../assets/color.png";

import HeaderBar from '../../components/common/HeaderBar';
import ApprovalCom from '../../components/MainPage/Approval/ApprovalCom';

export default function ApprovalRequest() {

  return (
    <Test>
      <MainDiv>
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <HeaderBar />
        <Mid>
          <Title>승인요청</Title>
          <div>Request Approval</div>
        </Mid>
        <Last>
          <ApprovalCom />
        </Last>
      </MainDiv>
    </Test>
  )
}

const Test = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f5f3fe;
`;

const MainDiv = styled.div`
  position: absolute;
  width: 90vw;
  height: 85vh;
  margin-top: 78px;
  margin-left: 69px;
  margin-right: 69px;
  background: #f8f8f8;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  z-index: 2;
  justify-content: center;
`;

const BackColor = styled.img`
  position: absolute;
  width: 548px;
  height: 503px;
  margin-left: 100px;
  margin-top: 100px;
  background: #f8f8f8;
  z-index: 1;
`;

const Mid = styled.div`
  background: #f8f8f8;
  width: 30%;
  border-radius: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 5px;
`;

const Last = styled.div`
  background: #f8f8f8;
  width: 60vw;
  height: 340px;
  border-radius: 20px;
  z-index: 3;
`;