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
          <table class="table table" id="user-chart">

          <thead>
            <tr class="underlined">
              <th>Chart Name</th>
              <th><center>Edit</center></th>
              <th><center>Export</center></th>
              <th><center>Remove</center></th>

            </tr>
          </thead>

            {
              this.state.charts.map(function(chart, i){
                return <ChartDiv chartName={chart.nameOfChart} chartID={chart._id} contents={chart.contents} key={i} />
              }.bind(this))
            }

          </table>

        )
      }
    })

    var ChartDiv = React.createClass({
      render: function() {
        return (

            <tr>
              <td>{this.props.chartName}</td>

              <td><center><form action="/charts/viewchart" method="post"><input type="hidden" name="chartID" value={this.props.chartID} />
              <button type="submit" data-id={this.props.chartID} href="#"><span className="glyphicon  glyphicon-pencil"></span></button></form></center></td>

              <td><center><form action="/charts/viewchart" method="post"><input type="hidden" name="chartID" value={this.props.chartID} />
              <button type="submit" data-id={this.props.chartID} href="#"><span className="glyphicon  glyphicon-floppy-save"></span></button></form></center></td>

              <td><center><form action="/charts/delete" method="post"><input type="hidden" name="chartID" value={this.props.chartID} />
              <button type="submit" data-id={this.props.chartID} href="#"><span className="glyphicon  glyphicon-trash"></span></button></form></center></td>

            </tr>

        )
      }
    })

    ReactDOM.render(<UserChart/>, document.getElementById('user-chart'))

    // <div draggable="true" className="album-div">
    // <img src={this.state.albumCover} draggable="false" />
    // <p>{this.state.album}</p>
    // <p>{this.state.artist}</p>
    // </div>
