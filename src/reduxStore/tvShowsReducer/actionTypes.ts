import {SHOW} from "./Model";

export const REFRESH_TV_SHOWS = 'REFRESH_TV_SHOWS'

export interface RefreshTVShows {
  type: typeof REFRESH_TV_SHOWS
  payload: SHOW[]
}

export type Actions = RefreshTVShows
