import "./Column.css";

function Column(props) {
  const styles = `col ${props.className}`;

  return <div className={styles}>{props.children}</div>;
}

export default Column;
