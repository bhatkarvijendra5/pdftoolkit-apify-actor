
// main.js - GUARANTEED WORKING VERSION
const Apify = require('apify');

console.log('Apify module loaded:', typeof Apify);
console.log('Apify.main exists:', typeof Apify.main);

Apify.main(async () => {
    console.log('Actor started successfully!');
    
    // Get input (empty object if none provided)
    const input = await Apify.getInput() || {};
    console.log('Input received:', input);
    
    // Save success data
    await Apify.pushData({
        status: 'success',
        message: 'PDF Toolkit Actor is working!',
        timestamp: new Date().toISOString()
    });
    
    console.log('Actor finished successfully.');
});
