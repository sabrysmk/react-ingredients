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

    var divStyle = {
      marginTop: 10
    };

    var headingStyle = {

    }

    if (this.props.headingColor) {
        headingStyle.background = this.props.headingColor;
    }

    return (
        <div style={divStyle} className="col-sm-4">
            <div className="panel panel-primary">
                <div style={headingStyle} className="panel-heading">
                    <h3>{this.props.title}</h3>
                </div>
          <div className="row panel-body">
          <form onSubmit={this.handleSubmit}>
          <div className="col-xs-9 col-sm-9">
                <input className="form-control" onChange={this.onChange} value={this.state.newitemText} />
            </div>
            <div className="col-xs-1 col-sm-2">
              <button className="btn btn-primary">Add</button>
            </div>
          </form>
            </div>
            <List items={this.state.items} />
      </div>
      </div>
    );
  }
});
module.exports = ListManager
