import { SET_DASHBOARD, LOADING_DASHBOARD, CLEAR_DASHBOARD } from '../types';

const initialState = {
  totalBudget: 0,
  totalSpent: 0,
  totalRemaining: 0,
  people: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DASHBOARD:
      return {
        ...state,
        loading: true
      };
    case SET_DASHBOARD:
      return {
        ...action.payload,
        loading: false,
        saving: false
      };

    case CLEAR_DASHBOARD:
      return {
        ...state
      };
    default:
      return state;
  }
}
