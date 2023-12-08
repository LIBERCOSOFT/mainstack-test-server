# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 Server ](#-server-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Install \& Setup](#install--setup)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🙏 Acknowledgments ](#-acknowledgments-)

<!-- PROJECT DESCRIPTION -->

# 📖 Server <a name="about-project"></a>

**Server** is a simple CRUD (Create, Read, Update, Delete) application that manages the product in a store coupled with user authentication.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://nodejs.org/en">NodeJS</a></li>
    <li><a href="https://www.typescriptlang.org">Typescript</a></li>
    <li><a href="https://expressjs.com">ExpressJS</a></li>
    <li><a href="https://www.mongodb.com/atlas/database">MongoDB</a></li>
    <li><a href="https://mongoosejs.com">Mongoose</a></li>
    <li><a href="https://www.docker.com">Docker</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- **Persist a new product**
- **Retrieve all products**
- **Delete a saved product**
- **Retrieve one product**
- **Create new user**
- **Authenticate a saved user**
- **Logout a saved user**
  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

[Live Demo Link](https://mainstack-test-server.onrender.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

> To start and run this project with npm
```
npm install
```
```
npm run server
```
```
visit http://localhost:5050
```

> To start and run this project with docker
- Build a docker image first, use this command:
```
docker build -t mainstack-server .
```
- Run your docker container with this command:
```
docker run -p 5050:5050 -d mainstack-server
```
- Check your container logs with the container id you got from the above command with this command:
```
sudo docker logs 'container-id'
```
- Visit the server below:
```
http://localhost:5050
```

To get a local copy up and running, follow these steps.

### Prerequisites

- IDE / Editor
- Git 
- NodeJS


### Install & Setup

To setup and install this sample ROR Blog project, follow the below steps:
- Clone this project by the command: 

```
$ git clone hhttps://github.com/LIBERCOSOFT/mainstack-test-server
```

- Then switch to the project folder by the below query:

```
$ cd transport_system_server
```
- Create and fill a '.env' file using the .env.example
  
- Install npm dependencies with the command below:
```
$ npm install
```

- Start the development server with the command below:
```
$ npm run server
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Kolapo Precious Akinrinlola**

- GitHub: [LIBERCOSOFT](https://github.com/LIBERCOSOFT)
- Twitter: [@Gerfieldt](https://twitter.com/Gerfieldt)
- LinkedIn: [Kolapo Akinrinlola](https://linkedin.com/in/kolapo-akinrinlola)

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>
- [ ] **Add an accounting feature to calculate cost of all products**
- [ ] **Add an inventory functionality to add and remove from number of a product's stock**


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- [Mainstack](https://www.mainstack.co)


<p align="right">(<a href="#readme-top">back to top</a>)</p>