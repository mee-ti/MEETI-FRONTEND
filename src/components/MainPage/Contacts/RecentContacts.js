import React from "react";
import styled from "styled-components";
import profileImg from "./../../../assets/profileExImg.png";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineHeart, HiOutlineDotsHorizontal } from "react-icons/hi";

const RecentContacts = () => {
  return (
    <ContactDiv>
      <ContactLeft>
        <ProfileImg src={profileImg} />
      </ContactLeft>
      <ContactRight>
        <CalendarButton>
          <AiOutlineCalendar style={{ color: "#fff" }} />
        </CalendarButton>
        <OtherButtons>
          <HiOutlineDotsHorizontal style={{ color: "#fff" }} />
        </OtherButtons>
        <OtherButtons>
          <HiOutlineHeart style={{ color: "#fff" }} />
        </OtherButtons>
      </ContactRight>
    </ContactDiv>
  );
};
//styled
const ContactDiv = styled.div`
  width: 232px;
  height: 47px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
`;
const ContactLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: left;
  align-items: center;
`;
const ContactRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
  align-items: center;
`;
const ProfileImg = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 34px;
  margin-left: 20px;
`;
const CalendarButton = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 3px;
  background: #9c9c9c;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px;
`;
const OtherButtons = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 3px;
  background: #8165df;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px;
`;
export default RecentContacts;
