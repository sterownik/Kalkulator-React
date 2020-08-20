const Panel = (props) => {
  return (
    <h1 className="col-10 col-xl-8   text-right  panel mt-2">
      {props.view ? props.view : 0}
    </h1>
  );
};
const CheckConverter = (props) => {
  return (
    <div className="col-10 col-xl-8 text-center checkConverter mt-1">
      <div className="text-center  ">DEC</div>
      <div className="text-center  ">BIN</div>
      <div className="text-center  "> OCT</div>
      <div className="text-center  ">HEX</div>
    </div>
  );
};

const Operations = (props) => {
  return (
    <div className="operations mt-2">
      <div onClick={() => props.click("/")}>/</div>
      <div onClick={() => props.click("x")}>X</div>
      <div onClick={() => props.click("-")}>-</div>
      <div onClick={() => props.click("+")}>+</div>
      <div onClick={() => props.click("=")}>=</div>
    </div>
  );
};
const Numbers = (props) => {
  let numbers = [];
  for (let i = 1; i <= 9; i++) {
    numbers.push(
      <div key={i} onClick={() => props.click({ i }.i)}>
        {i}
      </div>
    );
  }
  return (
    <div className="numbers mt-2">
      {numbers}
      <div onClick={() => props.click(0)}>0</div>
    </div>
  );
};
class Calculator extends React.Component {
  state = {
    numberView: "",
  };
  handleChangeNumber(number) {
    console.log(number);
    this.setState({
      numberView: this.state.numberView + "" + number,
    });
  }
  handleMathOperation(operation) {
    console.log(operation);
  }
  render() {
    return (
      <>
        <Panel view={this.state.numberView} />
        <CheckConverter />
        <div className="contentNumbAndOp col-10 col-xl-8">
          <Numbers click={this.handleChangeNumber.bind(this)} />
          <Operations click={this.handleMathOperation.bind(this)} />
        </div>
      </>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
