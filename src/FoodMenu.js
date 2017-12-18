import React from "react";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import faker from 'faker';

// const FoodItem = ({ food }) => {
//   const link = "#" + title.toLowerCase();
//   return (
//     <li>
//       <a href={link}>{title}</a>
//     </li>
//   );
// };

const FoodMenuItems = ({ foodItems }) => {
  return (
    <div>
      {foodItems.map(foodItem => {
        return (
          <div>
            <p>{foodItem.name}</p>
            <p>{foodItem.description}</p>
            <p>${foodItem.price}</p>
            <p>***</p>
          </div>
        );
      })}
    </div>
  );
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
          <FoodMenuItems
            foodItems={[
              { name: "Filet", price: 50, description: "lorem" },
              { name: "Lobster", price: 50, description: "lorem" },
              { name: "Caviar", price: 100, description: "lorem" }
            ]}
            primaryText="Chef's Choice"
          />
          <FoodMenuItems
            foodItems={[
              { name: "Shrimp", price: 50, description: "lorem" },
              { name: "Rice", price: 50, description: "lorem" },
              { name: "Chicken", price: 100, description: "lorem" }
            ]}
            primaryText="Dinner"
          />
          <FoodMenuItems
            foodItems={[
              { name: "Beer", price: 50, description: "lorem" },
              { name: "Wine", price: 50, description: "lorem" },
              { name: "OJ", price: 100, description: "lorem" }
            ]}
            primaryText="Drink"
          />
        </DropDownMenu>
      </div>
    );
  }
}
