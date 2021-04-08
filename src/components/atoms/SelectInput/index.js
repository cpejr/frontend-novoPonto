import React from "react";
import { Select } from "antd";
import { InputContainer, ErrorMessage } from "./styles";

const SelectInput = ({
  options,
  error = false,
  errorMessage,
  value = "",
  callback,
}) => {
  const { Option } = Select;

  return (
    <>
      <InputContainer error={error}>
        <Select
          defaultValue={value}
          onChange={(value) => callback(value)}
          className="inputSelect"
        >
          <Option value="" className="inputSelect">--</Option>
          {options.map((option) => {
            return <Option value={option} className="inputSelect">{option}</Option>;
          })}
        </Select>
      </InputContainer>
      {error && (
        <ErrorMessage class="errorMessage">{errorMessage}</ErrorMessage>
      )}
    </>
  );
};

export default SelectInput;
