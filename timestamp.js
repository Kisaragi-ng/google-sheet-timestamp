// To insert this script, go to Tools > Script Editor

function onEdit(e) {
  
  var ss = SpreadsheetApp.getActiveSheet();
  var r = ss.getActiveCell();
  var active_sheet = 'Sheet1'; // Set Sheet name here
  var timestamp_out = 'A'; // Set logging column here

  if (r.getColumn() < 9 && ss.getName()==active_sheet) {
var celladdress = timestamp_out + r.getRowIndex() 
    ss.getRange(celladdress).setValue(new Date()).setNumberFormat("DD MMMM hh:mm");
  }
};

// To change sheet timezone go to File > Spreadsheet setting > Timezone
