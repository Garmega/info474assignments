$(document).ready(function() {
    main();
});


function main() {
    d3.csv('prepped_data.csv', function(error, data) {
        //console.log(data);
        var chart = TreemapChart();
        chart.width(500)
        chart.height(500)
        chart.nestedElement("region").measure("fertility_rate").elementText("country_code")
        var div = d3.select("#vis").datum(data).call(chart);
    })
}
