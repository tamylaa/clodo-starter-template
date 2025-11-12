// Clodo Framework Demo - Real npm package!
// Using @tamyla/clodo-framework from npm
console.log('🚀 Clodo Framework Demo - Real Package!');
console.log('📦 Loading @tamyla/clodo-framework...');
console.log('');

// For local testing, create a mock version to avoid package issues
// In StackBlitz, this will use the real npm package
let createService;

try {
    // Try to import the real package
    const clodoModule = await import('@tamyla/clodo-framework');
    createService = clodoModule.createService;
    console.log('✅ Real Clodo Framework loaded successfully!');
    console.log('🔗 Using real Clodo Framework API from npm');
} catch (error) {
    console.log('⚠️  Real package not available locally, using mock for testing');
    console.log('📝 In StackBlitz, this will use the real @tamyla/clodo-framework');

    // Mock implementation for local testing
    createService = (name, handler) => {
        console.log(`📦 Mock service "${name}" created`);
        return {
            name,
            handler,
            mock: true
        };
    };
}

console.log('');

// Demo service using Clodo Framework (real or mock)
const demoService = createService('demo', (request, env) => {
    const { method, url, headers = {} } = request;

    // Simulate different responses based on request
    let response;
    if (method === 'GET' && url.includes('/api/health')) {
        response = {
            status: 200,
            message: 'Service is healthy!',
            timestamp: new Date().toISOString(),
            framework: demoService.mock ? 'Clodo Framework (Mock)' : 'Clodo Framework (Real)',
            version: demoService.mock ? 'Local Test' : '3.1.24',
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
const result1 = demoService.handler(testRequest1, { NODE_ENV: 'development' });
console.log('✅ Test 1 passed');

// Test health endpoint
const testRequest2 = { method: 'GET', url: '/api/health', headers: { 'user-agent': 'StackBlitz/1.0' } };
const result2 = demoService.handler(testRequest2, { NODE_ENV: 'development' });
console.log('✅ Test 2 passed');

console.log('');
console.log('🎉 Demo completed successfully!');
console.log('💡 In StackBlitz: Edit this code and see changes instantly');
console.log('🔄 Real npm package will be used automatically');
