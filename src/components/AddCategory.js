import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState("");

  const hadleInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    if (inputValue.trim().length>2) {

      // setCategories(cats=>[...cats, inputValue])//ingresamos el valor por defecto y por ultimo el ultimo valors
      setCategories(cats=>[inputValue,...cats])
      setInputValue('')

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={hadleInputChange} placeholder='Gif a buscar'/>
    </form>
  );
};

AddCategory.propTypes={
  setCategories:PropTypes.func.isRequired
  //sirve para que la guncion sea requerida
}



export default AddCategory;
