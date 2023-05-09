$(document).ready(function(){
$(".home-h").mouseenter(function(){
    // $(".social").fadeIn();
    $(".social").animate({'left': '20px',width: 'toggle'});
    $(".social").css({"display": "flex", "left": "0",
                "flex-direction": "column", "position": "absoluteds",
                "align-items": "flex-end", "z-index": "9"
                , "margin-top": "-400px"});
  
  });
  $(".home-h").mouseleave(function(){
    $(".social").hide();
  
  });

});



$(document).ready(function(){
  $(".tilh").click(function(){
    $("#myDropdown").slideToggle("slow");
  });

});

// $(document).ready(function(){
//   $(".fa-bars").click(function(){
//     var div = $(".navigation");
//     div.animate({width: 'toggle',}, "slow");
//     // $(".navigation").fadeToggle();
//   });
// });


let toggle = document.querySelector('.toggle');
let main = document.querySelector('.main');
let navigation = document.querySelector('.navigation');

toggle.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

$(".btn-danger").click(function(){
  swal({
    title: "هل متأكد من الحذف؟",
    text: "بمجرد الحذف ، لن تتمكن من استعادة بياناتك المحذوفة !",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("تم الحذف بنجاح", {
        icon: "success",
      });
    } else {
      swal("بياناتك في امان");
    }
  });

  
});


$(".btn").click(function(){
  swal({
    icon: "success",
  });
});
