window.onload = function(event){
        event.preventDefault();
        // $('#zone-container').innerHTML(contents);
        // console.log(contents)
        $.ajax({
          url: '/charts/getchart',
          type: 'get',
          // data: contents,
          dataType: 'json',
          success: function(data){
            console.log(data)
            contents = data.contents;
            var contents = data.contents
            $('#zone-container').append(contents);

          },
          error: function(err){
            console.log(err)
          }
        })

  $('#save-thing').hide();
};

$('#edit-btn').click(function(){
        console.log('we tried to save it, we really did');
        // $('#save-thing').innerHTML = '<h3>Chart Saved</h3>';
         $('#save-thing').fadeIn(function(){ $('#save-thing').fadeOut(1000); });

        var contents = {
          chart: document.getElementById('zone-container').innerHTML,
          nameOfChart: document.getElementById('title').innerHTML
        };

        $.ajax({
          url: '/charts/edit',
          type: 'post',
          data: contents,
          dataType: 'json',
          success: function(){
            console.log('chart sent')
            $('#save-thing').append('<h3>Chart Saved</h3>');
            $('footer').append('<h3>Chart Saved</h3>');
            window.location.href = "/account";

          },
          error: function(err){
            console.log(err)
          }
        })
});
