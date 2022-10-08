/* react select library design */
export const middleCategorySelected = {
  singleValue: (provided) => ({
    ...provided,
    color: "#000",
    //   width: 55,
  }),
  control: (base, state) => ({
    ...base,
    // background: "#76A713",
    color: "#000",
    borderTopLeftRadius: "25px",
    borderBottomLeftRadius: "25px",
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    height: 52,
    border: "none",
    paddingLeft: "20px",
    borderRight: "1px solid #cccccc",
    boxShadow: state.isFocused ? null : null,
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    zIndex: 100,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#000",
    width: "32px",
    paddingRight: 10,
    "&:hover": {
      color: "#000",
    },
  }),
  input: (base, state) => ({
    ...base,
    color: "#000",
  }),
  defaultValue: (base, state) => ({
    ...base,
    color: "#000",
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#000",
    };
  },
};

/* top header language select library style  */
export const topHeaderLanguageSelectorStyle = {
  singleValue: (provided) => ({
    ...provided,
    color: "#000",
  }),
  control: (base, state) => ({
    ...base,
    color: "#000",
    border: "none",
    cursor: "pointer",
    width: 67,
    boxShadow: state.isFocused ? null : null,
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    marginTop: 5,
    width: 100,
    zIndex: 100,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#000",
    width: 12,
    padding: 0,
    "&:hover": {
      color: "#333",
    },
  }),
  input: (base, state) => ({
    ...base,
    color: "#000",
    padding: 0,
  }),
  defaultValue: (base, state) => ({
    ...base,
    color: "#000",
    padding: 0,
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#000",
      padding: 0,
    };
  },
};
/* top header currency select library style  */
export const topHeaderCurrencySelectorStyle = {
  singleValue: (provided) => ({
    ...provided,
    color: "#000",
  }),
  control: (base, state) => ({
    ...base,
    color: "#000",
    border: "none",
    cursor: "pointer",
    width: 47,
    boxShadow: state.isFocused ? null : null,
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    marginTop: 5,
    width: 100,
    zIndex: 100,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#000",
    width: 12,
    padding: 0,
    "&:hover": {
      color: "#333",
    },
  }),
  input: (base, state) => ({
    ...base,
    color: "#000",
    padding: 0,
  }),
  defaultValue: (base, state) => ({
    ...base,
    color: "#000",
    padding: 0,
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#000",
      padding: 0,
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
