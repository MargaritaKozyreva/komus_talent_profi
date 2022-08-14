import { userGroupReducers } from "@entities/GroupCard/model/group/slices";
import { userTalentReducers } from "@entities/GroupCard/model/talent/slices";
import { userRateReducers } from "@entities/RateCard/model/slices";
import { userReducers } from "@entities/User/model/slices";
import { modalReducers } from '@features/Modal/redux/ModalSlices';
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  user: userReducers,
  userGroup: userGroupReducers,
  userTalent: userTalentReducers,
  userRate: userRateReducers,
  modal: modalReducers,
});

export default rootReducer;
