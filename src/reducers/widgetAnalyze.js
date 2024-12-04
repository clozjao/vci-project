import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectWidgetAnalyzeButton: 'matchStatistics',
  showWidgetAnalyzeBoardState: 'notActive',
  // showWidgetAnalyzeBoardState 有三種狀態 預設 notActive 收起沒有動畫, in 上滑動話, out 下滑動話
};
const reducers = {
  setSelectWidgetAnalyzeButton: (state, action) => {
    state.selectWidgetAnalyzeButton = action.payload;
  },
  resetSelectWidgetAnalyzeButton: (state, action) => {
    state.selectWidgetAnalyzeButton = action.payload;
  },
  setShowWidgetAnalyzeBoardState: (state, action) => {
    state.showWidgetAnalyzeBoardState = action.payload;
  },
};

export const widgetAnalyzeSlice = createSlice({
  name: 'widgetAnalyze',
  initialState,
  reducers,
});

export const selectWidgetAnalyze = ({ widgetAnalyzeReducer }) =>
  widgetAnalyzeReducer;

export const {
  setSelectWidgetAnalyzeButton,
  resetSelectWidgetAnalyzeButton,
  setShowWidgetAnalyzeBoardState,
} = widgetAnalyzeSlice.actions;

const widgetAnalyzeReducer = widgetAnalyzeSlice.reducer;

export default widgetAnalyzeReducer;
