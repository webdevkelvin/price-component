import Row from "./components/row/Row";
import Column from "./components/column/Column";
import Price from "./components/price/Price";
import ItemList from "./components/ItemList";
import Button from "./components/button/Button";

import "./app.css";

function App() {
  return (
    <article className="component">
      <Row className="row--top">
        <h1 className="heading--1 mb--4">Join our community</h1>
        <h2 className="heading--2 mb--2">
          30-day, hassle-free money back guarantee
        </h2>
        <p className="text--gray">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills
        </p>
      </Row>

      <Row className="row--bottom">
        <Column className="col--left">
          <h3 className="heading--3 mb--3">Monthly Subscription</h3>
          <Price />
          <p className="mb--5">Full access for less than $1 a day</p>
          <Button text="Sign Up" />
        </Column>

        <Column className="col--right">
          <h3 className="heading--3 mb--3">Why Us</h3>
          <ItemList />
        </Column>
      </Row>
    </article>
  );
}

export default App;
