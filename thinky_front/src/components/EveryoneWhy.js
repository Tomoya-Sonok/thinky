// Import Packages
import React from "react"
import axios from "axios"

// Import Styles
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Button from "@material-ui/core/Button"
import EveryoneWhyStyle from "../styles/EveryoneWhy.module.scss"

// Import Components
import WhiesList from "./WhiesList"

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }))

const selectStyle = {
  width: "30vh",
}

const btnStyle = {
  height: "50px",
  width: "100px",
}

export default class EveryoneWhy extends React.Component {
  // const classes = useStyles()
  // const [age, setAge] = React.useState("")

  // const handleChange = (event) => {
  //   setAge(event.target.value)
  // }

  constructor(props) {
    super(props)
    this.state = {
      whies: [],
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/whies/index")
      .then((response) => {
        console.log(response)
        this.setState({ whies: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <>
        <div className={EveryoneWhyStyle.top}>
          {/* <div>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                ジャンルを選択
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                label="ジャンルを選択"
                style={selectStyle}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>科学</MenuItem>
                <MenuItem value={20}>自然</MenuItem>
                <MenuItem value={30}>自己</MenuItem>
              </Select>
            </FormControl>
          </div> */}
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
        <div className={EveryoneWhyStyle.main}>
          <WhiesList whiesData={this.state.whies} />
          {/* <div className={EveryoneWhyStyle.list}>
            <div className={EveryoneWhyStyle.title}>空が青いのは？</div>
            <div className={EveryoneWhyStyle.answer}>
              <div className={EveryoneWhyStyle.index}>Answer:</div>
              <div className={EveryoneWhyStyle.count}>20</div>
            </div>
          </div> */}
        </div>
      </>
    )
  }
}
