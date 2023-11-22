# Project Manager

A Pen created on CodePen.io. Original URL: [https://codepen.io/Nalini1998/pen/wvQLgwB/9f8832b56a5471a49eec43930e60b547](https://codepen.io/Nalini1998/pen/wvQLgwB/9f8832b56a5471a49eec43930e60b547).

# Project Manager

This project contains a web page for project management. It allows users to set a project name, author's name, link, and other details related to a project, and further save them. Whenever a new project is created, it auto-generates unique names for the project and the author.

## Technologies Used

This project uses the following technologies:
- HTML
- CSS
- JavaScript

## How to Use

To use this project, simply open the `index.html` file in your web browser. From there, you will be able to add new project names, set authors, link projects, and make selections. The page will auto-generate the unique names for the author and project. When saving a project name, it will store that information in the console, but it can be implemented to save that data onto a server-side API. As of now, the project only prints the page after execution.

Additionally, the page contains typing effects for the heading, and prints the deadline date.

### Changing the Deadline

In the JavaScript section, there is a `deadline` constant that can be modified to specify the desired deadline date and time.

### Saving Project Name

The `saveProjectName()` function can be amended to implement your own way of saving the project name. For example, you can use `localStorage`, a server-side API, or any data storage technique that suits your requirements.

## License

This project is licensed under the [MIT License](https://github.com/Nalini1998/Project-Manager/blob/main/LICENSE).

Author: Nalini Vo [GitHub](https://github.com/Nalini1998