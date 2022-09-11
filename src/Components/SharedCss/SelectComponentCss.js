/* react select library design */
export const middleCategorySelected = {
  singleValue: (provided) => ({
    ...provided,
    color: "#ffffff",
    //   width: 55,
  }),
  control: (base, state) => ({
    ...base,
    background: "#76A713",
    color: "#ffffff",
    height: 48,
    marginTop: -3,
    border: "none",
    boxShadow: state.isFocused ? null : null,
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    marginTop: 5.8,
    zIndex: 100,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#ffffff",
    paddingRight: 10,
    "&:hover": {
      color: "#ffffff",
    },
  }),
  input: (base, state) => ({
    ...base,
    color: "#ffffff",
  }),
  defaultValue: (base, state) => ({
    ...base,
    color: "#ffffff",
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#ffffff",
    };
  },
};

/* top header language select library style  */
export const topHeaderSelectLibraryStyle = {
  singleValue: (provided) => ({
    ...provided,
    color: "#000",
    //   width: 55,
  }),
  control: (base, state) => ({
    ...base,
    // background: "#76A713",
    color: "#000",
    border: "none",
    boxShadow: state.isFocused ? null : null,
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    marginTop: 5,
    zIndex: 100,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#000",
    padding: 0,
  }),
  input: (base, state) => ({
    ...base,
    color: "#ffffff",
  }),
  defaultValue: (base, state) => ({
    ...base,
    color: "#ffffff",
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#000",
    };
  },
};

/* shop page Product select library style  */
export const shopProduct = {
  singleValue: (provided) => ({
    ...provided,
    color: "#000000",
    padding: 0,
  }),
  control: (base, state) => ({
    ...base,
    background: "#ffffff",
    color: "#000000",
    width: "70px",
    padding: "0px 0px 0px 5px",
    "&:active": {
      border: "1px solid #000000",
    },
    boxShadow: state.isFocused ? null : null,
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 1,
    marginTop: 5,
    zIndex: 100,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#000000",
    padding: "0px 2px 0px 0px ",
  }),
  input: (base, state) => ({
    ...base,
    // color: "#000000",
  }),
  defaultValue: (base, state) => ({
    ...base,
    color: "#000000",
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#000000",
    };
  },
};

/* shop page Product select library style  */
export const sortByProduct = {
  singleValue: (provided) => ({
    ...provided,
    color: "#000000",
    padding: "0px 0px 0px 5px",
  }),
  control: (base, state) => ({
    ...base,
    background: "#ffffff",
    color: "#000000",
    padding: "0px 0px 0px 5px",
    width: "140px",
    // border: "none"
    "&:active": {
      border: "1px solid #000000",
    },
    boxShadow: state.isFocused ? null : null,
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 1,
    marginTop: 5,
    zIndex: 100,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#000000",
    padding: "0px 5px ",
  }),
  input: (base, state) => ({
    ...base,
    // color: "#000000",
  }),
  defaultValue: (base, state) => ({
    ...base,
    color: "#000000",
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#000000",
    };
  },
};
