window.onload = function(event){
        event.preventDefault();
        // console.log(contents)
        $.ajax({
          url: '/charts/getchart',
          type: 'get',
          // data: contents,
          dataType: 'json',
          success: function(data){
            console.log(data)
            contents = data.contents;
            // var contents = data.contents
            $('#zone-container').append(contents);

          },
          error: function(err){
            console.log(err)
          }
        })
}
