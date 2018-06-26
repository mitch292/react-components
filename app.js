// let GroceryList = () => <GroceryListItem grocery={['pasta', 'pizza', 'cannoli']} />;
// let GroceryListItem = (props) => (
//   <ul>
//     <li>{props.grocery[0]}</li>
//     <li>{props.grocery[1]}</li>
//     <li>{props.grocery[2]}</li>
//   </ul>
// )




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedToCart: false,
      groceries:['pasta', 'pizza', 'cannoli']
    }
    this.crossOnClick = this.crossOnClick.bind(this)
  }
  crossOnClick(item) {
    this.setState({
      addedToCart: !this.state.addedToCart
    })
  }
  render() {

    let style = {
      textDecoration: this.state.addedToCart ? 'line-through' : 'none'
    }

    return (
      <div>
        <h1>Grocery List</h1>
        <GroceryList crossOnClick={this.crossOnClick} style={style} groceries={this.state.groceries}/>
      </div>
    )
  }
}


const GroceryList = (props) => {
  return (
      <ul>
        {props.groceries.map(groceryItem => (
          <GroceryListItem crossOnClick={props.crossOnClick} style={props.style} item={groceryItem}/>
      ))}
      </ul>
  )
};

const GroceryListItem = (props) => {
  return (
    <li onClick={()=> props.crossOnClick(props.item)} style={props.style}>{props.item}</li>
  )
}





// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       added: false,
//       groceries: ['pasta', 'pizza', 'cannoli']
//     };
//   }
//   onGroceryClick() {
//       this.setState({
//         added: !this.state.added
//       });
//     }
//   render() {

//     let style = {
//       textDecoration: this.state.added ? 'line-through': 'none'
//     };

//     return (
//       <div>
//         <h1>Groceries</h1>
//         <GroceryList style={style} groceries={this.state.groceries} />
//       </div>
//     );
//   }
// };

// let GroceryList = (props) => (
//   <ul>
//     {
//       props.groceries.map(grocery => 
//       <li style={props.style} onClick={this.onGroceryClick.bind(this)}>{grocery}</li>)
//     }
//   </ul>
// );

ReactDOM.render(<App />, document.getElementById('app'))

