import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

import Header from '../../common/Header';

// bg-color
import color from "./../../assets/color.png";

// apis
import { fetchGetUserInfo } from '../../api/profile';
import {
  fetchAccountDeletion, fetchSignOut,
} from '../../api/auth';

// CSS
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
  width: 100%;
  margin-left: 35px;
  border-radius: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 5px;
`;

const Profile = styled.div`
  margin: 30px;
`;

const ProfileImg = styled.img`
  width: 128px;
  height: 128px;
  margin-right: 50px;
  border-radius: 50%;
  background: #d9d9d9;
  float: left;
`;

const Info = styled.div`
  display: flex;
  margin: 15px;
  color: #9c9c9c;
  white-space: nowrap;
  overflow: hidden;
`;

const Introduction = styled.div`
  margin: 20px;
`;

const Text = styled.div`
  margin-left: 15px;
  color: black;
  white-space: pre-wrap;
`;

const Buttons = styled.div`
  margin-top: 280px;
  width: 250px;
  display: flex;
  justify-content: space-around;
`;

const Btn = styled.button`
  padding: 5px 9px;
  font-size: 12px;
  border: solid 1px #8165df;
  border-radius: 5px;
  background: none;
  color: #8165df;
  cursor: pointer;
`;

const Last = styled.div`
  background: #f8f8f8;
  width: 60vw;
  height: 340px;
  border-radius: 20px;
`;

const ProfilePage = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const [info, setInfo] = useState({
    username: '',
    profile: '',
    role: '',
  });

  useEffect(() => {
    getUserInfo();
  });

  const getUserInfo = async () => {
    const res = await fetchGetUserInfo();

    setInfo({
      ...info,
      username: res.data.username,
      profile: res.data.profile,
      role: res.data.role,
    });
  };

  const handleAccountDeletionClick = async () => {
    const userConfirmation = prompt("회원탈퇴를 진행하려면 '회원탈퇴'라고 입력해주세요.");

    if (userConfirmation === '회원탈퇴') {
      const res = await fetchAccountDeletion(userId);

      if (res.data) {
        navigate('./auth/sign-in');
      }
    } else {
      alert("입력이 일치하지 않습니다. 회원탈퇴를 원하시면 '회원탈퇴'라고 정확히 입력해주세요.");
    }
  };

  const handleSignOutClick = async () => {
    const res = await fetchSignOut();

    if (res.data) {
      navigate('./auth/sign-in');
    } else {
      alert('로그아웃 실패!');
    }
  };

  return (
    <Test>
      <MainDiv className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header />
        <Mid>
          <Title>마이페이지</Title>
          <Profile>
            <ProfileImg src='./profile.png' />
            <div>
              <Info>
                이름 l<Text>{info.username}</Text>
              </Info>
              <Info>
                이메일 l<Text>juhee01176@gmail.com</Text>
              </Info>
              <Info>
                전화번호 l<Text>010-3264-5936</Text>
              </Info>
            </div>
          </Profile>
          <Introduction>
          </Introduction>
          <Buttons>
            <Btn>회원 정보 수정</Btn>
            <Btn onClick={handleSignOutClick}>로그아웃</Btn>
            <Btn onClick={handleAccountDeletionClick}>회원탈퇴</Btn>
          </Buttons>
        </Mid>
        <Last></Last>
      </MainDiv>
    </Test>
  );
};

export default ProfilePage;