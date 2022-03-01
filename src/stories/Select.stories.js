import Search from "../components/Search";
import Select from "../components/Select";

const options = [
  { label: "option 1", value: 1 },
  { label: "option 2", value: 2 },
  { label: "option 3", value: 3 },
  { label: "option 4", value: 4 },
  { label: "option 6", value: 6 },
];

export default {
  title: "Components/Select",
  component: Select,
  argTypes: { onSelect: { action: "onSelect" } },
};

const Template = (args) => <Select {...args} />;

export const Multi1 = Template.bind({});

Multi1.args = {
  options,
  isMulti: true,
  selected: [],
};

export const Searchable = Template.bind({});

Searchable.args = {
  options,
  selected: [],
  isSearchable: true,
};

export const SearchableAndMulti = Template.bind({});

SearchableAndMulti.args = {
  options,
  selected: [],
  isMulti: true,
  searchable: true,
};
