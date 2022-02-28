import React, { Fragment } from "react";
import styles from "./Option.module.css";

const Option = (props) => {
  const { label, value, selected, onToggleOption } = props;

  return (
    <label className={styles.option}>
      <input
        type="checkbox"
        id={value}
        onChange={() => onToggleOption(value)}
        checked={selected === null ? false : selected.includes(value)}
      />
      {label}
    </label>
  );
  //   return (
  //     <div className={styles.option}>
  //       <input
  //         type="radio"
  //         value={value}
  //         name={label}
  //         onChange={(e) => console.log(e.target.checked)}
  //         // checked={selected === null ? false : selected.includes(value)}
  //       />
  //       {label}
  //     </div>
  //   );
};

export default Option;
