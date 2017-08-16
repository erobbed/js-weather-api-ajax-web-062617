function getFahrenheits(result){
   const temps = result.hourly_forecast.map(hour => hour.temp.english)
   return temps
}

function getHours(result){
  const hours = result.hourly_forecast.map(hour => hour.FCTTIME.hour)
  return hours
}

function generateDataSet(labels, data) {
  var data = {
    labels: labels,
    datasets: [{
      label:"Hourly Weather for New York",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: data
    }]
  }
  return data
}

function makeAjaxRequest(endpoint, success) {
  // fetch(endpoint)
  // .then(result => result.text())
  //   .then(data => success(JSON.parse(data)))
    $.ajax({
      url: endpoint,
      dataType: 'jsonp',
      success: success
    })
}
