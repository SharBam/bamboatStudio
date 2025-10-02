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

				let div = $(`<p>` + entry.studio + `</p>`).appendTo('#studio');

				let ul = $(`<li>` + entry.services + `</li>`).appendTo('#services');

				let details = $(
					`<details>
					<summary>
						<span>
						<p>` +
						entry.ptitle +
						`</p>
						<p>` +
						entry.partist +
						`</p>
						<p>` +
						entry.pdate +
						`</p>
					</span><p>` +
						entry.prole +
						`</p>
						</summary>
						<div>` +
						entry.prole +
						`</div>
						</details>`
				).appendTo('#project');

				// let details = $(
				// 	`<details><summary>` +
				// 		entry.project +
				// 		`</summary><ol><li>` +
				// 		entry.project +
				// 		`</li></ol></details>`
				// ).appendTo('#project');

				// let article = $(`<p>` + entry.bio + `</p>`).appendTo('#bio');
			});
		}
	);
});
