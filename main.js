
// main.js - Use this EXACT code
const Apify = require('apify');

(async function() {
    console.log('=== PDF TOOLKIT ACTOR STARTING ===');
    
    try {
        // 1. Get input
        const input = await Apify.getInput() || {};
        console.log('Input received');
        
        // 2. Your PDF logic here (example)
        console.log('Processing PDF...');
        
        // 3. Save results
        await Apify.pushData({
            success: true,
            message: 'PDF Toolkit is working!',
            timestamp: new Date().toISOString(),
            pagesProcessed: 5
        });
        
        console.log('=== ACTOR FINISHED SUCCESSFULLY ===');
        
    } catch (error) {
        console.error('ERROR:', error.message);
        await Apify.pushData({
            error: true,
            message: error.message,
            timestamp: new Date().toISOString()
        });
        throw error;
    }
})();
