import { Fragment, useState } from "react";
import "./App.css";
import Select from "./components/Select";

const options = [
  { label: "option 1", value: 1 },
  { label: "option 2", value: 2 },
  { label: "option 3", value: 3 },
  { label: "option 4", value: 4 },
  { label: "option 5", value: 5 },
];

const App = () => {
  const [selected, setSelected] = useState(null);

  const onSelect = (selected) => {
    setSelected(selected);
    // alert(selected)
  };

  const placeholder =
    selected &&
    selected.map(
      (value) => `${options.find((option) => option.value === value).label}, `
    );

  return (
    <div className="App">
      {/* {selected &&
        selected.map((value) => (
          <label key={value}>
            {options.find((option) => option.value === value).label},{" "}
          </label>
        ))} */}

      <Select
        {...{ options, onSelect, selected, placeholder }}
        isMulti
        isSearchable
      />
    </div>
  );
};

export default App;
