import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  cartItemsSelector,
  cartItemsTotalAmount,
  cartItemTotalCount,
} from "../../redux/cart_reducer/cart.selectors";
import {
  CheckoutButton,
  MyItemsComponent,
  ShopFooter,
  ShoppingProceed,
  TextContainer,
} from "./Shopping-cart.styled";
import OfferLogo from "../../../static/images/lowest-price.png";
import ShoppingCartItem from "./shopping-cart-item/Shopping-cart-item.component";

const ShoppingCart = ({ cartItems, count, totalAmount }) => {
  return (
    <>
      <MyItemsComponent>MyCart({count} items)</MyItemsComponent>
      {cartItems.map((cartItem) => {
        return <ShoppingCartItem cartItem={cartItem} />;
      })}
      <ShopFooter>
        <img src={OfferLogo} />
        <TextContainer>You won't find it cheeper anywhere</TextContainer>
      </ShopFooter>
      <ShoppingProceed>
        <p>Promo code can be applied on payment page.</p>
        <CheckoutButton>
          <p>Proceed to checkout</p>
          <p>RS.{totalAmount}</p>
        </CheckoutButton>
      </ShoppingProceed>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  count: cartItemTotalCount,
  totalAmount: cartItemsTotalAmount,
});

export default connect(mapStateToProps)(ShoppingCart);
