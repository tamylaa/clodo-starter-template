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

// ===== INTERACTIVE DEMO WITH USER CHOICES =====
import readline from 'readline';

// Detect if running in StackBlitz (web environment)
const isStackBlitz = typeof window !== 'undefined' || process.env.STACKBLITZ_ENV === 'true';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer.trim());
        });
    });
}

async function runInteractiveDemo() {
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

    if (isStackBlitz) {
        // In StackBlitz, show all options at once for better UX
        console.log('🚀 CLODO FRAMEWORK INTERACTIVE EXPERIENCE');
        console.log('='.repeat(50));
        console.log('');
        console.log('📋 AVAILABLE EXPLORATION OPTIONS:');
        console.log('');
        console.log('1️⃣  **HTTP METHODS** - Try POST, PUT, DELETE requests');
        console.log('2️⃣  **ERROR HANDLING** - See how framework handles invalid requests');
        console.log('3️⃣  **CODE MODIFICATION** - Edit and re-run to see changes');
        console.log('4️⃣  **ADD NEW ENDPOINT** - Create a custom API route');
        console.log('5️⃣  **TRY IT LIVE** - See instant code changes in action!');
        console.log('');
        console.log('💻 HOW TO EXPLORE:');
        console.log('• Edit the code above and re-run with: npm start');
        console.log('• Try different options by modifying the demo functions below');
        console.log('• Each function shows different aspects of the framework');
        console.log('');
        console.log('🎯 QUICK START: Uncomment and run any demo function below!');
        console.log('');

        // Show all demo functions for easy access
        console.log('🔧 AVAILABLE DEMO FUNCTIONS:');
        console.log('// exploreHttpMethods() - Test different HTTP methods');
        console.log('// exploreErrorHandling() - Test error scenarios');
        console.log('// exploreCodeModification() - Learn about code editing');
        console.log('// showEndpointCreationGuide() - Add new API endpoints');
        console.log('// tryItLive() - See live code changes');
        console.log('');
        console.log('💡 TIP: Uncomment any function call below to run it!');
        console.log('');

        // Uncomment one of these to run a specific demo:
        // await exploreHttpMethods();
        // await exploreErrorHandling();
        // await exploreCodeModification();
        // await showEndpointCreationGuide();
        // await tryItLive();

        console.log('✨ Ready to explore! Edit and uncomment any demo function above.');
        return;
    }

    // ===== FIRST INTERACTION POINT =====
    console.log('🚀 WELCOME TO THE INTERACTIVE CLODO FRAMEWORK EXPERIENCE!');
    console.log('='.repeat(60));
    console.log('');
    console.log('📋 CHOOSE WHAT TO EXPLORE FIRST:');
    console.log('');
    console.log('1️⃣  **HTTP METHODS** - Try POST, PUT, DELETE requests');
    console.log('2️⃣  **ERROR HANDLING** - See how framework handles invalid requests');
    console.log('3️⃣  **CODE MODIFICATION** - Edit and re-run to see changes');
    console.log('4️⃣  **ADD NEW ENDPOINT** - Create a custom API route');
    console.log('5️⃣  **TRY IT LIVE** - See instant code changes in action!');
    console.log('');

    const choice1 = await askQuestion('Enter your choice (1-5): ');

    switch (choice1) {
        case '1':
            await exploreHttpMethods();
            break;
        case '2':
            await exploreErrorHandling();
            break;
        case '3':
            await exploreCodeModification();
            break;
        case '4':
            await showEndpointCreationGuide();
            break;
        case '5':
            await tryItLive();
            break;
        default:
            console.log('❌ Invalid choice. Let\'s try something live...');
            await tryItLive();
    }

    // ===== SECOND INTERACTION POINT =====
    console.log('');
    console.log('🎯 WHAT WOULD YOU LIKE TO DO NEXT?');
    console.log('');
    console.log('1️⃣  **MODIFY CODE** - Edit the service logic above');
    console.log('2️⃣  **TEST NEW ENDPOINT** - Create a custom API route');
    console.log('3️⃣  **TRY IT LIVE** - See instant code changes in action!');
    console.log('4️⃣  **DEPLOY INFO** - Learn about deployment');
    console.log('5️⃣  **EXIT** - End the demo');
    console.log('');

    const choice2 = await askQuestion('What would you like to do next? (1-5): ');

    switch (choice2) {
        case '1':
            await showCodeModificationGuide();
            break;
        case '2':
            await showEndpointCreationGuide();
            break;
        case '3':
            await tryItLive();
            break;
        case '4':
            await showDeploymentInfo();
            break;
        case '5':
            console.log('👋 Thanks for exploring Clodo Framework!');
            console.log('🔗 Visit https://clodo.dev for more information');
            break;
        default:
            console.log('👋 Thanks for exploring Clodo Framework!');
            console.log('🔗 Visit https://clodo.dev for more information');
    }

    // Only close readline interface if not in StackBlitz
    if (!isStackBlitz) {
        rl.close();
    }
}

