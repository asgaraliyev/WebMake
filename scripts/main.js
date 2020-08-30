$( document ).ready(function() {
    // var team_middle_width = $("#team-section .middle").width();
    // var team_middle_height = $("#team-section .middle").height();
    // console.log(team_middle_width,team_middle_height);
    // $("#team-section").css({
    //     "height":team_middle_height
    // });
    $("#team-section .member-shape").mouseenter(function(){
        $(this).find(".about").slideDown("slow");
    })
    $("#team-section .member-shape").mouseleave(function(){
        $(this).find(".about").slideUp("slow");
    })
 
    $( "#menu-list" ).on("click",function(){
        $( "nav .menuList" ).fadeToggle("slow");
    })
    ScrollOut({
        targets: "header,footer,#first-section,#contact,.from-left-animation",
        // offset: 400
      });
    });

var app = document.getElementById('typed');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Web Dizayn')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Blog saytları')
    .pauseFor(2500)
    .deleteAll()
    .pauseFor(2500)
    .typeString('Bura Baxilmalidi')
    .start();
  