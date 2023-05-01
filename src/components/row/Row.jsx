import "./Row.css";

function Row(props) {
  const classes = props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Row;
