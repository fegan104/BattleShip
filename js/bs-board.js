// create board
var b = jsboard.board({attach:"battle-ship-board", size:"10x10"});
b.cell("each").style({
	height:"32px", 
	width:"32px",
	background: "#4990E2"
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
var boat = jsboard.piece({text:"boat", fontSize:"45px", textAlign:"center"});

// alternate turns of x and o
var turn = true;
b.cell("each").on("click", function() {
    if (b.cell(this).get()==null) {
        b.cell(this).place(aim.clone());
    }
});