var React = require('react');
var List = require('./List.jsx')

var ListManager = React.createClass({
  getInitialState: function(){
    return{items:[], newitemText:''};
  },
  onChange:function(e) {
    this.setState({newitemText: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();

    var currentItems = this.state.items;

    currentItems.push(this.state.newitemText);

    this.setState({items: currentItems, newitemText:''});

  },
  render: function(){
    return(
      <div>
          <h3>{this.props.title}</h3>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.onChange} value={this.state.newitemText} />
            <button>Add</button>
          </form>
            <List items={this.state.items} />
      </div>
    );
  }
});
module.exports = ListManager
