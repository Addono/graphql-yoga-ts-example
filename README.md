<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![Test pipeline][test-pipeline-shield]][test-pipeline-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/addono/graphql-yoga-ts-example">
    <img src="https://raw.githubusercontent.com/graphql/graphql.github.io/source/static/img/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">GraphQL-Yoga + TypeScript Example </h3>

  <p align="center">
    A toy example of a GraphQL server written in TypeScript.
    <!--<br />
    <a href="https://github.com/addono/graphql-yoga-ts-example"><strong>Explore the docs »</strong></a>
    -->
    <br />
    <br />
    <a href="https://github.com/addono/graphql-yoga-ts-example/issues">Report Bug</a>
    ·
    <a href="https://github.com/addono/graphql-yoga-ts-example/issues">Request Feature</a>
  </p>

</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You need the following applications to be able to run this repo:

- Node.js
- Yarn

### Installation

1. Clone the repo

```sh
git clone https://github.com/Addono/graphql-yoga-ts-example.git
```

2. Install Yarn packages

```sh
yarn install --frozen-lockfile
```

<!-- USAGE EXAMPLES -->

## Usage

First, start the server:

```sh
yarn run start
```

Then you can interact with the GraphQL endpoint at http://localhost:5000.

For example, the following query will create a new user named Bob:

```graphql
mutation {
  createUser(name: "Bob") {
    id
    name
  }
}
```

And this query gets you the name and id of all registered users:

```graphql
query {
  users {
    name
    id
  }
}
```

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/addono/graphql-yoga-ts-example.svg?style=flat-square
[contributors-url]: https://github.com/addono/graphql-yoga-ts-example/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/addono/graphql-yoga-ts-example.svg?style=flat-square
[forks-url]: https://github.com/addono/graphql-yoga-ts-example/network/members
[stars-shield]: https://img.shields.io/github/stars/addono/graphql-yoga-ts-example.svg?style=flat-square
[stars-url]: https://github.com/addono/graphql-yoga-ts-example/stargazers
[issues-shield]: https://img.shields.io/github/issues/addono/graphql-yoga-ts-example.svg?style=flat-square
[issues-url]: https://github.com/addono/graphql-yoga-ts-example/issues
[license-shield]: https://img.shields.io/github/license/addono/graphql-yoga-ts-example.svg?style=flat-square
[license-url]: https://github.com/addono/graphql-yoga-ts-example/blob/master/LICENSE.txt
[test-pipeline-shield]: https://img.shields.io/github/workflow/status/Addono/graphql-yoga-ts-example/Test?style=flat-square&logo=github%20actions
[test-pipeline-url]: https://github.com/Addono/graphql-yoga-ts-example/actions?query=workflow%3ATest

