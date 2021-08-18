// To insert this script, go to Tools > Script Editor

function onEdit(e) {
    var ss = SpreadsheetApp.getActiveSheet();
    var r = ss.getActiveCell();
    var active_sheet = 'Sheet1';
    var timestamp_out = 'A';
    var celladdress = timestamp_out + r.getRowIndex()
    
    if (r.getColumn() < 9 && ss.getName() == active_sheet && ss.getRange(celladdress).isBlank()) {
        ss.getRange(celladdress).setValue(new Date()).setNumberFormat("DD MMMM hh:mm:ss");
    }
};

// To change sheet timezone go to File > Spreadsheet setting > Timezone
