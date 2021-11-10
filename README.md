# Rails-React-Hello-World-Project

> This project is a demonstration of using react-rails gem to build React components as a part of Rails JavaScript and serve it in a component, react_component, to be used in a regular ERB file.

## Project Requirements
- Create a new Rails app called 'hello-rails-react'.
Initialize your project with Git.
- Set up your project with webpacker the react-rails gems as describe in the previous lesson's tutorial.
- Make sure that your project has a Postgres database set up.
- Create a table for storing your messages and create 5 different greetings.
- Create an API endpoint that selects a random greeting from your table (you will need a controller with an action and Rails route).
- Create a static view that will be the root of your app.
- Create the App component with react-router and render it in your static view.
- Create the Greeting component that will display a greeting. Set it up as a route in your App component.
- Create a store, an action and a reducer that will connect to you API endpont to get the random greeting.
- Display the random greeting in your Greeting component.

## Built With

- Ruby v2.7.0
- Ruby on Rails 6.0.3
- React
- Redux
- rubocop

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Ruby: 2.7.0
Rails: 6.0.3

**Setup**

- Clone this repository with `https://github.com/enkog/Rails-React-Hello-World-Project.git` using your terminal or command line.<br>
- Change to the project directory by entering `cd Rails-React-Hello-World-Project` in the terminal<br>
- Next run `bundle install` to install the necessary dependencies<br>
- run `rails db:create`
- Run `rails db:migrate` to setup your local database.<br>
- Run `rails db:seed` to get seeded data for project.<br>
- Run `sudo service postgresql start` to start the database service.<br>
- Finally run `rails s` to start the application.<br>

### Usage

Start server with:

```
    rails s
```

Open `http://localhost:3000/` in your browser.

## Author

👤 **Oguadinma Nkiruka Ngozika**

-   Github: [@enkog](https://github.com/enkog)
-   Linkedin: [@enkog](https://www.linkedin.com/in/enkog/)
-   Twitter: [@enkodes](https://twitter.com/enkodes)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

> Microverse

## 📝 License
