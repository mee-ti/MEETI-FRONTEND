import React from "react";
import styled from "styled-components";
import color from "./../../assets/color.png";
import { useNavigate } from "react-router-dom";
import ApprovalCom from "../../components/MainPage/Approval/ApprovalCom";

import { Link } from "react-router-dom";

// icon
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { RiMapPinLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import MainContacts from "../../components/MainPage/Contacts/MainContacts";

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

const Header = styled.div`
  background: #f8f8f8;
  width: 10%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  z-index: 4;
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
const SubTitle = styled.div``;

const Last = styled.div`
  background: #f8f8f8;
  width: 60vw;
  height: 340px;
  border-radius: 20px;
  z-index: 3;
`;
const ContactsPage = () => {
  return (
    <Test>
      <MainDiv className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header>
          <Link to="/calendar">
            <AiOutlineCalendar className="false" />
          </Link>
          <Link to="/">
            <FaRegAddressBook className="true" />
          </Link>
          <Link to="/reservation">
            <RiMapPinLine className="false" />
          </Link>
          <Link to="/approval">
            <HiOutlineMail className="false" />
          </Link>
        </Header>
        <Mid>
          <Title>최근 연락처</Title>
          <SubTitle>Recent Contacts</SubTitle>
        </Mid>
        <Last>
          <MainContacts />
        </Last>
      </MainDiv>
    </Test>
  );
};
export default ContactsPage;
