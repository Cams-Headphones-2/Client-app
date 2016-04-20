var React     = require('react'),
    ReactDOM  = require('react-dom'),
    _         = require('lodash');




var TitleEdit = React.createClass({
      getInitialState: function(){
        return {title: "Chart Name (required)", genre: "Genre/Style (optional)"}
      },

      handleTitleChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.title = event.target.value;
        this.setState(state);
        console.log(this.state);
        document.getElementById('title').innerHTML = this.state.title;
      },

      handleGenreChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.genre = event.target.value;
        this.setState(state);
        console.log(this.state);
        document.getElementById('genre').innerHTML = this.state.genre;
      },

      render: function(){
        return(
          <div id="title-edit-container">
            <form className="titleForm">
              <input id="title-box" type="text" placeholder={this.state.tite} onChange={this.handleTitleChange} value={this.state.title}/>
              <input id="genre-box" type="text" placeholder={this.state.genre} onChange={this.handleGenreChange} value={this.state.genre}/>
            </form>
          </div>


        )
      }
    })


    ReactDOM.render(<TitleEdit/>, document.getElementById('title-editor'))
