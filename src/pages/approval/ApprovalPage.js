import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ApprovalCom from "../../components/MainPage/Approval/ApprovalCom";
import HeaderBar from '../../components/common/HeaderBar';
// HiDownload
// icon, img
import color from "./../../assets/color.png";
import { HiDownload } from 'react-icons/hi';

const ApprovalPage = () => {

  const handleDownloadClick = () => {
    alert('파일 다운로드');
  }



  const Card = () => {
    return (
      <Fragment>
        <ApprovalBox>
          <ApprovalNameBox>
            박하민
          </ApprovalNameBox>
          <ApprovalDescriptionBox>
            오늘 점심메뉴건에 대한 결재입니다. 승인 요청 드립니다. 메뉴: 스시
          </ApprovalDescriptionBox>
          <ApprovalDownloadBox>
            <DownloadFileName>
              점심메뉴 파일제목입니다.pptx
            </DownloadFileName>
            <DownloadBtn>
              <HiDownload
                onClick={handleDownloadClick}
                size='24'
                color='#fff'
              />
            </DownloadBtn>
          </ApprovalDownloadBox>
          <ApprovalInputBox>
            <ApprovalInput />
            <DecisionBox>
              <DecisionBtn color='green'>승인</DecisionBtn>
              <DecisionBtn color='red'>반려</DecisionBtn>
            </DecisionBox>
          </ApprovalInputBox>
          <ApprovalText>
            * 반려 시 반려내용을 꼭 입력해 주세요.
          </ApprovalText>
        </ApprovalBox>
      </Fragment >
    );
  };

  return (
    <Container>
      <MainDiv className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <HeaderBar />
        <Mid>
          <TopBox>
            <Title>승인</Title>
            <div>Request Approval</div>
          </TopBox>
          <ApprovalList>
            <Card />
          </ApprovalList>
        </Mid>
        <Last>
          <Link to="/approval/request">
            <div>승인 요청페이지 임시 이동버튼</div>
          </Link>
          {/* <ApprovalCom /> */}
        </Last>
      </MainDiv>
    </Container>
  );
};

export default ApprovalPage;

const Container = styled.div`
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

const TopBox = styled.div`
  width: 100%;
  height: 10%;
`

const ApprovalList = styled.div`
  width: 100%;
`

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

const ApprovalBox = styled.div`
  width: 90%;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 3px #E6E6E6;
  border-radius: 10px;
  background-color: #fff;
`

const ApprovalNameBox = styled.div`
  width: 90%;
  height: 15%;
  display: flex;
  align-items: center;
  font-size: 24px;
`

const ApprovalDescriptionBox = styled.div`
  width: 90%;
  height: 20%;
  padding-top: 8px;
  padding-bottom: 8px;
`

const ApprovalDownloadBox = styled.div`
  width: 90%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px #BDBDBD;
`

const DownloadFileName = styled.div`
  width: 85%;
  height: 100%; 
  display: flex;
  align-items: center;
`

const DownloadBtn = styled.div`
  width: 8%;
  height: 55%; 
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #848484;
`

const ApprovalInputBox = styled.div`
  width: 90%;
  height: 35%; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
`

const ApprovalInput = styled.textarea`
  width: 75%;
  height: 80%; 
  border: solid 2px #BDBDBD;
`

const DecisionBox = styled.div`
  width: 20%;
  height: 80%; 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const DecisionBtn = styled.div`
  width: 80%;
  height: 40%; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  background-color:  ${(props => (props.color === "green" ? "#01DF01" : "#FE2E2E"))};
`

const ApprovalText = styled.div`
  width: 90%;
  height: 10%;
  font-size: 13px;
  color: #FE2E2E;
`

