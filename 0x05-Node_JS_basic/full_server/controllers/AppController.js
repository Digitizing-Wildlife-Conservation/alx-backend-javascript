/**
 * Contains the miscellaneous route handlers.
 * @author Moses Muchai <https://github.com/Digitizing-Wildlife-Conservation>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
