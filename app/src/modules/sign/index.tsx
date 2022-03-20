// 액션 type 선언
// 액션 생성함수 선언
// 액션 객체 타입
// 이 리덕스 모듈에서 관리할 상태의 타입 선언
// 초기상태 선언
// 리듀서 선언

import { deprecated, ActionType, createReducer } from 'typesafe-actions';

const { createStandardAction } = deprecated;

// 액션 type 선언
const LOGIN = 'sign/LOGIN';
const LOGOUT = 'sign/LOGOUT';

// 액션 생성함수
export const login = createStandardAction(LOGIN)();
export const logout = createStandardAction(LOGOUT)();

// 액션 객체 타입
const actions = { login, logout };
type SignAction = ActionType<typeof actions>;

// 이 리덕스 모듈에서 관리할 상태의 타입 선언
type SignState = {
  isLogin: boolean;
  userName: string;
};

// 초기상태
const initialState: SignState = {
  isLogin: false,
  userName: ''
};

const sign = createReducer<SignState, SignAction>(initialState, {
  [LOGIN]: (state) => ({ ...state, isLogin: true }), // username 받아와서 변경해줄 예정
  [LOGOUT]: (state) => ({ isLogin: false, userName: '' })
});

export default sign;
