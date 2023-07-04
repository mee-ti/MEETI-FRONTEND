import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ApprovalCom from "../../components/MainPage/Approval/ApprovalCom";
import HeaderBar from '../../components/common/HeaderBar';

// icon, img
import color from "./../../assets/color.png";

const ApprovalPage = () => {
  return (
    <Test>
      <MainDiv className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <HeaderBar />
        <Mid>
          <Title>승인</Title>
          <Link to="/approval/request">
            <div>승인 요청페이지 임시 이동버튼</div>
          </Link>
          <div>Request Approval</div>
        </Mid>
        <Last>
          {/* <ApprovalCom /> */}
        </Last>
      </MainDiv>
    </Test>
  );
};

export default ApprovalPage;

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