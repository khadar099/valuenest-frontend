# ValuenestFrontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```


---

### ✅ **Frontend - `valuenest-frontend` (Angular)**

```markdown
# ValueNest Frontend

This is the Angular frontend for **ValueNest**, an online shopping platform. It connects with the Spring Boot backend to offer a smooth user experience for browsing and purchasing products.

## 🌐 Deployed URL

http://13.127.72.112:4200


## 🚀 Tech Stack

- Angular 17+
- TypeScript
- HTML / CSS
- Bootstrap / Angular Material (if used)
- Docker (nginx-based deployment)

## 📁 Project Structure

src/
├── app/
│ ├── components/
│ │ ├── login/
│ │ ├── register/
│ │ ├── products/
│ ├── services/
│ ├── models/
│ └── app.module.ts
├── assets/
├── environments/
├── index.html
└── main.ts


## 🔐 Features

- User Registration and Login (via username or phone)
- Product listing
- Secure API integration with Spring Boot backend
- Responsive UI

## 🐳 Docker Deployment

Build the Angular app and serve with nginx:

```bash
ng build --configuration production
docker build -t valuenest-frontend .
docker run -p 4200:80 valuenest-frontend
Make sure the Dockerfile copies the /dist/valuenest-frontend directory into nginx /usr/share/nginx/html.

🔗 Backend API Endpoint
All HTTP requests are made to:

http://13.127.72.112:8282/api/

Make sure CORS is enabled in the backend for Angular access.

📫 Contact
Raise an issue or contact the developer for feature requests or bug reports.





Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
