// Create a dropdown function
function init() {
    var dropdown = d3.select("#selDataset");
}

// Create a function that populates plots for given 'ID'
function getPlot(id) {

    // Use d3.JSON to fetch data from JSON file
    d3.json("data/samples.json").then((data)=> {
        console.log(data)
    }
}