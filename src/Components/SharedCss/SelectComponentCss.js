/* react select library design */
export const middleCategorySelected = {
  singleValue: (provided) => ({
    ...provided,
    color: "#ffffff",
    //   width: 55,
  }),
  control: (base, state) => ({
    ...base,
    background: "#3d9657",
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
    color: "#ffffff",
    //   width: 55,
  }),
  control: (base, state) => ({
    ...base,
    background: "#15673b",
    color: "#ffffff",
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
    color: "#ffffff",
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
      color: "#ffffff",
    };
  },
};
