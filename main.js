
const Apify = require('apify');

(async function() {
    console.log('=== PDF TOOLKIT ACTOR STARTING ===');
    
    try {
        const input = await Apify.getInput() || {};
        console.log('Input received');
        
        console.log('Processing PDF...');
        
        await Apify.pushData({
            success: true,
            message: 'PDF Toolkit is working!',
            timestamp: new Date().toISOString()
        });
        
        console.log('=== ACTOR FINISHED SUCCESSFULLY ===');
        
    } catch (error) {
        console.error('ERROR:', error.message);
        throw error;
    }
})();
