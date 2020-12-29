import React from "react";

class HomeModule extends React.PureComponent<
  any,
  { details: string; onGetDetails: () => void }
> {
  render() {
    const { details = "123", onGetDetails } = this.props;
    return (
      <>
        <h1>Hello this is a {details}</h1>
        <button onClick={onGetDetails}>Click me</button>
      </>
    );
  }
}

export default HomeModule;
