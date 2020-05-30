import React from "react";
import MUIDataTable, {MUIDataTableOptions} from "mui-datatables";
import { SearchBlock } from './components/SearchBlock'
import { useTable } from "./hooks/useTable";

import styles from './Table.module.scss'

const columns = [
  {
    name: "showName",
    label: "Show name",
    options: {
      filter: false,
      sort: true,
    }
  },
  {
    name: "genres",
    label: "Genres",
    options: {
      filter: false,
      sort: false,
    }
  },
  {
    name: "language",
    label: "Language",
    options: {
      filter: false,
      sort: false,
    }
  },
  {
    name: "status",
    label: "Status",
    options: {
      filter: false,
      sort: false,
    }
  },
  {
    name: "rating",
    label: "Rating",
    options: {
      filter: false,
      sort: true,
    }
  },
];
const options = {
  filterType: 'checkbox',
  selectableRows: 'none',
  viewColumns: false,
  pagination: false,
  download: false,
  filter: false,
  print: false,
} as MUIDataTableOptions

export const Table = () => {
  const {
    value,
    tvShows,
    isFetching,
    findByValue,
    onInputChange
  } = useTable();

  return (
    <div className={styles.tableWrapper}>
      <SearchBlock
        value={value}
        onClick={findByValue}
        onChange={onInputChange}
      />
      <div className={isFetching ? styles.table : ''}>
        <MUIDataTable
          title="TV Shows"
          data={tvShows}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  )
}
