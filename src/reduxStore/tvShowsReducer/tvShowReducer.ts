import {SHOW} from "./Model";
import {Actions} from "./actionTypes";

const initial: SHOW[] = [['', [''], '', '', 0, 0]]

export function tvShowReducer(
  state = initial,
  action: Actions
): SHOW[] {
  switch (action.type) {
    case "REFRESH_TV_SHOWS":
      return state = action.payload
    default:
      return state
  }
}
