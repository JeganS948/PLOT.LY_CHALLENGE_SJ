// Create a dropdown function
function init() {
    // select dropdown menu
    var dropdown = d3.select("#selDataset");

    // Use d3.JSON to fetch data from JSON file
    d3.json("data/samples.json").then((data)=> {
        sampleData.names.forEach((sample)=> {
            dropdown.append("option").text(sample.property("value", sample)
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

// Retrieve data based on sample data
function optionChnaged(sampleID) {
    console.log(sampleID);
    createBarChart(sampleID);
    createBubbleChart(sampleID);
    displayMetadata(sampleID);
}

// Create bar chart
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

        // Create trace varibale for the horizatal bar chart
        var trace = {
            x: sampleValues,
            y: otuId,
            text: otuLabels,
            type:"bar",
            orientation: "h",
        };

        // Create data variable
        var data0 = [trace];

        // create layout variable to set horizantal bar chart layout
        var layout0 = {
            title: "Top 10 OTU",
            yaxis:{
                tickmode:"linear",
            },
            margin: {
                l: 100,
                r: 100,
                t: 30,
                b: 20
            }
        };

        // Create the bar chart
        Plotly.newPlot("bar", data0, layout0);
    };
}

// Create bubble chart
function createBubbleChart(selectedID) {
    // Use d3.JSON to fetch data from JSON file
    d3.json("data/samples.json").then((data) => {
        var samples = data.samples;
        var selectedData = samples.filter(object => object.id == selectedID)[0];
        var otuIDstr = selectedData.otu_ids.map(String);
        // Console log selected data
        console.log(otuIDstr);

        // Create trace varibale for bubble chart
        var trace_x = {
            x: samples.otu_ids,
            y: samples.sample_values,
            mode: "markers",
            marker: {
                size: samples.sample_values,
                color: samples.otu_ids
            },
            text: samples.otu_labels
        };

        // Create data variable
        var data1 = [trace_x];

        // Create layout variable to set horizantal bubble chart layout
        var layout1 = {
            xaxis:{title: "OTU ID"},
            height: 600,
            width: 1300
        };

        // Create the bubble chart
        Plotly.newPlot("bubble", data1, layout1);
    };
}

// Retireve metadata
function displayMetadata(selectedData) { 
    // Display metadata and retrieve REF panel
    var dataPanel = d3.select("#sample-metadata");
    // Clear panel data
    dataPanel.html("");

    // Store into variable and console log
    var metadata = data.metadata.filter(object => object.id == selectedID)[0];
    console.log(metadata);

    // Display key-value pair from metadata
    Object.entries(metadata).forEach(([key, value]) => {
        // Store key into variable
        var panel = dataPanel.append("h6").text(`${key}: ${value}`);
    });
}

// Initialize browser
init();