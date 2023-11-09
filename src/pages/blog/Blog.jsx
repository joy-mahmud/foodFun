

const Blog = () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold">What is One way data binding?</h2>
            <p className="font-medium ml-10 mt-2">One-way data binding is a data flow pattern used in software development and user interfaces, where data is only allowed to flow in one direction, typically from a data source to the UI or view. This means that changes in the data source are automatically reflected in the UI, but changes in the UI do not affect the data source directly.
                One-way data binding simplifies the management of data and UI updates, making it easier to maintain consistency between the data and the user interface. This approach is commonly used in frameworks like AngularJS (Angular 1.x) and React, where data flow is unidirectional, making it predictable and easier to debug.

                In contrast, two-way data binding allows data to flow in both directions, where changes in the UI can also directly affect the data source. This is common in frameworks like Angular (Angular 2+), where changes in the UI can automatically update the data source, and vice versa. However, two-way data binding can sometimes lead to more complex and harder-to-maintain code, especially in larger applications.</p>

            <h2 className="text-4xl font-bold mt-5">What is NPM in node.js?</h2>
            <p className="font-medium ml-10 mt-2">In Node.js, npm stands for "Node Package Manager." It is the default package manager for Node.js, and it is used to install, manage, and distribute third-party libraries and packages that extend the functionality of Node.js applications.
                <h2 className="text-2xl font-semibold">Here are some common npm commands:</h2>
                <ul><li><span className="font-bold text-xl">npm-init:</span> Create a new package.json file for your project.</li>
                    <li><span className="font-bold text-xl">npm install package-name:</span> Install a package as a project dependency.</li>
                    <li><span className="font-bold text-xl">npm install -g package-name: </span>Install a package globally.</li>
                    <li><span className="font-bold text-xl">npm update package-name:</span> Update a package to its latest version.</li>
                    <li><span className="font-bold text-xl">npm uninstall package-name:</span> Remove a package from your project.</li>
                    <li><span className="font-bold text-xl">npm list: </span>List installed packages.</li>
                    <li><span className="font-bold text-xl">npm search package-name:</span> Search for packages on the npm registry.</li></ul>
            </p>
            <h2 className="text-4xl font-bold mt-5">Different between Mongodb database vs mySQL database</h2>
            <p className="font-medium ml-10 mt-2">
                MongoDB and MySQL are both popular database management systems, but they have several key differences in terms of their data models, schema, query languages, and use cases. Here are some of the main differences between MongoDB and MySQL:
                <ul>
                    <li>
                    <span className="text-xl font-medium">Data Model:</span>
                    <ul className="ml-5">
                        <li>
                        <span className="text-xl font-medium">MongoDB:</span> MongoDB is a NoSQL database, which means it uses a flexible, schema-less data model. Data is stored in BSON (Binary JSON) format, and each document in a collection can have a different structure. This flexibility is suitable for semi-structured or unstructured data.
                        </li>
                        <li>
                        <span className="text-xl font-medium"> MySQL:</span> MySQL is a relational database, which means it uses a structured, tabular data model. Data is organized into tables with predefined schemas, and each row in a table follows the same structure.
                        </li>
                    </ul>
                    </li>
                    <li  className="mt-5">
                    <span className="text-xl font-medium">Schema:</span>
                    <ul className="ml-5">
                        <li >
                        <span className="text-xl font-medium">MongoDB:</span>  MongoDB has a dynamic schema, which allows you to insert data without predefining the structure. Fields can be added or removed from documents as needed.
                        </li>
                        <li>
                        <span className="text-xl font-medium">MySQL:</span>
                        MySQL has a fixed schema, and the table structure is defined in advance. Any changes to the schema require altering the table, which can be a more rigid process.
                        </li>
                    </ul>
                    </li>
                    <li  className="mt-5">
                    <span className="text-xl font-medium">Query Language:</span>
                    <ul className="ml-5">
                        <li >
                        <span className="text-xl font-medium">MongoDB:</span>MongoDB uses a query language similar to JavaScript called the MongoDB Query Language (MQL). It supports flexible querying, including rich queries on document fields, and it allows for complex operations like aggregation and geospatial 
                        </li>
                        <li>
                        <span className="text-xl font-medium">MySQL:</span>
                        MySQL uses SQL (Structured Query Language), which is a standardized language for managing relational databases. SQL is well-established and widely used for querying and manipulating data.
                        </li>
                    </ul>
                    </li>
                </ul>

            </p>
        </div>
    );
};

export default Blog;
