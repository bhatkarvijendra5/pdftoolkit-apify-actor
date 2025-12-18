
const Apify = require('apify');

Apify.main(async () => {
    console.log('✅ PDF Toolkit Actor started successfully');

    // Keep actor alive briefly (for testing)
    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log('✅ Actor finished');
});
