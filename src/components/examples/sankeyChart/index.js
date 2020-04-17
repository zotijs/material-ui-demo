import { withStyles } from "@material-ui/core/styles";
import { withMockData } from "libararies/rechart/";
import SankeyChart from "./SankeyChart";
import styles from "./styles";
import data from "./data";

export default withStyles(styles)(withMockData(data)(SankeyChart));
