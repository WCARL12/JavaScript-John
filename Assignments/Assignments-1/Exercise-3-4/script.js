// "use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

// Made it to a 2d array / matrix
let allRegions = [region1, region2, region3, region4, region5]


function getSalesByQuarter(regions){
    document.write("<h2>Sales by Quarter</h2>")
    let regionIteration = 0;

    // Iterate through each region
    for (region of regions){
        let salesByRegion = 0;
        for (sales in region){
            // I am doing regions[sales][regionIteration] because I need to go by column. 
            salesByRegion += regions[sales][regionIteration]
        }

        // The "sales in region" iteration has a total of 4 index (0-3) for each loop. I need to add 1 more iteration to get the 5th row in 1st column... and so on
        salesByRegion+= regions[region.length][regionIteration]

        regionIteration++;
        document.write(`Q${regionIteration}: ${salesByRegion}<br>`)

        // No need for the regionIteration > 4 because there is no sale that is in the 5th column. There is only 4 total columns.
        if (regionIteration === 4){
            break
        }
    }
}


function getSalesByRegion(regions){
    document.write("<h2>Sales by Quarter</h2>")
    let regionNum = 0;
    for (region of regions){
        regionNum++;
        let salesByQuarter = 0;

        for (sales of region){
            salesByQuarter += sales;
        }

        document.write(`Region ${regionNum}: $${salesByQuarter}<br>`)
        
    }
}

function getTotalSales(regions){
    document.write("<h2>Total Sales</h2>")
    let totalSales = 0;
    for (region of regions){
        for (sales of region){
            totalSales += sales;
        }
    }
    document.write(`$${totalSales}<br>`)
}

getSalesByQuarter(allRegions)
getSalesByRegion(allRegions)
getTotalSales(allRegions)