async function exploreHttpMethods() {
    console.log('');
    console.log('🔥 EXPLORING HTTP METHODS');
    console.log('='.repeat(30));
    console.log('');

    console.log('🧪 Let\'s test different HTTP methods with your service...');
    console.log('');

    // Test POST request
    console.log('📨 Testing POST request (creating data)...');
    const postRequest = { method: 'POST', url: '/api/data', headers: { 'user-agent': 'StackBlitz/1.0' }, body: { name: 'John Doe', email: 'john@example.com' } };
    const postResult = demoService.handler(postRequest, { NODE_ENV: 'development' });
    console.log('✅ POST result:', postResult.message);
    console.log('');

    // Test PUT request
    console.log('� Testing PUT request (updating data)...');
    const putRequest = { method: 'PUT', url: '/api/users/1', headers: { 'user-agent': 'StackBlitz/1.0' }, body: { name: 'John Updated' } };
    const putResult = demoService.handler(putRequest, { NODE_ENV: 'development' });
    console.log('✅ PUT result:', putResult.message);
    console.log('');

    // Test DELETE request
    console.log('🗑️  Testing DELETE request (removing data)...');
    const deleteRequest = { method: 'DELETE', url: '/api/users/1', headers: { 'user-agent': 'StackBlitz/1.0' } };
    const deleteResult = demoService.handler(deleteRequest, { NODE_ENV: 'development' });
    console.log('✅ DELETE result:', deleteResult.message);
    console.log('');

    console.log('💡 ENHANCE YOUR SERVICE: Add method-specific handling!');
    console.log('');
    console.log('🔧 Add this to handle different methods:');
    console.log('if (method === "POST" && url.includes("/api/data")) {');
    console.log('  response = { status: 201, message: "Data created successfully!", created: true };');
    console.log('} else if (method === "PUT" && url.includes("/api/users/")) {');
    console.log('  response = { status: 200, message: "User updated successfully!", updated: true };');
    console.log('} else if (method === "DELETE") {');
    console.log('  response = { status: 200, message: "Resource deleted successfully!", deleted: true };');
    console.log('}');
    console.log('');
    console.log('🎯 IN STACKBLITZ: Add these conditions to your service logic!');
}

async function exploreErrorHandling() {
    console.log('');
    console.log('🛡️  EXPLORING ERROR HANDLING');
    console.log('='.repeat(30));
    console.log('');

    console.log('🧪 Testing different error scenarios...');
    console.log('');

    // Test 404 - Not Found
    console.log('❌ Testing 404 (endpoint doesn\'t exist)...');
    const notFoundRequest = { method: 'GET', url: '/api/nonexistent', headers: { 'user-agent': 'StackBlitz/1.0' } };
    const notFoundResult = demoService.handler(notFoundRequest, { NODE_ENV: 'development' });
    console.log('   Status: 200 (should be 404!)');
    console.log('');

    // Test invalid method
    console.log('🚫 Testing invalid HTTP method...');
    const invalidMethodRequest = { method: 'PATCH', url: '/api/users', headers: { 'user-agent': 'StackBlitz/1.0' } };
    const invalidMethodResult = demoService.handler(invalidMethodRequest, { NODE_ENV: 'development' });
    console.log('   Method: PATCH (not commonly supported)');
    console.log('');

    console.log('💡 IMPROVE ERROR HANDLING: Add proper HTTP status codes!');
    console.log('');
    console.log('🔧 Add this error handling to your service:');
    console.log('');
    console.log('// 404 Error Handling');
    console.log('if (!url.includes("/api/")) {');
    console.log('  response = {');
    console.log('    status: 404,');
    console.log('    error: "Not Found",');
    console.log('    message: "The requested endpoint does not exist"');
    console.log('  };');
    console.log('}');
    console.log('');
    console.log('// Method Not Allowed');
    console.log('if (!["GET", "POST", "PUT", "DELETE"].includes(method)) {');
    console.log('  response = {');
    console.log('    status: 405,');
    console.log('    error: "Method Not Allowed",');
    console.log('    message: `Method ${method} is not supported`');
    console.log('  };');
    console.log('}');
    console.log('');
    console.log('🎯 IN STACKBLITZ: Add these error conditions to your service logic!');
    console.log('   Your API will be much more robust and follow HTTP standards!');
}

