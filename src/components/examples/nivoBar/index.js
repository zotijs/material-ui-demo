import { withStyles } from "@material-ui/core/styles";
import { withMockData } from "libararies/data";
import NivoBarChart from "./NivoBarChart";
import styles from "./styles";
import data from "./data";

export default withMockData(data)(withStyles(styles)(NivoBarChart));
