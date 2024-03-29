import axios from 'axios';

// constants
import {
  ACCOUNT_DELETION,
  SIGN_OUT
} from '../constants/urls/authUrls';

export const fetchSignIn = async (data) => {
  try {
    const res = await axios.post(`/meeti/user/login`, data);
    const { accessToken, refreshToken } = res.data;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('userId', res.data.id);

    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchGetRefreshToken = (refreshToken) => {
  try {
    const res = axios.post(`/meeti/access-token/issue`, { refreshToken });

    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchPersonalSignUp = (data) => {
  try {
    const res = axios.post(`/meeti/user/join`, data);

    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchOfficeSignUp = (data) => {
  try {
    const res = axios.post(`/meeti/user/join/office`, data);

    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchGetAuthCode = (data) => {
  try {
    const res = axios.post(`/email/valid`, data);

    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchEmailVerificationCode = (data) => {
  try {
    const res = axios.post(`/email/valid / code`, data);

    return res;
  } catch (error) {
    throw error;
  }

};

// 회원탈퇴
export const fetchAccountDeletion = (userId) => {
  try {
    const res = axios.delete(`${ACCOUNT_DELETION}/${userId}`);

    return res;
  } catch (error) {
    throw error;
  }
};

// 로그아웃
export const fetchSignOut = () => {
  try {
    const res = axios.post(SIGN_OUT);

    return res;
  } catch (error) {
    throw error;
  }
};