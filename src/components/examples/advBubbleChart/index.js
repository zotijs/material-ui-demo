import { withStyles } from "@material-ui/core/styles";
import { withMockData } from "libararies/data";
import AdvBubbleChart from "./AdvBubbleChart";
import styles from "./styles";
import data from "./data";

export default withStyles(styles)(withMockData(data)(AdvBubbleChart));
