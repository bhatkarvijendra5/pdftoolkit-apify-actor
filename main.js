
const Apify = require('apify');

Apify.main(async () => {
    console.log('🚀 Actor started');

    const input = await Apify.getInput();
    console.log('📥 Input:', input);

    await Apify.setValue('OUTPUT', {
        status: 'Actor is working'
    });

    console.log('✅ Actor finished successfully');
});
