import React, { useState } from "react";
import Option from "./Option";
import Search from "./Search";
import styles from "./Select.module.css";

const Select = (props) => {
  const { options, onSelect, selected, isMulti, placeholder, isSearchable } =
    props;
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(options);

  console.log(placeholder);
  const toggleSelect = () => setOpen((prev) => !prev);
  const onToggleOption = (option) => {
    // if nothing is selected or is not multi
    if (!selected || !isMulti) return onSelect([option]);

    const updatedSelected = [...selected];
    if (selected.includes(option)) {
      const i = updatedSelected.findIndex(
        (selectedOption) => selectedOption === option
      );
      updatedSelected.splice(i, 1);

      return onSelect(updatedSelected);
    }

    updatedSelected.push(option);
    onSelect(updatedSelected);
  };

  const handleSearch = (text) =>
    setData(options.filter((option) => option.label.includes(text)));

  const toggleSelectAll = () => {
    // if is all selected
    if (!selected || selected.length !== options.length)
      return onSelect(options.map((option) => option.value));

    return onSelect([]);
  };

  const Shortcut = (
    <span onClick={toggleSelectAll}>
      {!selected
        ? "select all"
        : selected.length === options.length // if is all selected
        ? "Deselect all"
        : "select all"}
    </span>
  );

  console.log(placeholder);

  return (
    <div className={styles.select}>
      <div onClick={toggleSelect} className={styles.open_select}>
        {placeholder || "Select an option"}
        {placeholder && placeholder.length === 0 && "Select an option"}
      </div>
      <div
        style={{ display: open ? "block" : "none" }}
        className={styles.options}
      >
        {isSearchable && <Search handleSearch={handleSearch} />}
        {data.map((option) => (
          <Option
            {...option}
            {...{ onToggleOption, selected }}
            key={option.value}
          />
        ))}
        {isMulti && Shortcut}
      </div>
    </div>
  );
};

export default Select;
