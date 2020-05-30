import React, {useEffect, useState} from "react";
import {getTvShows} from "../api/getTvShows";
import {useDispatch, useSelector} from "react-redux";
import {shows} from "../../../reduxStore/tvShowsReducer/selectors";
import {refreshTVShows} from "../../../reduxStore/tvShowsReducer/actionCreators";

export const useTable = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const tvShows = useSelector(shows)
  const [isFetching, setIsFetching] = useState<boolean>(false)

  async function getShows(searchWord: string) {
    try {
      setIsFetching(true)
      const data = await getTvShows(searchWord)
      await dispatch(refreshTVShows(data))
      setValue('')
    } catch (error) {
      console.log('Fetch error:', error)
    } finally {
      setIsFetching(false)
    }
  }

  useEffect(() => {
    getShows('girls')
  }, [])

  const findByValue = () => {
    getShows(value)
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return {
    value,
    tvShows,
    isFetching,
    findByValue,
    onInputChange
  }
}
