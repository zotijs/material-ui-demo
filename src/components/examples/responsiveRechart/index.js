import { withStyles } from "@material-ui/core/styles";
import { withMockData } from "libararies/data";
import styles from "./styles";
import data from "./data";
import ResponsiveRecart from "./ResponsiveRechart";

export default withMockData(data)(withStyles(styles)(ResponsiveRecart));
