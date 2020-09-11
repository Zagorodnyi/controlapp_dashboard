export default {
  navbar: {
    "&button": {
      color: "blue",
    },
    "& h6": {
      fontSize: "2.3rem !important",
    },
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    padding: " 0 15px",
    borderRadius: "0 0 5% 5%",
    backgroundColor: "gray",
    backgroundImage:
      "linear-gradient(210deg, rgb(70, 48, 137) 0%, rgb(70, 86, 136) 50.02%, rgb(0, 134, 116) 100%);",
    transition: "all 2s ease-in-out",
  },
  disabled: {
    transition: "all 2s ease-in-out",
    backgroundImage: "none",
    backgroundColor: "gray",
  },
};
