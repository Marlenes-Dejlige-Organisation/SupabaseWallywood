// CartPage.jsx
import React from "react";
import { Cart } from "../../components/Cart/Cart";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";


export const CartPage = () => {
  return (
    <div>
      <ContentWrapper title="Indkøbskurv">

      <Cart />
      </ContentWrapper>
    </div>
  );
};
