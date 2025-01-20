import "./style.css";

/** @type { HTMLAnchorElement | null } **/
const button = document.getElementById("download-button");

button.addEventListener("click", () => {
  /** @type { HTMLTableElement | null } **/
  const table = document.getElementById("personal-data-table");

  let csv = [];

  if (table) {
    for (const row of table.rows) {
      let data = [];
      for (const cell of row.cells) {
        data.push(cell.textContent);
      }
      csv.push(data.join(","));
    }
  }

  csv.push(""); // new empty line; for proper formatting

  const blob = new Blob([csv.join("\n")], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "personal-data.csv";
  a.click();

  window.URL.revokeObjectURL(url);
});
