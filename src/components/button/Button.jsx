import "./Button.css";

function Button(props) {
  return (
    <a href="#" className="btn">
      {props.text}
    </a>
  );
}

export default Button;
