var SPREADSHEET_ID_AND_TAB =
	'17jHC58i1ntrgMcnWhUHzDHzZtnyTyIw1zLBwgHU6n3o/current';

$(document).ready(function () {
	$.getJSON(
		'https://opensheet.elk.sh/' + SPREADSHEET_ID_AND_TAB,
		function (data) {
			console.log(data);

			data.forEach(function (entry, index) {
				console.log(entry);

				if (index == 0) return;

				let div = $(
					`<p>` +
						entry.about +
						`</p>`
				).appendTo('#about');

				let ul = $(`<li>` + entry.references + `</li>`).appendTo('#references');
				
			});
		}
	);
});
