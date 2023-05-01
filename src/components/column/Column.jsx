import "./Column.css";

function Column(props) {
  const classes = `col ${props.className}`;

  return <div className={classes}>{props.children}</div>;
}

export default Column;
