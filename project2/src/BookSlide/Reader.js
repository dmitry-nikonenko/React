import React, { Component } from 'react';
import Publication from './Publication';
import Counter from './Counter';
import Controls from './Controls';

// <Reade data={data} loggin={false} />

// const Reader = props => <div>{props.data}</div>;

class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      count: 0,
    };
  }

  // state = {
  // data: this.props.data
  // count: 0,
  // }

  onIncrement = () => {
    if (this.state.count < this.state.data.length - 1)
      this.setState(state => ({
        count: state.count + 1,
      }));
    console.log(this.state.data);
  };

  onDecrement = () => {
    if (this.state.count > 0)
      this.setState(state => ({
        count: state.count - 1,
      }));
  };

  render() {
    const { count, data } = this.state;
    console.log(count);
    console.log(data);
    return (
      <>
        <Publication data={data[count]} />
        <Counter count={count + 1} max={data.length} />
        <Controls
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
      </>
    );
  }
}

export default Reader;
