## Environment Setup

To run the development environment, use the following command:

```bash
npm install

npm run dev
```

## Tests

To run unit tests, use the following command:

```bash
npm run test:unit
```

## E2E

To run end-to-end tests, use the following command:

```bash
npm run test:e2e
```

## Usage

- User opens the webpage and should be required to logging if is not already authenticated.

- After logging into the organization account the user sees a page
  that shows an example post and an input to fill an user email to see his/her posts.

- A correct input should transition to the page showing the posts made by the user.

- Additionally you can add new posts by click the new post button which should
  prompt a modal to do so.
  Want to see other users posts? Click back and fill a new user's email.

## Approach

- This project uses `@auth0/auth0-vue` to handle the Auth0 authentication process.
- API calls are performed using `axios`.
- Navigation between pages and views is managed using `Vue Router`, and the last entered email is stored using `localStorage`.
- Uses Transitions for animations between pages and states.
- Teleport feature for toast and modals.

## Project Structure

- Components are divided into two categories: `Material` (reusable) and non-reusable(separate folders).
- Pages are groups of components that make up a full page, with only two pages in this project: `LoginPage` and `MainPage`.

- Services and models folder for retrival of data.

- Individual Tests can be found inside each component's folder with test data inside mocks folder.

## Considerations

- Tailwind was considered though native css and vue transitions and teleport features
  we're something I want to use a bit more.
- Vuex or Pinia was not used although a potencial use case would be
  to store the users information and display it the users post page(this wouldn't be enough on refresh).
- Navigation auth guards would have been nice to implement to avoid some redirects.
