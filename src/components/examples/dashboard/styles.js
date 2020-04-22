export default {
  container: {
    display: "flex",
  },
  drawer: {
    width: 180,
    flexShrink: 0,
    zIndex: -1,
  },
  drawerPaper: {
    width: 180,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: 8,
    display: "grid",
    gridTemplateRows: "repeat(2, 1fr)",
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  chartContainer: {
    height: 500,
    minWidth: 260,
    maxWidth: 520,
  },
};
