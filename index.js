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
    console.log('📤 Response:', response);
    return response;
});

// Test the service
console.log('🧪 Testing...');
demo.test();

console.log('✅ Ready to code!');
    return response;
});

// Test the service
console.log(' Testing...');
demo.test();

console.log(' Ready to code!');
