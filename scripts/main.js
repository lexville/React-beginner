var React = require('react');
var ReactDOM = require('react-dom');

/*
  App
*/

var App = React.createClass({
  render: function() {
    var name = "lex"
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagLine="Fresh SeaFood Market"/>
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
});


/*
  Header
*/

var Header = React.createClass({
  render: function() {
    return (
      <header className="top">
        <h1>Catch 
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">The</span>
          </span>
          Day</h1>
        <h3 className="tagLine"><span className="tagLine">{this.props.tagLine}</span></h3>
      </header>
    )
  }
});


/*
  Order
*/

var Order = React.createClass({
  render: function() {
    return (
      <p>Order</p>
    )
  }
});


/*
  Inventory
*/

var Inventory = React.createClass({
  render: function() {
    return (
      <p>Inventory</p>
    )
  }
});

/*
  StorePicker
  This will let us make <StorePicker>
*/

var StorePicker = React.createClass({
  
  render: function() {
    var name = "lex"
    return (
      <form className="store-selector">
        <h2>Please Enter A Store {name} </h2>
        <input type="text" ref="storeId" required />
        <input type="Submit" defaultValue="Submit" />
      </form>
    )
  }
});

ReactDOM.render(<App/>, document.querySelector('#main'));
