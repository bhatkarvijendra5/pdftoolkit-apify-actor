const { Actor } = require('apify');

Actor.main(async () => {
    console.log('🚀 Actor started successfully');

    const input = await Actor.getInput();
    console.log('📥 Input:', input);

    await Actor.setValue('OUTPUT', {
        status: 'Actor is running correctly'
    });

    console.log('✅ Actor finished successfully');
});
