

/*my palette maker, includes a loop to pick a color and makes it into a button*/


function makePalette(){
    const PALETTE = [
    "red",
    "orange",
    "yellow",
    "purple",
    "blue",
    "green",
    "white"
  ];
  for(index = 0; index < PALETTE.length; index++){
    const nextColor = PALETTE[index];
    let button = $("<button>*_*</button>");
    button.css("background-color",nextColor)
    ;
    $(".palette").append(button);
  }
  //active button has a gold border
  $('.palette button').first().addClass('active');
  $('.palette .active').css("border-color", "gold");
  console.log(this)
};
makePalette();

function makeGrid(){
/* my loop to make cells */
  for ( index = 0; index < 64 ; index++){
  let newDiv = $("<div>.</div>").addClass("cell");
 $(".grid").append(newDiv);
  }
};
makeGrid();

function onPaletteClick(){
  //remove border color from active class
  //make clicked colo the active one
  $(".palette .active").removeClass("active")
  .css("border-color","rgb(102, 88, 81)");

  $(this).toggleClass("active");
  $(this).css("border-color", "gold");
  $(this).css("background-color");
  console.log(this);
};

$('.palette button').click(onPaletteClick);

/* stuck here*/

$('.grid .cell').addClass("empty");
$(".grid .cell .empty").css("background-color","");
function onGridClick(){
  let color = $(".palette .active").css("background-color")
  $(this).toggleClass("empty");
  $(this).toggleClass("coloredIn");
if($(this).hasClass("empty")){
   $(this).css("background-color",color)
}
if ($(this).hasClass("coloredIn")){
  $()
  $(this).css("background-color",$(".palette .active").css("background-color"))
}else{
  $(this).css("background-color","");

}
  console.log(this);
  
};


  //here I'm trying to say if the cell background isnt equal to the background of the palette, fill it in with new color instead of erasin.
  /*if($(".coloredIn").css("background-color")!= (".palette .active").css("background-color")){
    $(this).css("background-color",$(".palette .active").css("background-color"));
  }
  
   
*/



/*
in case i delete
function onGridClick(){
  
  $(this).toggleClass("empty");
  $(this).toggleClass("coloredIn");
if($(this).hasClass("empty")){
   $(this).css("background-color",$(".palette .active").css("background-color"))
}
if ($(this).hasClass("coloredIn")){
  $(this).css("background-color",$(".palette .active").css("background-color"))
}else{
  $(this).css("background-color","");

}
  console.log(this);
  
};
*/


$(".grid .cell").click(onGridClick);
 
function onClearClick(){
  $(".grid .cell").css("background-color","");
  $(".grid .cell").removeClass("coloredIn");
  $(".grid .cell").addClass("empty");
  
};
$(".controls .clear").click(onClearClick);

function onFillAllClick(){
 $(".grid .cell").css("background-color",$(".palette .active").css("background-color"));  
 $(".grid .cell").removeClass("empty");
 $(".grid .cell").addClass("coloredIn");
};
$(".controls .fill-all").click(onFillAllClick)

function onFillEmptyClick(){
  $(".empty").css("background-color",$(".palette .active").css("background-color"));
  $(".grid .cell").removeClass("empty");
  $(".grid .cell").addClass("coloredIn");
   };
$(".controls .fill-empty").click(onFillEmptyClick);

function onDragNDraw(){
  $(".controls .drag").toggleClass("on");
 if($(".controls .drag .on")){
  $(".grid .cell").mouseenter(onGridClick);
  console.log(this);
}
}
$(".controls .drag").click(onDragNDraw);


$("#writecolor").val($("#colorwheel").val());
function addPalette(){
  let newColor = $("#colorwheel").val();
  let button = $("<button>*_*</button>");
  button.addClass("newButton");
  button.css("background-color",$("#writecolor").val());
  $(".palette").append(button);

}
$(".controls .newButton").click(addPalette);
$(".palette").on("click", ".newButton",onPaletteClick);