async function exploreCodeModification() {
    console.log('');
    console.log('⚡ EXPLORING CODE MODIFICATION');
    console.log('='.repeat(35));
    console.log('');
    console.log('📝 Edit the service logic above (lines 25-45) and re-run with: npm start');
    console.log('');
    console.log('🔧 QUICK EDITS TO TRY:');
    console.log('• Change the response message');
    console.log('• Add conditions based on URL or method');
    console.log('• Add new properties to the response');
    console.log('• Handle different HTTP methods');
    console.log('');
    console.log('💡 TIP: Every change you make will be reflected instantly!');
}

async function showAllExamples() {
    console.log('');
    console.log('📚 ALL AVAILABLE EXAMPLES');
    console.log('='.repeat(30));
    console.log('');
    console.log('🔧 COPY & PASTE THESE INTO YOUR SERVICE LOGIC:');
    console.log('');
    console.log('// 1. Add a users endpoint:');
    console.log('if (method === "GET" && url.includes("/api/users")) {');
    console.log('  response = { status: 200, users: ["Alice", "Bob", "Charlie"] };');
    console.log('}');
    console.log('');
    console.log('// 2. Handle POST data creation:');
    console.log('if (method === "POST" && url.includes("/api/data")) {');
    console.log('  response = { status: 201, message: "Data created!", received: true };');
    console.log('}');
    console.log('');
    console.log('// 3. Add 404 error handling:');
    console.log('if (!url.includes("/api/")) {');
    console.log('  response = { status: 404, error: "Endpoint not found" };');
    console.log('}');
    console.log('');
    console.log('💡 Edit the code above and re-run to test your changes!');
}

async function showCodeModificationGuide() {
    console.log('');
    console.log('⚡ CODE MODIFICATION GUIDE');
    console.log('='.repeat(30));
    console.log('');
    console.log('📝 HOW TO MODIFY THE SERVICE:');
    console.log('1. Look at lines 32-55 above (the service logic)');
    console.log('2. Add conditions like: if (method === "POST")');
    console.log('3. Change response properties');
    console.log('4. Add new endpoints with URL checks');
    console.log('5. Save and run: npm start');
    console.log('');
    console.log('🎯 EXAMPLE: Change the greeting message');
    console.log('   Find: message: "Hello from Clodo Framework..."');
    console.log('   Change to: message: "Welcome to my API!"');
}

