// 액션 type 선언
// 액션 생성함수 선언
// 액션 객체 타입
// 이 리덕스 모듈에서 관리할 상태의 타입 선언
// 초기상태 선언
// 리듀서 선언

import React, { useEffect } from 'react';
import { deprecated, ActionType, createReducer } from 'typesafe-actions';

const { createStandardAction } = deprecated;

const MODIFY = 'dayStock/MODIFY';

export const modify = createStandardAction(MODIFY)();

const actions = { modify };
type DayStockAction = ActionType<typeof actions>;

// data type
type DayStockState = {};
const initialState: DayStockState = {};

const dayStock = createReducer<DayStockState, DayStockAction>(initialState, {});

export default dayStock;
