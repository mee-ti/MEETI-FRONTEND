import React from "react";
import styled from "styled-components";
import profileExImg from "./../../../assets/profileExImg.png";
import { FiSend } from "react-icons/fi";
import { HiOutlineHeart, HiOutlineDotsHorizontal } from "react-icons/hi";

const MainContacts = () => {
  return (
    <ContactWrap>
      <ContactDiv>
        <MenuDiv>
          <HiOutlineDotsHorizontal style={{ color: "lightgray" }} />
        </MenuDiv>
        <ProfileImg src={profileExImg} />
        <CalendarButton>Calendar</CalendarButton>
        <ButtonsDiv>
          <IconButton>
            <FiSend style={{ width: "12px" }} />
          </IconButton>
          <IconButton>
            <HiOutlineHeart style={{ width: "12px" }} />
          </IconButton>
        </ButtonsDiv>
      </ContactDiv>
    </ContactWrap>
  );
};
//styled
const ContactWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
`;

const ContactDiv = styled.div`
  width: 147px;
  height: 219px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MenuDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 60px;
`;
const CalendarButton = styled.div`
  width: 114px;
  border-radius: 4px;
  background: #9c9c9c;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  text-align: center;
  font-size: 8px;
  margin-top: 20px;
  margin-bottom: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
`;

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 114px;
`;
const IconButton = styled.div`
  color: #fff;
  border-radius: 4px;
  background: #8165df;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  width: 52px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default MainContacts;
