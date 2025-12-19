
const Apify = require('apify');

Apify.main(async () => {
    console.log('=== PDF Toolkit Actor Starting ===');
    
    try {
        // 1. Get input from Apify platform
        const input = await Apify.getInput();
        console.log('Actor input received');
        
        // 2. Your PDF processing logic will go here
        // For now, just show it works
        
        // 3. Save sample data
        await Apify.pushData({
            message: 'PDF Toolkit Actor ran successfully!',
            inputReceived: input ? true : false,
            timestamp: new Date().toISOString()
        });
        
        console.log('=== Actor completed successfully ===');
        
    } catch (error) {
        console.error('=== ERROR DETAILS ===');
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        
        // Save error to dataset
        await Apify.pushData({
            error: true,
            message: error.message,
            timestamp: new Date().toISOString()
        });
        
        // Re-throw to mark run as failed
        throw error;
    }
});
