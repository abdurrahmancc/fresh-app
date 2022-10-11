export const selectorStyle = {
  control: (base) => ({
    ...base,
    border: "1px solid #474E64",
    boxShadow: "none",
    paddingRight: "5px",
    paddingLeft: "16px",
    borderRadius: "0.5rem",
    background: "none",
    // zIndex: "1",
    minHeight: "3rem",
    "&:hover": {
      border: "1px solid #474E64",
    },
    dropdownIndicator: (base) => ({
      ...base,
      color: "white",
      "&:hover": {
        color: "white",
      },
    }),
  }),
};
