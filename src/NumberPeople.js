import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  customWidth: {
    width: 200
  }
};

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
          <MenuItem value={1} primaryText="1" />
          <MenuItem value={2} primaryText="2" />
          <MenuItem value={3} primaryText="3" />
          <MenuItem value={4} primaryText="4" />
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={6} primaryText="6" />
          <MenuItem value={7} primaryText="7" />
          <MenuItem value={8} primaryText="8" />
          <MenuItem value={9} primaryText="9" />
          <MenuItem value={10} primaryText="10+" />
        </DropDownMenu>
      </div>
    );
  }
}
