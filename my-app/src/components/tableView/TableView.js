import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import RowView from "./rowView/RowView";
import TableHeader from "./TableHeader";

const LIMIT = 15;
let idx = 0;

class TableView extends React.Component {
  render = () => {
    const { styling, headers, rows } = this.props;
    console.log(rows);
    const displayRows = rows.splice(idx, LIMIT + idx);
    let count = 0;

    return (
      <table className="table" style={styling}>
        <TableHeader header={headers} />
        <tbody>
          {displayRows.map(row => {
            count++;
            return <RowView key={count} headers={headers} rowValue={row} />;
          })}
        </tbody>
      </table>
    );
  };
}

TableView.propTypes = {
  headers: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired
};

export default TableView;