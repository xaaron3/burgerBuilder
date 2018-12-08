import React, { Component } from 'react';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
   // could be a functional comp, debugging purposes on class.
   componentWillUpdate() {
      console.log('[OrderSummary] WillUpdate')
   }

   render () {
      const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
         return <li key={igKey}>
                  {igKey}: {this.props.ingredients[igKey]}
               </li>
      })

      return (
         <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
               {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
         </React.Fragment>
      )
   }
}

export default OrderSummary;