import React from "react";
import styled from "styled-components";

const RecentContacts = () => {
  return (
    <>
      <TitleText>최근 연락처</TitleText>
      <SubTitleText>Recent Contacts</SubTitleText>
    </>
  );
};
//styled
const TitleText = styled.div`
  color: #535571;
  font-size: 20px;
  font-weight: 700;
`;
const SubTitleText = styled.div`
  color: #535571;
  font-size: 12px;
`;

export default RecentContacts;
