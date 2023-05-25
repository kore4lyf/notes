import React,{Component} from "react"
import Nav from "./Nav";
import ItemList from "./ItemList";
import CartList from "./CartList";
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      activeTab: 0,
      cart: []
    }
  }

  switchTab = (index) => {
    if(index !== this.state.activeTab){
      this.setState({
        activeTab: index
      })
    }
  }
  
  addToCart = (itemId) => {
    let findItemIndex = this.state.cart.findIndex(item => item.id === itemId);
    
    let itemExists = findItemIndex === -1 ? false : true 



    if(!itemExists) {
      let newItem = {
        id: itemId,
        totalItems: 1
      }
      
      // Add new item to state.cart
      this.setState({
        cart: [...this.state.cart, newItem]
      })
    } else {
        let copyCart = [...this.state.cart];
        copyCart[findItemIndex] = {id: itemId, totalItems: this.state.cart[findItemIndex].totalItems + 1}
        this.setState({
          cart: copyCart
        })
    }
  }


  subtractFromCart = (itemId) => {
    let findItemIndex = this.state.cart.findIndex(item => item.id === itemId);
    let totalItems = this.state.cart[findItemIndex].totalItems;
    if(totalItems <= 1) {
      let copyCart = [...this.state.cart];
      copyCart.splice(findItemIndex, 1);
      this.setState({
        cart: copyCart
      });
    } else {
      let copyCart = [...this.state.cart];
      copyCart[findItemIndex] = {id: itemId, totalItems: this.state.cart[findItemIndex].totalItems - 1};
      this.setState({
        cart: copyCart
      });
    }
        
  }

  renderList = () => {
    let {activeTab} = this.state;
    switch(activeTab){
      case 0:
        return(
          <ItemList onAction={this.addToCart}/>
        );
        
        case 1: 
          return(
            <CartList add={this.addToCart} sub={this.subtractFromCart} cart={this.state.cart}/>
          );
        
        default: 
          return(
            <p className="error-page">Page Not Found</p>
            );
    }
  }

  render() {
    return(
        <div className="app">
          <Nav onAction={this.switchTab} activeTab={this.state.activeTab}/>
          <div className="List">
            {this.renderList()}
          </div>
        </div>
    );
  }
}


export default App;
