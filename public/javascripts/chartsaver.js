$('#save-btn').click(function(event){
        event.preventDefault();
        var contents = {
          chart: document.getElementById('zone-container').innerHTML,
          nameOfChart: document.getElementById('title').innerHTML
        }
        console.log(typeof contents)
        $.ajax({
          url: '/charts/build',
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
});

// $('#save-btn').click(function(event){
//         event.preventDefault();
//         var contents = {
//           chart: document.getElementById('zone-container').innerHTML,
//           nameOfChart: document.getElementById('title').innerHTML
//         }
//         console.log(typeof contents)
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
// });

$('#load-btn').click(function(event){
        event.preventDefault();
        console.log('You clicked the load butn!')
        // console.log(contents)
        $.ajax({
          url: '/getchart',
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
})
