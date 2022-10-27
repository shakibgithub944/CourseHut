import React from 'react';

const Blog = () => {
    return (
        <div className='p-5 m-2 md:grid grid-cols-4 gap-5 '>
            <div className="  mb-2 max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
                <article>
                    <h2 className="text-xl font-bold">what is cors?</h2>
                    <p className="mt-4 dark:text-gray-400">The <b>Cross-Origin Resource Sharing</b> standard works by adding new HTTP headers that let servers describe which origins are permitted to read that information from a web browser. Additionally, for HTTP request methods that can cause side-effects on server data in particular, HTTP methods other than GET, or POST with certain MIME types, the specification mandates that browsers "preflight" the request, soliciting supported methods from the server with the HTTP OPTIONS request method, and then, upon "approval" from the server, sending the actual request. Servers can also inform clients whether "credentials" such as Cookies and HTTP Authentication should be sent with requests.</p>
                </article>
            </div>
            {/* blog 2 */}
            <div className=" mb-2 max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
                <article>
                    <h2 className="text-xl font-bold">Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p className="mt-4 dark:text-gray-400">Firebase provides tools to grow your app and business, for startups and global enterprises. Get your app up and running quickly and securely with fully managed backend infrastructure. Cross-Platform Solutions. Trusted by +200,000 Devs. Boost App Engagement.Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    </p>
                </article>
            </div>
            {/* blog 3 */}
            <div className=" mb-2 max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
                <article>
                    <h2 className="text-xl font-bold"> How does the private route work?</h2>
                    <p className="mt-4 dark:text-gray-400">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                        If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </article>
            </div>
            {/* blog 4 */}
            <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
                <article>
                    <h2 className="text-xl font-bold">What is Node? How does Node work?</h2>
                    <p className="mt-4 dark:text-gray-400">It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </article>
            </div>




        </div>
    );
};

export default Blog;