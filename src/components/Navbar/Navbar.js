import { useSelector } from "react-redux";

import { Container, Basket, Price } from "./styles";
import Logo from "../../assets/images/Logo";
import BasketIcon from "../../assets/images/BasketIcon";

function Navbar() {
  const count = useSelector((state) => state.counter.value);
  return (
    <Container>
      <Logo />
      <Basket>
        <BasketIcon />
        <Price>₺{count}</Price>
      </Basket>
    </Container>
  );
}

export default Navbar;
