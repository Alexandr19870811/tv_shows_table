import {tvShowReducer} from "../tvShowReducer";
import {REFRESH_TV_SHOWS} from "../actionTypes";

describe("tvShowReducer coverage", () => {

  it("Should refresh shows", () => {
    expect(
      tvShowReducer(
        [],
        {
          type: REFRESH_TV_SHOWS,
          payload: [['one', ['one'], 'one', 'one', 0, 0]]
        }
        )
    ).toEqual(
      [['one', ['one'], 'one', 'one', 0, 0]]
    )
  });

})
