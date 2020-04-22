import { withStyles } from "@material-ui/core/styles";
import { withMockData } from "libararies/data";
import RechartsBar from "./RechartsBar";
import styles from "./styles";
import data from "./data";

export default withStyles(styles)(withMockData(data)(RechartsBar));
