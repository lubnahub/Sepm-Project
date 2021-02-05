$(document).ready(function(){
    $("#login_btn").click(function(){
        $("#modal2").addClass("is-active");
    });
    $(".delete").click(function(){
        $("#modal2").removeClass("is-active");
    });
    });

$(document).ready(function(){
  $("#signin_btn").click(function(){
      $("#modal1").addClass("is-active");
  });
  $(".delete").click(function(){
      $("#modal1").removeClass("is-active");
  });
  });
  
  /*const fn=document.getElementById('fn')
  const password=document.getElementById('password')
  const form=document.getElementById('form')
  const errorElement=document.getElementById('errorElement')

  form.addEventListener('submit', (e)=> {
      let messages=[]*/

  