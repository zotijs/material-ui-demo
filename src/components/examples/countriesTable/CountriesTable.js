import React from "react";
import { TableComponent as Table } from "components/examples";

const CountriesTable = ({ classes, data, ...restProps }) => (
  <Table classes={classes} data={data} />
);

export default CountriesTable;
