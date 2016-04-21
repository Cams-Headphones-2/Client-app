var React     = require('react'),
    ReactDOM  = require('react-dom'),
    _         = require('lodash');




// lastfm.artist.getInfo({artist: 'The xx'}, {success: function(data){
//     /* Use data. */
//     }, error: function(code, message){
//     /* Show error message. */
//     }});


var UserChart = React.createClass({
      getInitialState: function(){
        return {charts: []}
      },

      componentDidMount: function(){
          //  this.props.items = [];
           var self = this;
           $.ajax({
              url: '/account/accountCharts',
              type: 'get',
              dataType: 'json',
              success: function(response){
                console.log(response)
                console.log("here's your damn object")
                // return self.state.items = response;

                response.forEach(function(chart){
                  // state = self.state;
                  self.state.charts.push(chart);
                  console.log(self.state.charts)
                  self.setState();
                  // self.setState(state);


                })

              },
              error: function(err){
                console.log(err)
              }
            })
            console.log(self.state.charts)
         },

      render: function(){
        return(
          <div id="charts-list">
            {
              this.state.charts.map(function(chart, i){
                return <ChartDiv chartName={chart.nameOfChart} chartID={chart.id} key={i} />
              }.bind(this))
            }
          </div>

        )
      }
    })

    var ChartDiv = React.createClass({
      render: function() {
        return (
          <div draggable="true" data-location="3" className="album-div">
            <p className="chart-name">{this.props.chartName}</p>
            <input type="hidden" name="chart-ID" value={this.props.chartID} />


          </div>
        )
      }
    })

    ReactDOM.render(<UserChart/>, document.getElementById('user-chart'))

    // <div draggable="true" className="album-div">
    // <img src={this.state.albumCover} draggable="false" />
    // <p>{this.state.album}</p>
    // <p>{this.state.artist}</p>
    // </div>
