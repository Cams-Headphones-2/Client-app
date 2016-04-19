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
        return {albums: [], imgURL: "", artist: "", album: ""}
      },

      handlealbumSearchChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.albumSearch = event.target.value;
        this.setState(state);
        console.log(this.state)
      },

      handleimgURLChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.imgURL = event.target.value;
        this.setState(state);
        console.log(this.state)
      },
      handleartistChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.artist = event.target.value;
        this.setState(state);

        console.log(this.state)
      },
      handlealbumChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.album = event.target.value;
        this.setState(state);

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
              console.log(data);
              console.log(data.results.albummatches.album[0].name);
              console.log(data.results.albummatches.album[0].image[2]["#text"]);
              console.log(data.results.albummatches.album[0].artist);

              document.getElementById('results-zone').innerHTML = "";

              var state = self.state;
              var albumInfo = {
                albumName: data.results.albummatches.album[0].name,
                albumCover: data.results.albummatches.album[0].image[2]["#text"],
                albumArtist: data.results.albummatches.album[0].artist
              }

              state.albums.push(albumInfo);
              var albumName = data.results.albummatches.album[0].name;
              var albumCover = data.results.albummatches.album[0].image[2]["#text"];
              var albumArtist = data.results.albummatches.album[0].artist;

              state.imgURL = albumCover;
              state.artist = albumArtist;
              state.album = albumName;

              self.setState(state);

              // var albumDiv = $('<div draggable="true" class="album-div" style="height: 248px; width: 176px; border: 1px dashed; background-color: lightgreen"></div>');
              // $(albumDiv).append('<img draggable="false" src ="' + albumCover + '">');
              // $(albumDiv).append('<p>' + albumName + '</p>');
              // $(albumDiv).append('<p>' + albumArtist + '</p>');
              // $('#results-appender').append(albumDiv);




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
            <div id='results-zone'>
            {
              this.state.albums.map(function(album, i){
                return <AlbumDiv albumCover={album.albumCover} album={album.albumName} artist={album.albumArtist} key={i} />
              }.bind(this))
            }
            </div>
          </div>

        )
      }
    })

    var AlbumDiv = React.createClass({
      render: function() {
        return (
          <div draggable="true" className="album-div">
            <img src={this.props.albumCover} draggable="false" />
            <p>{this.props.album}</p>
            <p>{this.props.artist}</p>
          </div>
        )
      }
    })

    ReactDOM.render(<ArtistForm/>, document.getElementById('example'))



    // <div draggable="true" className="album-div">
    // <img src={this.state.albumCover} draggable="false" />
    // <p>{this.state.album}</p>
    // <p>{this.state.artist}</p>
    // </div>
