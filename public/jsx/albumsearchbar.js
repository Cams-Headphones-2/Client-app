var React     = require('react'),
    ReactDOM  = require('react-dom'),
    _         = require('lodash');




// lastfm.artist.getInfo({artist: 'The xx'}, {success: function(data){
//     /* Use data. */
//     }, error: function(code, message){
//     /* Show error message. */
//     }});


var ArtistForm = React.createClass({
      getInitialState: function(){
        return {albumSearch: "", imgURL: "", artist: "", album: ""}
      },

      // validate: function(string) {
      //   var self = this;
      //   var state = this.state;
      //   if(string.length<=10){
      //     this.setState(state);
      //   } else {
      //     console.log('Too long too many characters no no no no.')
      //   }
      // },

      handlealbumSearchChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.albumSearch = event.target.value;
        this.setState(state);
        // this.validate(this.state.imgURL);
        console.log(this.state)
      },

      handleimgURLChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.imgURL = event.target.value;
        this.setState(state);
        // this.validate(this.state.imgURL);
        console.log(this.state)
      },
      handleartistChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.artist = event.target.value;
        this.setState(state);

        // this.validate(this.state.artist);
        console.log(this.state)
      },
      handlealbumChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.album = event.target.value;
        this.setState(state);

        // this.validate(this.state.album);
        console.log(this.state)
      },
      handleSubmit: function(event){
        event.preventDefault();
        var self = this;
        var cache = new LastFMCache();
        console.log(this)

        var lastfm = new LastFM({
              apiKey    : 'f21088bf9097b49ad4e7f487abab981e',
              apiSecret : '7ccaec2093e33cded282ec7bc81c6fca',
              cache     : cache
            });
        lastfm.album.search({album: self.state.albumSearch}, {success: function(data){
              console.log(data)
              console.log(data.results.albummatches.album[0].name)
              console.log(data.results.albummatches.album[0].image[2]["#text"])
              console.log(data.results.albummatches.album[0].artist)
              var albumName = data.results.albummatches.album[0].name
              var albumCover = data.results.albummatches.album[0].image[2]["#text"]
              var albumArtist = data.results.albummatches.album[0].artist
              var albumDiv = $('<div draggable="true" style="height: 250px; width: 200px; border: 1px dashed"></div>');
              $(albumDiv).append('<img src ="' + albumCover + '">');
              $(albumDiv).append('<p>' + albumName + '</p>');
              $(albumDiv).append('<p>' + albumArtist + '</p>');
              $('#results-appender').append(albumDiv);




            }, error: function(code, message){
            /* Show error message. */
            }});
      },
      render: function(){
        return(
          <div id="results-container">
            <form className="artistForm" onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Search for an Album" onChange={this.handlealbumSearchChange} value={this.state.albumSearch}/>
              <input type="submit" value="post"/>
            </form>
            <div id="results-appender"></div>
          </div>

          // <input type="text" placeholder="Your imgURL" onChange={this.handleimgURLChange} value={this.state.imgURL}/>
          // <input type="artist" placeholder="artist" onChange={this.handleartistChange} value={this.state.artist}/>
          // <input type="album" placeholder="album" onChange={this.handlealbumChange} value={this.state.album}/>
          //


        )
      }
    })

    ReactDOM.render(<ArtistForm/>, document.getElementById('example'))
    //
    //
    //
    //
    // var PasswordForm = React.createClass({
    //   getInitialState: function(){
    //     return {name: "", password: "", email: ''}
    //   },
    //
    //   validate: function(string) {
    //     var self = this;
    //     var state = this.state;
    //     if(string.length<=10){
    //       this.setState(state);
    //     } else {
    //       console.log('Too long too many characters no no no no.')
    //     }
    //   },
    //
    //   handleNameChange: function(event){
    //     console.log(event.target.value)
    //     var state = this.state;
    //     state.name = event.target.value;
    //     // this.setState(state);
    //     this.validate(this.state.name);
    //     console.log(this.state)
    //   },
    //   handlePasswordChange: function(event){
    //     console.log(event.target.value)
    //     var state = this.state;
    //     state.password = event.target.value.trim();
    //     this.validate(this.state.password);
    //     console.log(this.state)
    //   },
    //   handleEmailChange: function(event){
    //     console.log(event.target.value)
    //     var state = this.state;
    //     state.email = event.target.value;
    //     this.validate(this.state.email);
    //     console.log(this.state)
    //   },
    //   handleSubmit: function(event){
    //     event.preventDefault();
    //     var self = this;
    //
    //     $.ajax({
    //       url: '/tacos',
    //       type: 'post',
    //       data: self.state,
    //       dataType: 'json',
    //       success: function(){
    //         console.log('this form submitted')
    //       },
    //       error: function(err){
    //         console.log(err)
    //       }
    //     })
    //   },
    //   render: function(){
    //     return(
    //       <form className="PasswordForm" onSubmit={this.handleSubmit}>
    //         <input type="text" placeholder="Your Name" onChange={this.handleNameChange} value={this.state.name}/>
    //         <input type="password" placeholder="password" onChange={this.handlePasswordChange} value={this.state.password}/>
    //         <input type="email" placeholder="email" onChange={this.handleEmailChange} value={this.state.email}/>
    //         <input type="submit" value="post"/>
    //       </form>
    //
    //
    //
    //     )
    //   }
    // })
    //
    // ReactDOM.render(<PasswordForm/>, document.getElementById('example1'))
