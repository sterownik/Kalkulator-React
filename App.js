const Panel = (props) => {
  return <h1 className="col-10 col-xl-8   text-right  panel mt-2">0</h1>;
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
      <div>/</div>
      <div>X</div>
      <div>-</div>
      <div>+</div>
    </div>
  );
};
const Numbers = (props) => {
  return (
    <div className="numbers mt-2">
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>0</div>
    </div>
  );
};
class Calculator extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Panel />
        <CheckConverter />
        <div className="contentNumbAndOp col-10 col-xl-8">
          <Numbers />
          <Operations />
        </div>
      </>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
