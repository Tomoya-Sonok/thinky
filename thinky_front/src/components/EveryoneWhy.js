import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import axios from "axios";
import EveryoneWhyStyle from "../styles/EveryoneWhy.module.scss";
import WhiesList from "./WhiesList";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }));

// const selectStyle = {
//   width: "30vh",
// };

const btnStyle = {
  height: "50px",
  width: "100px",
};

export default class EveryoneWhy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whies: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/whies/index")
      .then((results) => {
        console.log(results);
        this.setState({ whies: results.data });
      })
      .catch((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <>
        <div className={EveryoneWhyStyle.top}>
          <div className={EveryoneWhyStyle.search}>
            <input className={EveryoneWhyStyle.box}></input>
            <div className={EveryoneWhyStyle.btn}>
              <Button
                variant="contained"
                color="primary"
                href="#contained-buttons"
                style={btnStyle}
              >
                検索
              </Button>
            </div>
          </div>
        </div>
        <div className="test">
          <WhiesList whiesData={this.state.whies} />
        </div>
      </>
    );
  }
}
