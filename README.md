

# &#128222; Phone Book App


- [Application Description](#app-description)
- [Technologies and Libraries](#technologies-and-libraries-used)
- [How to Run](#how-to-run)


## Application Description <a name="app-description"></a>

This is a Full-Stack project developed as part of the practical test for the SOAP Health company. The Phone Book App application is a tool that allows users to manage their phone contacts effectively, where you can view, create, edit, and delete contacts.


## Technologies and Libraries <a name="technologies-and-libraries-used"></a>

- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" width="16"> [Typescript](https://www.typescriptlang.org/)

- <img src="https://reactjs.org/favicon.ico" width="16"> [React](https://reactjs.org/)
- <img src="https://avatars.githubusercontent.com/u/20658825?s=200&v=4" width="16"> [Styled Components](https://styled-components.com/)
- <img src="https://react-icons.github.io/react-icons/favicon.ico" width="16"> [React Icons](https://react-icons.github.io/react-icons/)


- <img src="https://fkhadra.github.io/react-toastify/img/favicon.ico" width="16"> [React Toastify](https://fkhadra.github.io/react-toastify/)

- <img src="https://nodejs.org/static/images/logo.svg" width="16"> [Node.js](https://nodejs.org/)
- <img src="https://miro.medium.com/v2/resize:fit:599/1*gV9AeJImpGRTlDs_560erw.png" width="16"> [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)

- <img src="https://miro.medium.com/v2/resize:fit:1400/1*3ZOwBIddHRkF7AkM2DjG1g.png" width="16"> [Axios](https://axios-http.com/)

- <img src="https://expressjs.com/images/favicon.png" width="16"> [Express](https://expressjs.com/)


Note: No database was used (only mocked data for Proof of Concept).

How to Run <a name="how-to-run"></a>

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

1. Clone this repository to your machine.
2. Navigate to the project folder.
3. In the project root, go to the back-end repository folder:

```
cd phone_book_back
```
4. Run the following command in the terminal to install dependencies:
```
npm install
```

4. Make sure port 5000 is available:

```
lsof -i :5000
```

If port 5000 is in use, the command will show information about the process using it. Otherwise, if the port is available, the command will not return any output.

4.1 If it's in use, use the following command to release the port:

```
fuser -k 5000/tcp
```

5. Start the back-end application with the command (keep the back-end application running):

```
npm run dev
```

6. In another terminal tab, in the project root, go to the front-end repository folder:

```
cd phone_book_front
```
7. Run the following command in the terminal to install dependencies:
```
npm install
```

8. Make sure port 3000 is available:

```
lsof -i :3000
```
If port 3000 is in use, the command will show information about the process using it. Otherwise, if the port is available, the command will not return any output.

8.1 If it's in use, use the following command to release the port:

```
fuser -k 3000/tcp
```

9. Start the front-end application with the command:

```
npm run start
```
The application will be available at [http://localhost:3000](http://localhost:3000) in your browser.
