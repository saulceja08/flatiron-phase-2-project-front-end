# GameEdit and GameDetail Components

These are two React components for editing and displaying game details in a web application. The components are part of a larger project for managing video game information.

## Important Links
Back-End Deploy: https://saulceja08-flatiron-phase-2-back-end.onrender.com
Front-End Deploy: https://64be028cb6caba1690982ea1--stirring-seahorse-f83623.netlify.app/
Back-End Repo: https://github.com/saulceja08/ flatiron-phase-2-project-back-end.git

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Description

The `GameEdit` component allows users to edit the details of a specific Call of Duty game, including its name, release date, supported consoles, and image. It communicates with a server API to fetch the game details and save the updated data back to the server.

The `GameDetail` component displays the details of a specific Call of Duty game. It fetches the game information from the server and shows the game's name, release date, and image.

## Installation

1. Clone the repository or copy the code for the `GameEdit` and `GameDetail` components into your project.

2. Make sure you have React and React Router installed in your project. If not, you can install them using npm:


3. Update the API endpoint in the components to match your server's URL. Currently, the components use `http://localhost:3000` as the base URL for API requests.

## Usage

1. Use the `GameEdit` component in your application to allow users to edit game details.

2. Use the `GameDetail` component to display the details of a specific game on a page.

3. The components use React Router for navigation, so make sure your application has set up the appropriate routes to render the components when needed.

## Dependencies

The components use the following external dependencies:

- React
- React Router

Make sure these dependencies are installed in your project.

## Contributing

Contributions are welcome! If you find any issues or want to improve the components, feel free to create pull requests or raise issues in the repository.

## License

This project is licensed under the [MIT License](LICENSE).
