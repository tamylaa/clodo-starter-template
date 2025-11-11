// Clodo Framework Demo - Instant coding environment
console.log('🚀 Clodo Framework Demo!');
console.log('🎯 Edit this code and see changes instantly!');
console.log('');

// Simple service simulation
const createService = (name, handler) => {
    console.log(`📦 Service '${name}' created!`);
    return {
        name,
        test: () => handler({ method: 'GET', url: '/test' }, {})
    };
};

// Demo service
const demo = createService('demo', (request, env) => {
    const response = {
        message: 'Hello from Clodo Framework!',
        timestamp: new Date().toISOString(),
        tip: 'Try editing this message!'
    };
    // Clodo Framework Demo - Instant coding environment
// Clodo Framework simplifies edge computing development on Cloudflare Workers
// This demo shows instant service creation and request handling

console.log('� Installing Clodo Framework...');
console.log('⬇️  Downloading dependencies...');

// Simulate installation progress (in real StackBlitz, this would be npm install)
setTimeout(() => {
    console.log('✅ Clodo Framework installed successfully!');
    console.log('🚀 Initializing framework...');
    console.log('');

    // Now import and use the framework
    try {
        const { createService } = require('clodo-framework');
        console.log('🎯 Using real Clodo Framework!');
        console.log('🌐 Simulating edge computing with Cloudflare Workers');
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
                    framework: 'Clodo Framework',
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

            console.log('📤 Response:', response);
            return response;
        });

        // Test the service with different scenarios
        console.log('🧪 Testing service...');

        // Test basic request
        const testRequest1 = { method: 'GET', url: '/api/demo', headers: { 'user-agent': 'StackBlitz/1.0' } };
        demoService.handleRequest(testRequest1, { NODE_ENV: 'demo' });

        // Test health check
        const testRequest2 = { method: 'GET', url: '/api/health' };
        demoService.handleRequest(testRequest2);

        console.log('✅ Ready to code! Edit the service logic above and re-run to see changes.');
        console.log('');
        console.log('🚀 NEXT STEPS:');
        console.log('1. Fork this project (top-right menu) to save your changes');
        console.log('2. Add new endpoints or modify the response logic');
        console.log('3. Ready to deploy? Visit: https://clodo.dev/cloudflare-pages-setup');
        console.log('4. Learn more: https://clodo.dev/docs');
        console.log('5. Close this tab to return to clodo.dev');
        console.log('');
        console.log('💡 Tip: This demo runs instantly - no setup required!');

    } catch (error) {
        console.log('⚠️  Clodo Framework not found, using simulation mode...');
        console.log('🎯 Edit this code and see changes instantly!');
        console.log('');

        // Fallback to simulation
        const createService = (name, handler) => {
            console.log(`📦 Service '${name}' created! (simulated)`);
            return {
                name,
                handleRequest: (request, env = {}) => {
                    console.log(`🔄 Handling ${request.method} ${request.url}`);
                    return handler(request, env);
                }
            };
        };

        // Demo service
        const demo = createService('demo', (request, env) => {
            const response = {
                message: 'Hello from Clodo Framework (simulated)!',
                timestamp: new Date().toISOString(),
                tip: 'Try editing this message!'
            };
            console.log('📤 Response:', response);
            return response;
        });

        // Test the service
        console.log('🧪 Testing...');
        demo.handleRequest({ method: 'GET', url: '/test' }, {});

        console.log('✅ Ready to code!');
    }

}, 1000); // Simulate installation delay
    return response;
});

// Test the service
console.log('🧪 Testing...');
demo.test();

console.log('✅ Ready to code!');
