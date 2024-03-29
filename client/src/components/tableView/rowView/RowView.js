import React, { Component } from "react";
import { format } from "date-fns";

const getHeaderAccessor = entry => {
  if (entry instanceof Object) {
    if (entry.hasOwnProperty("accessor")) return entry.accessor;
    return entry.label;
  }
  return entry;
};

const findCorrespondingEntry = (header, row) => {
  if (header.includes(".")) {
    const pathToField = header.split(".");
    var curObject = row;
    pathToField.map(field => {
      var nextFieldName =
        field.charAt(0).toLowerCase() + field.replace(" ", "").slice(1);
      if (curObject.hasOwnProperty(nextFieldName)) {
        curObject = curObject[nextFieldName];
      }
    });
    return curObject;
  }
  const headerValue =
    header.charAt(0).toLowerCase() + header.replace(" ", "").slice(1);
  if (row.hasOwnProperty(headerValue)) {
    return row[headerValue];
  }
};

const isDate = cellValue => {
  const date = new Date(cellValue);
  return parseFloat(cellValue) !== cellValue && !isNaN(date.getMonth());
};

const getCellComponent = (count, header, rowValue, action, rowSize) => {
  const headerValue = getHeaderAccessor(header);
  const cellValue = findCorrespondingEntry(headerValue, rowValue);
  if (header.valueFunction) {
    return <td key={count}>{header.valueFunction(rowValue)}</td>;
  }
  if (header.enableSelect) {
    if (cellValue instanceof Array && cellValue.length > 1) {
      const ListCellSelector = action.selector.component;
      return (
        <td key={count}>
          <ListCellSelector
            onChange={action.selector.onChange(
              Math.floor(count / rowSize),
              headerValue
            )}
            cellValues={cellValue}
          />
        </td>
      );
    }
  }
  if (cellValue instanceof Array && cellValue.length > 1) {
    return <td key={count}>{cellValue.join(", ")}</td>;
  }
  if (isDate(cellValue)) {
    return <td key={count}>{format(new Date(cellValue), "MM/DD/YYYY")}</td>;
  }
  return <td key={count}>{cellValue}</td>;
};

class RowView extends Component {
  state = {
    hover: false
  };

  toggle = () => {
    this.setState({ hover: !this.state.hover });
  };

  render = () => {
    const { hover } = this.state;
    const { headers, rowValue, onClick, action } = this.props;
    const rowSize = headers[0].length;
    let count = -1;
    return (
      <tr
        onMouseEnter={this.toggle}
        onMouseLeave={this.toggle}
        onClick={onClick}
        style={{ background: hover ? "#E8EAF6" : "" }}
      >
        {headers.map(header => {
          count++;
          return getCellComponent(count, header, rowValue, action, rowSize);
        })}
      </tr>
    );
  };
}

export default RowView;
