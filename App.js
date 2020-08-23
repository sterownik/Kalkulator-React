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
      <div onClick={() => props.click("dec")} className=" click text-center  ">
        DEC
      </div>
      <div onClick={() => props.click("bin")} className="text-center  ">
        BIN
      </div>
      <div onClick={() => props.click("oct")} className="text-center  ">
        {" "}
        OCT
      </div>
      <div onClick={() => props.click("hex")} className="text-center  ">
        HEX
      </div>
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
      <div onClick={() => props.calculate()}>=</div>
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
    numberViewFirst: "",
    numberViewSecond: "",
    operation: "",
    numberCalculate: 0,
    numberCalculateBeforeView: 0,
  };
  handleChangeNumber(number) {
    if (this.state.operation != "") {
      this.setState({
        numberViewSecond: this.state.numberViewSecond + "" + number,
        numberCalculate: this.state.numberViewSecond + "" + number,
        numberCalculateBeforeView: this.state.numberViewSecond + "" + number,
      });
    } else {
      this.setState({
        numberCalculate: this.state.numberViewFirst + "" + number,
        numberViewFirst: this.state.numberViewFirst + "" + number,
        numberCalculateBeforeView: this.state.numberViewFirst + "" + number,
      });
    }
  }
  handleMathOperation(operation) {
    const buttons = document.querySelectorAll(".operations div");
    buttons.forEach((item) => {
      item.classList.add("unClick");
    });
    const node = ReactDOM.findDOMNode(event.target);
    node.className = "click";

    this.setState({
      operation: operation,
    });
  }
  handleDeleteAll = () => {
    this.setState({
      numberViewFirst: "",
      numberViewSecond: "",
      operation: "",
      numberCalculate: 0,
      numberCalculateBeforeView: 0,
    });
  };
  handleConverte = (option) => {
    let dec = this.state.numberCalculateBeforeView;
    dec = parseInt(dec);

    const buttons = document.querySelectorAll(".checkConverter div");
    buttons.forEach((item) => {
      item.classList.add("unClick");
    });
    const node = ReactDOM.findDOMNode(event.target);
    node.className = "click";

    if (option === "bin") {
      // console.log(dec.toString(2));
      dec = dec.toString(2);
    } else if (option === "oct") {
      dec = dec.toString(8);
    } else if (option === "hex") {
      dec = dec.toString(16);
    } else {
    }
    this.setState({
      numberCalculate: dec,
    });
  };
  handleCalculate() {
    if (this.state.operation === "+") {
      this.setState({
        numberCalculate:
          parseFloat(this.state.numberViewFirst) +
          parseFloat(this.state.numberViewSecond),
        numberViewFirst:
          parseFloat(this.state.numberViewFirst) +
          parseFloat(this.state.numberViewSecond),
        numberViewSecond: "",
        numberCalculateBeforeView:
          parseFloat(this.state.numberViewFirst) +
          parseFloat(this.state.numberViewSecond),
      });
    } else if (this.state.operation === "/") {
      this.setState({
        numberCalculate:
          parseFloat(this.state.numberViewFirst) /
          parseFloat(this.state.numberViewSecond),
        numberViewFirst:
          parseFloat(this.state.numberViewFirst) /
          parseFloat(this.state.numberViewSecond),
        numberViewSecond: "",
        numberCalculateBeforeView:
          parseFloat(this.state.numberViewFirst) /
          parseFloat(this.state.numberViewSecond),
      });
    } else if (this.state.operation === "x") {
      this.setState({
        numberCalculate:
          parseFloat(this.state.numberViewFirst) *
          parseFloat(this.state.numberViewSecond),
        numberViewFirst:
          parseFloat(this.state.numberViewFirst) *
          parseFloat(this.state.numberViewSecond),
        numberViewSecond: "",
        numberCalculateBeforeView:
          parseFloat(this.state.numberViewFirst) *
          parseFloat(this.state.numberViewSecond),
      });
    } else if (this.state.operation === "-") {
      this.setState({
        numberCalculate:
          parseFloat(this.state.numberViewFirst) -
          parseFloat(this.state.numberViewSecond),
        numberViewFirst:
          parseFloat(this.state.numberViewFirst) -
          parseFloat(this.state.numberViewSecond),
        numberViewSecond: "",
        numberCalculateBeforeView:
          parseFloat(this.state.numberViewFirst) -
          parseFloat(this.state.numberViewSecond),
      });
    }
  }
  render() {
    return (
      <>
        <Panel view={this.state.numberCalculate} />
        <CheckConverter click={this.handleConverte} />
        <div className="contentNumbAndOp col-10 col-xl-8">
          <Numbers click={this.handleChangeNumber.bind(this)} />
          <Operations
            calculate={this.handleCalculate.bind(this)}
            click={this.handleMathOperation.bind(this)}
          />
          <div onClick={this.handleDeleteAll} className="delete">
            C
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
