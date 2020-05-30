import {SHOW} from "./Model";
import {REFRESH_TV_SHOWS} from "./actionTypes";

export const refreshTVShows = (shows: SHOW[]) => {
  return ({
      type: REFRESH_TV_SHOWS,
      payload: shows
    })
}
