export const FormRow = (props) => {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={props.name}>
        {props.labelText || props.name}
      </label>
      <input
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={props.handleChange}
        className="form-input"
      />
    </div>
  );
};
