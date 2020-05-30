import React, {memo} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import styles from './SearchBlock.module.scss';

type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick: () => void
}

export const SearchBlock = memo<Props>((props) => {
  return (
    <div className={styles.searchBlockWrapper}>
      <TextField
        label="Search text"
        id="standard-basic"
        value={props.value}
        onChange={props.onChange}
      />
      <Button
        disabled={!props.value}
        size="large"
        color="primary"
        variant="contained"
        onClick={props.onClick}
      >
        Search
      </Button>
    </div>
  )
})
