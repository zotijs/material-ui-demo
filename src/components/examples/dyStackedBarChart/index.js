import { withStyles } from "@material-ui/core/styles";
import { withMockData } from "libararies/rechart/";
import DyStackedBarChart from "./DyStackedBarChart";
import styles from "./styles";
import data from "./data";

export default withMockData(data)(withStyles(styles)(DyStackedBarChart));
