import Price from "./Price";
import Button from "./Button";
import ItemList from "./ItemList";
import Column from "./Column";

import "./BottomRow.css";

function BottomRow() {
  return (
    <div className="row--bottom">
      <Column className="col--left">
        <h3 className="heading--3 mb--3">Monthly Subscription</h3>
        <Price />
        <p className="mb--5">Full access for less than $1 a day</p>
        <Button />
      </Column>

      <Column className="col--right">
        <h3 className="heading--3 mb--3">Why Us</h3>
        <ItemList />
      </Column>
    </div>
  );
}

export default BottomRow;