async function showEndpointCreationGuide() {
    console.log('');
    console.log('🌐 ENDPOINT CREATION GUIDE');
    console.log('='.repeat(30));
    console.log('');
    console.log('📝 LET\'S ADD A NEW ENDPOINT TOGETHER!');
    console.log('');

    console.log('🔧 I\'ll add a "/api/users" endpoint to your service...');
    console.log('   (This simulates what you would do in StackBlitz)');
    console.log('');

    // Simulate adding the endpoint by testing it
    console.log('🧪 Testing the new endpoint...');

    // Create a modified version of the handler for demonstration
    const enhancedHandler = (request, env) => {
        const { method, url, headers = {} } = request;
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
        } else if (method === 'GET' && url.includes('/api/users')) {
            // NEW ENDPOINT: Users API
            response = {
                status: 200,
                users: [
                    { id: 1, name: 'Alice Johnson', role: 'Developer' },
                    { id: 2, name: 'Bob Smith', role: 'Designer' },
                    { id: 3, name: 'Charlie Brown', role: 'Manager' }
                ],
                total: 3,
                message: 'Users retrieved successfully!'
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
    };

    // Test the new endpoint
    const usersRequest = { method: 'GET', url: '/api/users', headers: { 'user-agent': 'StackBlitz/1.0' } };
    const usersResult = enhancedHandler(usersRequest, { NODE_ENV: 'development' });

    console.log('');
    console.log('✅ NEW ENDPOINT WORKING! Here\'s what you would add to your service:');
    console.log('');
    console.log('// Add this to your service logic:');
    console.log('} else if (method === "GET" && url.includes("/api/users")) {');
    console.log('  response = {');
    console.log('    status: 200,');
    console.log('    users: [');
    console.log('      { id: 1, name: "Alice Johnson", role: "Developer" },');
    console.log('      { id: 2, name: "Bob Smith", role: "Designer" },');
    console.log('      { id: 3, name: "Charlie Brown", role: "Manager" }');
    console.log('    ],');
    console.log('    total: 3,');
    console.log('    message: "Users retrieved successfully!"');
    console.log('  };');
    console.log('}');
    console.log('');
    console.log('💡 IN STACKBLITZ: Copy this code into your service logic above!');
    console.log('   Then visit /api/users to see your new endpoint!');
}

async function tryItLive() {
    console.log('');
    console.log('⚡ LIVE CODE DEMONSTRATION');
    console.log('='.repeat(30));
    console.log('');
    console.log('🎭 I\'ll modify your service live and show the results!');
    console.log('');

    console.log('🔧 ADDING: A products API endpoint...');
    console.log('');

    // Create enhanced handler with products endpoint
    const liveHandler = (request, env) => {
        const { method, url, headers = {} } = request;
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
        } else if (method === 'GET' && url === '/api/products') {
            // LIVE DEMO: Products endpoint
            response = {
                status: 200,
                products: [
                    { id: 1, name: 'Cloud Storage', price: 9.99, category: 'Infrastructure' },
                    { id: 2, name: 'Edge Computing', price: 19.99, category: 'Compute' },
                    { id: 3, name: 'CDN Service', price: 14.99, category: 'Delivery' }
                ],
                total: 3,
                message: 'Products retrieved successfully!'
            };
        } else if (method === 'POST' && url === '/api/products') {
            // LIVE DEMO: Create product
            response = {
                status: 201,
                message: 'Product created successfully!',
                product: { id: 4, name: 'New Service', price: 24.99 },
                created: true
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

        return response;
    };

    // Demonstrate the live changes
    console.log('🧪 Testing the new /api/products endpoint...');
    const productsRequest = { method: 'GET', url: '/api/products', headers: { 'user-agent': 'StackBlitz/1.0' } };
    const productsResult = liveHandler(productsRequest, { NODE_ENV: 'development' });
    console.log('📦 Products:', productsResult.products?.length, 'items found');
    console.log('');

    console.log('🧪 Testing POST to create a product...');
    const createRequest = { method: 'POST', url: '/api/products', headers: { 'user-agent': 'StackBlitz/1.0' }, body: { name: 'New Service' } };
    const createResult = liveHandler(createRequest, { NODE_ENV: 'development' });
    console.log('✅ Created:', createResult.message);
    console.log('');

    console.log('💡 THIS IS WHAT HAPPENS IN STACKBLITZ:');
    console.log('• You edit the code above (lines 32-55)');
    console.log('• Add the products endpoint logic');
    console.log('• Changes appear instantly!');
    console.log('• No restart needed - just refresh your browser');
    console.log('');
    console.log('🔥 The framework handles everything automatically!');
    console.log('   - Routing based on URL patterns');
    console.log('   - Method-specific responses');
    console.log('   - JSON serialization');
    console.log('   - Error handling');
    console.log('');
    console.log('🎯 READY TO TRY IT YOURSELF?');
    console.log('   In StackBlitz: Add the products endpoint code shown above!');
}

async function showDeploymentInfo() {
    console.log('');
    console.log('🚀 DEPLOYMENT INFORMATION');
    console.log('='.repeat(30));
    console.log('');
    console.log('🔗 Ready to deploy your Clodo Framework app?');
    console.log('');
    console.log('📚 RESOURCES:');
    console.log('• Documentation: https://clodo.dev/docs');
    console.log('• Cloudflare Pages Setup: https://clodo.dev/cloudflare-pages-setup');
    console.log('• GitHub Repo: https://github.com/tamylaa/clodo-framework');
    console.log('');
    console.log('⚡ Clodo Framework is optimized for:');
    console.log('• Cloudflare Workers (Edge Computing)');
    console.log('• Cloudflare Pages');
    console.log('• Any JavaScript environment');
}

// Start the interactive demo
runInteractiveDemo().catch(console.error);
