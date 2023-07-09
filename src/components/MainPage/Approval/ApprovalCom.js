import React, { Fragment, useState } from "react";
import styled from "styled-components";

// 개발자 컴포넌트
import useInput from '../../../hooks/useInput';

// icon
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ApprovalCom = () => {
  const [userId, handleUserIdChange] = useInput('');
  const [description, handleDesChange] = useInput('');
  const [isUserId, setIsUserId] = useState(false);

  const handleOnUserIdCheck = () => {
    alert("존재하는 회원입니다.");
    setIsUserId(true);
  };

  return (
    <Fragment>
      <Header>
        <HiOutlineMail className="true" style={{ padding: "0" }} />
        <HeadTitle>Approval</HeadTitle>
      </Header>
      <SubDiv>
        <FlexBox>
          <Input onChange={handleUserIdChange} />
          <SearchButton onClick={handleOnUserIdCheck}>
            <AiOutlineSearch className="AiOutlineSearch2" />
            회원 찾기
          </SearchButton>
        </FlexBox>
        {isUserId && userId !== '' && (
          <UserNameBox>{userId}</UserNameBox>
        )}
      </SubDiv>
      <SubDiv>
        <FlexBox>
          <SubText>결재 서류 업로드</SubText>
          <FileButton htmlFor="file">파일선택</FileButton>
          <InputFileHidden type="file" name="file" id="file" accept='.hwp, .pdf' />
        </FlexBox>
      </SubDiv>
      <Textarea onChange={handleDesChange} />
      <SubmitButton>
        <FaRegPaperPlane style={{ color: "#ffffff", marginRight: "10px" }} />
        전송하기
      </SubmitButton>
    </Fragment>
  );
};

export default ApprovalCom;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

const HeadTitle = styled.div`
  color: #6f5cea;
  font-size: 14px;
  margin-top: 30px;
  margin-left: -10px;
`;

const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const FlexBox = styled.div`
  display: flex;
`;

const UserNameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 25px;
  border: solid 2px #81F79F;
  background-color: #fff;
  border-radius: 8px;
  margin-left: 8px;
  font-size: 14px;
`;

const Input = styled.input`
  width: 200px;
  border: 0.5px solid #535571;
  margin: 8px;
`;

const SearchButton = styled.div`
  width: 80px;
  height: 22px;
  background: #ffffff;
  border: 0.5px solid #535571;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  font-size: 8px;
  text-align: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 8px;
`;

const InputFileHidden = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0.5px solid #535571;
`;

const FileButton = styled.label`
  width: 66px;
  height: 22px;
  background: #ffffff;
  border: 0.5px solid #535571;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  font-size: 8px;
  text-align: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 8px;
`;

const SubText = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  margin: 8px;

`;

const Textarea = styled.textarea`
  width: 50vw;
  height: 40vh;
  background: #ffffff;
  border: 0.5px solid #535571;
  margin-top: 20px;
`;

const SubmitButton = styled.div`
  width: 111px;
  height: 33px;
  background: #8165df;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-top: 20px;
`;
