const StepTwo = (props) => {
  console.log(props);
  return (
    <div className={`box2 ${props.contain2}`}>
      <div>
        <p>Name: {props.name}</p>
        <p>Email: {props.mail}</p>
        <p>Password: {props.pass}</p>
      </div>
      <button
        onClick={() => {
          //   console.log("here it's change");
          props.setContain3("active");
        }}
      >
        Edit your information
      </button>
    </div>
  );
};

export default StepTwo;
