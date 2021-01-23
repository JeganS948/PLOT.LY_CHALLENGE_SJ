// Create a dropdown function
function init() {
    // select dropdown menu
    var dropdown = d3.select("#selDataset");

    // Use d3.JSON to fetch data from JSON file
    d3.json("data/samples.json").then((data)=> {
        sampleData.names.forEach((sample)=> {
            dropdown.append("option").text(sample.property("value", sample);
        });
        // Call variable and Console log sample data
        var sampleID = dropdown.property("value");
        console.log(sampleID);
        console.log(samplesData);
        createBarChart(sampleID);
        createBubbleChart(sampleID);
        displayMetadata(sampleID);
    });
}

// Retrieve data based on sa
function optionChnaged(sampleID) {
    console.log(sampleID);
    createBarChart(sampleID);
    createBubbleChart(sampleID);
    displayMetadata(sampleID);
}