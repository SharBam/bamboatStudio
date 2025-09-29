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

				let nav = $(`<p>` + entry.studio + `</p>`).appendTo('#studio');

				let ul = $(`<li>` + entry.services + `</li>`).appendTo('#services');

				let ol = $(`<li>` + entry.projects + `</li>`).appendTo('#projects');

				// let article = $(`<p>` + entry.bio + `</p>`).appendTo('#bio');
			});
		}
	);
});
