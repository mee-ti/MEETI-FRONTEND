import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

// icon
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { RiMapPinLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

export default function HeaderBar() {
  return (
    <Container>
      <Link to="/calendar">
        <AiOutlineCalendar className="false" />
      </Link>
      <Link to="/">
        <FaRegAddressBook className="false" />
      </Link>
      <Link to="/reservation">
        <RiMapPinLine className="false" />
      </Link>
      <Link to="/approval">
        <HiOutlineMail className="true" />
      </Link>
    </Container>
  )
}

const Container = styled.div`
  background: #f8f8f8;
  width: 10%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  z-index: 4;
`;