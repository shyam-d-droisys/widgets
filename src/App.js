import React, { useState } from "react";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is JavaScript Front-End Technology and Library",
  },
  {
    title: "Why use React?",
    content: "React is favourite and best JS library to use and learn",
  },
  {
    title: "Why and How do you use React?",
    content: "We use React by creating components and very easy to use.",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path={"/"}>
        <Accordion items={items} />
      </Route>
      <Route path={"/list"}>
        <Search />
      </Route>
      <Route path={"/dropdown"}>
        <Dropdown
          label={"Select a Color"}
          options={options}
          selected={selected}
          onSelectChange={setSelected}
        />
      </Route>
      <Route path={"/translate"}>
        <Translate />
      </Route>
    </div>
  );
};

export default App;
