$(document).ready(function () {
    console.log('here');
    var site1 = 'https://smarkets.com';
    var site1 = 'https://www.marathonbet.com/en';
    $('#check').click(function(){

      console.log('here clicked');

       $.ajax({
         url : 'https://agile-badlands-51563.herokuapp.com/',
         type : 'get',
         success: function(data){
           console.log('response',data);
           $('#data').append(data)
         }
       });
    });
})