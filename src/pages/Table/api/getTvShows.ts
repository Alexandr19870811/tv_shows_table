import { client } from "../../../config/apiClient";
import { TV_SHOWS_RESPONSE } from '../Model';
import {SHOW} from "../../../reduxStore/tvShowsReducer/Model";
import { formatArrayOfStrings } from "../../../utils/formatArrayOfStrings";

function formatter(data: TV_SHOWS_RESPONSE[]): SHOW[] {
  return data.map(item => {
    return [
      item.show.name,
      formatArrayOfStrings(item.show.genres),
      item.show.language,
      item.show.status,
      item.show.rating.average,
      item.show.id
    ]
  })
}

export const getTvShows = async (query:string): Promise<SHOW[]> => {
  const response = await client.get(`http://api.tvmaze.com/search/shows?q=${query}`)

  return formatter(response.data)
}
