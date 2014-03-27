/*
* Author: tengattack
* License: GPLv3
* Depend: jquery
*/

var SET_COL_COUNT = %column%;
var SET_COL_WIDTH = %colwidth%;
var ROW_HTML = '<div class="Ypa jw Yc am"></div>';

var origCol = 0;
var newWidth = 0;

function quickSortById(arr) {
	if (arr.length <= 1) { return arr; }
	var pivotIndex = Math.floor(arr.length / 2);
	var pivot = arr.splice(pivotIndex, 1)[0];
	var left = [];
	var right = [];
	for (var i = 0; i < arr.length; i++){
		if (arr[i].id < pivot.id) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSortById(left).concat([pivot], quickSortById(right));
};

function insertRows(lastRow) {
	$(lastRow).after(ROW_HTML);
}

function initVar(container) {
	var layout = $(container).find('.ona');
	var width = layout.width();
	//get current rows
	var divs = layout.children("div");
	var currentRows = 0;

	for (var i = 0; i < divs.length; i++) {
		if ($(divs[i]).hasClass("Ypa")) {
			currentRows++;
		} else {
			break;
		}
	}
	
	origCol = currentRows;
	var sigleWidth;
	if (SET_COL_WIDTH) {
		sigleWidth = SET_COL_WIDTH;
	} else {
		sigleWidth = (width - (origCol - 1) * 20) / origCol;
	}
	ROW_HTML = '<div class="Ypa jw Yc am" style="width:' + sigleWidth + 'px"></div>';
	newWidth = sigleWidth * SET_COL_COUNT + (SET_COL_COUNT - 1) * 20;
}

function rearrangeLayout(layout) {
	layout = $(layout);
	var nur = needUpdateRows;
	var divs = layout.children("div");
	var posts = [];
	var coldivrange = [];
	var needrabefore = false;
	var colStart = -1;
	var row = 0;
	var i, j, k;
	for (i = 0; i <= divs.length; i++) {
		if (i < divs.length && $(divs[i]).hasClass("Ypa")) {
			if (!needrabefore) {
				colStart = i;
				posts.push([]);
			}
			var po = $(divs[i]).children(".Yp");
			for (j = 0; j < po.length; j++) {
				posts[row].push(po[j]);
			}
			needrabefore = true;
		} else if (needrabefore) {
			coldivrange.push([colStart, i]);
			needrabefore = false;
			rowsStart = -1;
			row++;
		}
	}
	
	//sort
	for (i = 0; i < posts.length; i++) {
		posts[i] = quickSortById(posts[i]);
	}

	if (nur.length != needUpdateRows.length) {
		resetInsertPostTimeout();
		return;
	}

	//divs.find(".Ypa .Yp").remove();
	for (i = 0; i < coldivrange.length; i++) {
		var head = false;
		if (nur.indexOf(i) === -1 && nur.indexOf(-1) === -1) {
			continue;
		} else {
			for (j = coldivrange[i][0]; j < coldivrange[i][1]; j++) {
				var po = $(divs[j]).find(".Yp");
				for (k = 0; k < po.length; k++) {
					if (newPosts[i]) {
						var exist = false;
						for (var l = 0; l < newPosts[i].length; l++) {
							if (newPosts[i][l].id == po[k].id) {
								exist = true;
								break;
							}
						}
						if (exist) {
							if (k == 0 && i == 0) {
								head = true;
							}
							$(k).hide().remove();
						}
					}
				}
			}
			console.log('Update row ' + i);
		}

		for (j = 0; j < posts[i].length; j++) {
			if (newPosts[i] && newPosts[i].indexOf(posts[i][j]) === -1) {
				continue;
			}
			var height = 0;
			var addRowIndex = 0;

			//get the minium height
			for (k = coldivrange[i][0]; k < coldivrange[i][1]; k++) {
				var theight = $(divs[k]).height();
				if (k == coldivrange[i][0] || height > theight) {
					height = theight;
					addRowIndex = k;
				}
			}
			var objpo = $(posts[i][j]);
			if (head) {
				var po = $(divs[addRowIndex]).find(".Yp:eq(0)");
				if (po && po.length > 0) {
					objpo.insertBefore(po[0]);
				} else {
					$(divs[addRowIndex]).append(objpo);
				}
			} else {
				$(divs[addRowIndex]).append(objpo);
			}
		}
	}
	needUpdateRows.length = 0;
	newPosts = {};
}

function resetLayout(layout) {
	if (resetting) {
		return;
	}
	resetting = true;
	layout = $(layout);
	layout.css("width", newWidth + "px");
	
	var divs = layout.children("div");

	var addRows = [];
	var rowCount = 0;
	var i = 0;
	for (i = 0; i <= divs.length; i++) {
		if (i < divs.length && $(divs[i]).hasClass("Ypa")) {
			$(divs[i]).css('width', SET_COL_WIDTH + "px");
			rowCount++;
		} else {
			while (rowCount < SET_COL_COUNT) {
				addRows.push(i - 1);
				rowCount++;
			}
			rowCount = 0;
		}
	}
	for (i = 0; i < addRows.length; i++) {
		insertRows(divs[addRows[i]]);
	}
	//re arrange
	rearrangeLayout(layout);
	resetting = false;
}

function resetContainer(container) {
	console.log('resetContainer');
	var sidebar = $(container).find('.tna');
	var layout = $(container).find('.ona');
	sidebar.css("width", (newWidth + 134) + "px");
	resetLayout(layout);
}

function insertPostFinish() {
	//enableHandler(false);
	insTimeID = 0;
	var updatewidget = $(container).find('.dP');
	if (updatewidget.is(":visible")) {
		resetInsertPostTimeout();
		return;
	}
	console.log("insertPostFinish");
	resetContainer(container);
	//enableHandler(true);
}

function resetInsertPostTimeout() {
	if (insTimeID) {
		clearTimeout(insTimeID);
	}
	insTimeID = setTimeout(insertPostFinish, 1000);
}

var insTimeID = 0;
var resetting = false;
var resetbreak = false;
var waitingUpdate = false;
//.tna.UMa set width
var container = $(".Dh");
var containerel = container.get(0);
var needUpdateRows = [-1];
var newPosts = {};

var insertHandler = function(e) {
	// Notify of change!
	if (e.relatedNode) {
		var node = $(e.relatedNode);
		//node.hasClass("VW") || node.hasClass("CF") || node.hasClass("pga")
		if (node.hasClass("Dh")) {
			console.warn("layout Inserted!", e);
			//resetContainer(e.target);
			resetInsertPostTimeout();
		} else if (node.hasClass("ona")) {
			//need check before el class
			//var el = $(e.target).prev();
			//if (el.hasClass("Ypa"))
			if (!resetting) {
				resetInsertPostTimeout();
			}
		} else if (node.hasClass("Ypa")) {
			if (!resetting && $(e.target).hasClass("Yp")) {
				markNeedUpdateRows(findRow(node), e.target);
				resetInsertPostTimeout();
			}
		}
		//rows.preend(e.target);
	}
};

function enableHandler(enable) {
	if (enable) {
		containerel.addEventListener("DOMNodeInserted", insertHandler, false);
	} else {
		containerel.removeEventListener("DOMNodeInserted", insertHandler, false);
	}
}

function findRow(node) {
	var layout = $(container).find('.ona');
	var divs = layout.children("div");
	var colel = $(node).get(0);
	var row = 0;
	var incols = false;
	for (i = 0; i <= divs.length; i++) {
		if (i < divs.length && $(divs[i]).hasClass("Ypa")) {
			incols = true;
			if (divs[i] == colel) {
				return row;
			}
		} else if (incols) {
			incols = false;
			row++;
		}
	}
	return -1;
}

function markNeedUpdateRows(row, target) {
	if (row == -1) return;
	if (!newPosts[row]) {
		newPosts[row] = [];
	}
	newPosts[row].push(target);
	if (needUpdateRows.indexOf(row) === -1) {
		needUpdateRows.push(row);
	}
}

function initMoreColumns() {
	initVar(container);
	resetContainer(container);

	/*$(window).scroll(function () {
		if (insTimeID) resetInsertPostTimeout();
	});*/

	enableHandler(true);
}

setTimeout(initMoreColumns, 1000);