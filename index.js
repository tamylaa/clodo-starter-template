// Clodo Framework Demo - Real npm package!
// Using @tamyla/clodo-framework from npm
console.log('🚀 Clodo Framework Demo - Real Package!');
console.log('📦 Loading @tamyla/clodo-framework...');
console.log('');

// Import the real Clodo Framework from npm (ESM)
import { createService } from '@tamyla/clodo-framework';

console.log(' Clodo Framework loaded successfully!');
console.log(' Using real Clodo Framework API');
console.log(' Simulating edge computing with Cloudflare Workers');
console.log('');

// Demo service using real Clodo Framework
const demoService = createService('demo', (request, env) => {
    const { method, url, headers = {} } = request;

    // Simulate different responses based on request
    let response;
    if (method === 'GET' && url.includes('/api/health')) {
        response = {
            status: 200,
            message: 'Service is healthy!',
            timestamp: new Date().toISOString(),
            framework: 'Clodo Framework (Real)',
            version: '3.1.24',
            environment: env.NODE_ENV || 'development'
        };
    } else {
        response = {
            status: 200,
            message: 'Hello from Clodo Framework on the Edge!',
            timestamp: new Date().toISOString(),
            tip: 'Try editing this message or add new endpoints!',
            userAgent: headers['user-agent'] || 'Unknown',
            method,
            url
        };
    }

    console.log(' Response:', response);
    return response;
});

// Test the service with different scenarios
console.log(' Testing service...');

// Test basic request
const testRequest1 = { method: 'GET', url: '/api/demo', headers: { 'user-agent': 'StackBlitz/1.0' } };
demoService.handleRequest(testRequest1, { NODE_ENV: 'demo' });

// Test health check
const testRequest2 = { method: 'GET', url: '/api/health' };
demoService.handleRequest(testRequest2);

console.log('');
console.log(' Ready to code! Edit the service logic above and re-run to see changes.');
console.log('');
console.log(' NEXT STEPS:');
console.log('1. Fork this project (top-right menu) to save your changes');
console.log('2. Add new endpoints or modify the response logic');
console.log('3. Ready to deploy? Visit: https://clodo.dev/cloudflare-pages-setup');
console.log('4. Learn more: https://clodo.dev/docs');
console.log('5. Close this tab to return to clodo.dev');
console.log('');
console.log(' Tip: This demo runs the real @tamyla/clodo-framework package from npm!');
