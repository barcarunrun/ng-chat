import {createReducer, on} from "@ngrx/store";
import {showRoomDetail, unShowRoomDetail} from "./session.action";

export const initialState = false;

const _showRoomDetailReducer = createReducer(
  initialState,
  on(showRoomDetail, state => true),
  on(unShowRoomDetail, state => false)
);

export function showRoomDetailReducer(state, action) {
  return _showRoomDetailReducer(state, action);
}
