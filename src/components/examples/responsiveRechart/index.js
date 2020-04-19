import { withStyles } from "@material-ui/core/styles";
import { withMockData } from "libararies/rechart/";
import styles from "./styles";
import data from "./data";
import ResponsiveRecart from "./ResponsiveRechart";

export default withMockData(data)(withStyles(styles)(ResponsiveRecart));
