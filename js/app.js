function updatePercent() {
  var numJobs = $("#numJobs").val();
  var percentSuccess = $("#percentSuccess").val();
  var overallPercentSuccess = Math.pow(percentSuccess, numJobs) / Math.pow(100, numJobs);
  overallPercentSuccess = Math.round(overallPercentSuccess * 100);
  $("#result").html(overallPercentSuccess);
}

$.ready(updatePercent());

$("#numJobs").change(updatePercent);

$("#percentSuccess").change(updatePercent);