# Evoter
A simplistic voting app that fullfills the following User Stories:
<ol>
    <li> User can see a list of items he can vote on
    <li> These items must have a button that the user can click on to vote
    <li> After the user clicked a button, the user should see all the votes
</ol>

## Project setup

For this project one needs to have a running instance of the votingitems microservice in order to connect to the MongoDB of Evoter, but this container only contains the code for the frontend of the application.

For that please run the following command in your terminal that is universal for both microservice:

```bash
$ docker build --build-arg ARG=value -t image_name:latest
```
```bash
docker run -e ARG=value -p PORT:PORT -t image_name:latest
```
The first command will be used to build the container and the successive command runs the container on the selected PORT.