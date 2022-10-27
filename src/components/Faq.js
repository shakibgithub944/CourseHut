import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">what is c++ used for?</summary>
                            <div className="px-4 pb-4">
                                <p>What is C++ Used For? C++ (or “C-plus-plus”) is a general-purpose programming and coding language. C++ is used in developing browsers, operating systems, and applications, as well as in-game programming, software engineering, data structures, etc.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">what is data science?</summary>
                            <div className="px-4 pb-4">
                                <p>Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured and unstructured data, and apply knowledge from data across a broad range of application domains. </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">what is artificial intelligence</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>Artificial intelligence is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals and humans. </p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;