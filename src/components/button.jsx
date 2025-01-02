/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <div className="button" key={props.key}>
      {props.label}
    </div>
  );
};

export default Button;
