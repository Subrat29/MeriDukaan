import React, { useState } from "react";
import FormInput from "./FormInput";
import { Form, Link } from "react-router-dom";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";
import FormDatePicker from "./FormDatePicker";
import FormCheckbox from "./FormCheckbox";
import StatesData from "../data/States.json";

const Filters = () => {
  const [selectCategoryList, setSelectCategoryList] = useState([
    "all",
    "shoes",
    // Other categories
  ]);

  const [selectBrandList, setSelectBrandList] = useState([
    "all",
    "WALK LONDON",
    // Other brands
  ]);

  // Modify state list to include districts
  const [selectStateList, setSelectStateList] = useState([
    { name: "all", districts: [] },
    { name: "Haryana", districts: ["Gurugram", "Faridabad" /* Add other districts */] },
    { name: "Gujarat", districts: ["Ahmedabad", "Surat" /* Add other districts */] },
    {
      name: "Uttarakhand",
      districts: ["Dehradun", "Nainital" /* Add other districts */],
    },
  ]);

  const [selectedState, setSelectedState] = useState("all");

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue=""
      />
      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        list={selectCategoryList}
        size="select-sm"
        defaultValue="all"
      />
      {/* COMPANIES */}
      <FormSelect
        label="select brand"
        name="brand"
        list={selectBrandList}
        size="select-sm"
        defaultValue="all"
      />
      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        list={["asc", "desc", "price high", "price low"]}
        size="select-sm"
        defaultValue="a-z"
      />
      {/* Producer */}
      <FormSelect
        label="Select gender"
        name="gender"
        list={["all", "male", "female"]}
        size="select-sm"
        defaultValue="all"
      />
      {/* State */}
      <FormSelect
        label={"Select state"}
        name={"state"}
        list={selectStateList.map((state) => state.name)}
        size="select-sm"
        onChange={handleStateChange}
      />
      {/* District */}
      <FormSelect
        label={"Select district"}
        name={"district"}
        list={selectStateList.find((state) => state.name === selectedState)?.districts}
        size="select-sm"
        defaultValue="all"
      />
      <FormRange name="price" label="select price" size="range-sm" price={2000} />
      {/* Date Picker */}
      <FormDatePicker label="select minimum production date" name="date" />
      {/* In stock */}
      <FormCheckbox label="Only products in stock" name="stock" defaultValue="false" />
      {/* BUTTONS */}
      <button
        type="submit"
        className="btn bg-blue-600 hover:bg-blue-500 text-white btn-sm"
      >
        search
      </button>
      <Link to="/shop?page=1" className="btn btn-primary btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
