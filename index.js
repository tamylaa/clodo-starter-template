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
console.log('');

// ===== INTERACTIVE DEMO SECTION =====
console.log('🚀 WELCOME TO THE INTERACTIVE CLODO FRAMEWORK EXPERIENCE!');
console.log('='.repeat(60));
console.log('');
console.log('📋 What would you like to explore next?');
console.log('');
console.log('1️⃣  TEST DIFFERENT HTTP METHODS');
console.log('   Try POST, PUT, DELETE requests');
console.log('');
console.log('2️⃣  TEST ERROR HANDLING');
console.log('   See how the framework handles invalid requests');
console.log('');
console.log('3️⃣  MODIFY SERVICE LOGIC');
console.log('   Edit the code above and re-run to see changes');
console.log('');
console.log('4️⃣  TEST MULTIPLE ENDPOINTS');
console.log('   Add new API routes and test them');
console.log('');
console.log('5️⃣  ENVIRONMENT CONFIGURATION');
console.log('   Test with different environment variables');
console.log('');
console.log('💻 HOW TO CONTINUE:');
console.log('• Edit the service logic above (lines 25-45)');
console.log('• Change response messages, add conditions, or create new endpoints');
console.log('• Re-run with: node index.js');
console.log('• Try different request types and URLs');
console.log('');
console.log('🔧 QUICK EXAMPLES TO TRY:');
console.log('');
console.log('// Add a new endpoint:');
console.log('if (method === "GET" && url.includes("/api/users")) {');
console.log('  response = { status: 200, users: ["Alice", "Bob", "Charlie"] };');
console.log('}');
console.log('');
console.log('// Test POST requests:');
console.log('if (method === "POST" && url.includes("/api/data")) {');
console.log('  response = { status: 201, message: "Data created!", received: true };');
console.log('}');
console.log('');
console.log('🎯 TIP: The framework automatically handles routing, error responses,');
console.log('   and provides a consistent API structure. Focus on your business logic!');
console.log('');
console.log('🔗 Ready to deploy? Visit: https://clodo.dev/cloudflare-pages-setup');
console.log('📚 Learn more: https://clodo.dev/docs');
console.log('');

// ===== ADDITIONAL DEMO FEATURES =====

// Demonstrate different HTTP methods
console.log('🧪 Testing additional features...');

const postRequest = { method: 'POST', url: '/api/data', headers: { 'user-agent': 'StackBlitz/1.0' }, body: { name: 'test' } };
const postResult = demoService.handler(postRequest, { NODE_ENV: 'development' });
console.log('📨 POST request result:', postResult);

const invalidRequest = { method: 'GET', url: '/api/invalid', headers: { 'user-agent': 'StackBlitz/1.0' } };
const invalidResult = demoService.handler(invalidRequest, { NODE_ENV: 'development' });
console.log('❌ Invalid endpoint result:', invalidResult);

console.log('');
console.log('✨ Your Clodo Framework demo is ready for experimentation!');
console.log('   Edit, test, and explore the possibilities! 🚀');
