import React from "react";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
var faker = require("faker");

const styles = {
  customWidth: {
    width: 200
  }
};

for (let i=0; i<10; i++)  {
<p>${faker.random.number()}</p>
<p>{faker.lorem.word()}</p>
<p>{faker.lorem.sentence()}</p>
<p>***</p>}


export default class DropDownMenuSimpleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Chef's Choice" />
          <MenuItem value={2} primaryText="Dinner" />
          <MenuItem value={3} primaryText="Drink" />
        </DropDownMenu>


      </div>
    );
  }
}
