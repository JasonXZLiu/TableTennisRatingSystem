import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import TableView from "../../../components/tableView/TableView";

const LIMIT = 25;

const styles = {
  buttonRowStyle: { margin: "auto" },
  buttonStyle: { margin: "1rem 1rem 1rem 1rem" },
  tableView: {
    width: "80%",
    margin: "auto"
  }
};

const RATING_HEADER = ["Ranking", "Name", "Province", "Sex", "Rating"];

const playerUrl = "/player";

class RatingsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
      nextIdx: 0
    };
  }

  onBack = () => {
    const { idx, MIN } = this.state;
    if (idx - MIN >= 0) {
      const newIdx = idx - MIN;
      const newNextIdx = newIdx + MIN;
      this.setState({
        idx: newIdx,
        nextIdx: newNextIdx
      });
    }
  };

  onNext = () => {
    const { idx, MIN } = this.state;
    const { filteredPlayers } = this.props;
    if (idx + MIN < filteredPlayers.length) {
      const newIdx = idx + MIN;
      const newNextIdx = newIdx + MIN;
      this.setState({
        idx: newIdx,
        nextIdx: newNextIdx
      });
    }
  };

  calculateRanking = sublist => {
    const { idx } = this.state;
    let count = idx + 1;
    sublist.map(row => {
      row.ranking = count++;
    });
    return sublist;
  };

  render = () => {
    const { idx, nextIdx } = this.state;
    const { classes, filteredPlayers } = this.props;
    const MIN = filteredPlayers.length > LIMIT ? LIMIT : filteredPlayers.length;
    let sublist = filteredPlayers.slice(idx, nextIdx === 0 && MIN);
    sublist = this.calculateRanking(sublist);
    const table = {
      headers: RATING_HEADER,
      url: playerUrl,
      rows: sublist
    };
    return (
      <div>
        <div className="row">
          <TableView
            className={classes.tableView}
            {...table}
            buttonAction={{
              hasNext: idx + MIN >= filteredPlayers.length,
              hasBack: idx === 0
            }}
          />
        </div>
      </div>
    );
  };
}

RatingsTable.propTypes = {
  filteredPlayers: PropTypes.array.isRequired,
  searchValue: PropTypes.string,
  sexValue: PropTypes.string,
  provinceValue: PropTypes.string,
  categoryValue: PropTypes.string
};

RatingsTable.defaultProps = {
  searchValue: "",
  sexValue: "",
  provinceValue: "",
  categoryValue: ""
};

export default withStyles(styles)(RatingsTable);
