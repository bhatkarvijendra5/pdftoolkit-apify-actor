
import { Actor } from 'apify';

await Actor.init();

console.log('🚀 Actor started');

const input = await Actor.getInput();
console.log('📥 Input:', input);

await Actor.setValue('OUTPUT', {
    status: 'Actor is working correctly'
});

console.log('✅ Actor finished');

await Actor.exit();
