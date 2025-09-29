import React from 'react';

export class App extends React.Component {
  state = {
    lastClicked: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ lastClicked: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className="App">
        {this.state.lastClicked === null ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">
            The last pressed key is [{this.state.lastClicked}]
          </p>
        )}
      </div>
    );
  }
}
