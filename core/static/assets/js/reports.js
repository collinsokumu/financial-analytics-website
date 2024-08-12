const dataTable = new simpleDatatables.DataTable('#datatable', {
  searchable: true,
  fixedHeight: true,
  data: {
      headings: ["Business Title", "Published Date", "Views Count"],
  }
});

dataTable.rows.add([
  ["Business 1", "2024-07-01", "12345"],
  ["Business 2", "2024-06-30", "67890"],
  ["Business 3", "2024-06-29", "23456"],
]);
