// create board
var b = jsboard.board({attach:"battle-ship-board", size:"10x10"});
b.cell("each").style({
	background: "#4990E2",
	textAlign:"center",
	overflow:"visible"
});

// Battleship Pieces
var aim = jsboard.piece({
	text:"aim",
	textIndent:"-9999px",
	background:"url(../images/ic_gps_fixed_black_24px.svg) no-repeat",
	margin:"0 auto"
});
var miss = jsboard.piece({text:"miss", fontSize:"45px", textAlign:"center"});
var hit = jsboard.piece({text:"hit", fontSize:"45px", textAlign:"center"});
var boat = jsboard.piece({
	text:"aim",
	width: "5vw",
    height: "5vw",
	textIndent:"-9999px",
	background:"#000080",
	margin:"0 auto"
});

//Clicking on a tile set the cursor for aim
b.cell("each").on("click", function() {
    if (b.cell(this).get()==null) {
        b.cell(this).place(aim.clone());
    }
});
//By default elements can't drag and drop
b.cell("each").on("dragover", function allowDrop(ev) {ev.preventDefault();});
// Handle drop event for placing boats
b.cell("each").on("drop", function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("boat");
    if (data == "aircraft-carrier") {
    	b.cell(this).place(boat.clone());
    	document.getElementById(data).style.display = 'none';
    }
});