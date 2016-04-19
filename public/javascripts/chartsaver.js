$('#save-btn').click(function(event){
        event.preventDefault();
        var contents = document.getElementById('zone-container').innerHTML;
        console.log(contents)
        $.ajax({
          url: '/build',
          type: 'post',
          data: contents,
          dataType: 'json',
          success: function(){
            console.log('chart sent')
          },
          error: function(err){
            console.log(err)
          }
        })
})

// function(event){
//         event.preventDefault();
//         var contents = document.getElementById('zone-container');
//         $.ajax({
//           url: '/build',
//           type: 'post',
//           data: contents,
//           dataType: 'json',
//           success: function(){
//             console.log('chart sent')
//           },
//           error: function(err){
//             console.log(err)
//           }
//         })
