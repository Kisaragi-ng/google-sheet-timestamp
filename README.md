# google-sheet-timestamp

Simple timestamp in google sheet using javascript. To insert this script, go to Tools > Script Editor

If you need to modify spreadsheet timezone, go to File > Spreadsheet setting > Timezone

This script require setup for two adjustment/ `active_sheet` to change active sheet name and `timestamp_out` to select timestamp output on that column.

```
function onEdit(e) {

    var ss = SpreadsheetApp.getActiveSheet();
    var r = ss.getActiveCell();
    var active_sheet = 'Sheet1';
    var timestamp_out = 'A';

    if (r.getColumn() < 9 && ss.getName() == active_sheet) {
        var celladdress = timestamp_out + r.getRowIndex()
        ss.getRange(celladdress).setValue(new Date()).setNumberFormat("DD MMMM hh:mm");
    }
};
```
