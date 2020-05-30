import { refreshTVShows } from "../actions";
import {REFRESH_TV_SHOWS} from "../actionTypes";

describe("refreshTVShows action", () => {

  it("refreshTVShows action should return correct object", () => {
    const expectedResult = {
      type: REFRESH_TV_SHOWS,
      payload: [['string', ['one'], 'string', 'string', 0, 0]]
    }

    expect(refreshTVShows([['string', ['one'], 'string', 'string', 0, 0]])).toEqual(expectedResult)
  })

})
