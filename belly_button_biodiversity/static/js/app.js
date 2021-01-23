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

// Create Bar plot
function createBarChart(selectedID ) {
    console.log(selectedID.toString());
    // Use d3.JSON to fetch data from JSON file
    d3.json("data/samples.json").then((data) => {
        var samples = data.samples;
        var selectedData = samples.filter(object => object.id. toString() == selectedID)[0];
        // Console log selected data
        console.log(selectedData);

        // Retrieve top 10 of sample values and reverse for the plot.ly
        var sampleValues = selectedData.sample_values.slice(0,10).reverse();
        var idValues = selectedData.otu_ids.slice(0,10).reverse();
        var otuId = idValues.map(row => "OTU " + row.toString());
        var otuLabels = selectedData.otu_labels.slice(0,10).reverse();
}