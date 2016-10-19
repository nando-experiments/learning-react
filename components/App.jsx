var Title = React.createClass({
  render: function () {
    return (
      <div className="opa-opa">
        <h1>
          <span>Hello Component!!</span>
        </h1>
      </div>
    )
  }
});

ReactDOM.render(
  <Title/>, document.getElementById('App')
)
