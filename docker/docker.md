# Docker

## Table

- What is Docker?
- Virtual Machines vs Containers
- Architecture of Docker
- Installing Docker
- Development Workflow

## What is Docker?

Docker is a platform for building, running and shipping applications (in a consistent manner) such that when you app is run in other machines it can function the same way.

With Docker we can easily package our application with every thing it needs and even run it any where (e.g. Node 14, Mango 4, app). All you apps specific dependencies (and version) will be included in the apps package.
If someone joins your team they don't have to setup a new machine or install dependencies mannually or configure anything to be able to run the app.
All they Have to do is to run the command:

```sh
docker-compose up
```

Which will automatically download all the dependencies needed to run the application, inside an environment called **Containers**. For example one container can be running Node 14 (APP 1), while another container might be running Node 9 (APP 2).

One can decide to remove an app and all it's dependencies using the following command:

```sh
docker-compose down --rmi all
```

in summary, docker helps us to consitently build, run and ship our applications.

## Virtual Machines VS Containers

A container is an isolated environment for running applications.

A virtual machine is an abstraction of a machine(A physical machine). To run a vitual machine one needs a Hypervisor (e.g. VirtualBox, VMware, Hyper-v [windows only]). One benefit of using a virtual machine as a developer is that, it allows one to run applications in isolation.

### Problems with a using a virtual machine

- Each VM nees a full blown OS
- Slow to start
- Resource intensive
- There is usually a limit to the number of VMs we can run on an hardward depending on the hardwares resource such as RAM and Storage.

### Benefits of using Containers

- Allow running multiple apps in a isolation
- Are lightweight
- Use OS of the host
- Start quickly
- Needs less hardware resources

## Docker Architechture

Docker uses a client server architecure (It has a client component that talks to the server component using a RestAPI).
The server also called the **Docker Engine** sits at the background and takes care of building and running docker containers.
Technically a container is just a process running on your computer.
All container share the kernnel of the host, which is why it's light weight.

## Development Workflow

A Docker file is a plain text file, that includes instruction that Docker uses to dockerize an application into an image.

The image usually contain everything the application needs to run, for example:

- A cut-down OS
- A runtime environment (e.g. Node, Python)
- Application files
- Third-party Libraries
- Environment variables
- e.t.c

Once we have an Image, we tell Docker to start an image using the container.
A container is just a process (that has it's own file system, which is provided by the image).

Once we have an image, we can push it to a Docker registery (e.g DockerHub) (Docker to DockerHub is like Git to GitHub) (DockerHub is a storage for docker images that anyone can use).
Once our image is on DockerHub, we can easily get it to run on any machine that runs docker.

## Example: Hello Docker

Run the command below to confirm, whether docker is installed or not.

```sh
docker version
```

Assuming you have an app.
If you don't

Create a new file called hello-docker

```sh
mkdir hello-docker
cd hello-docker
```

create an new file called app.js and write a javaScript that logs "Hello, Docker!"

```sh
echo "console.log('Hello, Docker!')" > app.js
```

Create a Docker file

```sh
FROM node:alpine
COPY . /app
WORKDIR /app
CMD node /app.js
```

FROM node:ubuntu
node is built on top distribution on linux, it best to specify, for example if we intend to use our docker Image on alpine (another linux distribution) we can include FROM node:alpine.

COPY . /app
Copies everything in the current directory into an app directory

WORKDIR /app
Makes /app the current directory

CMD node app.js
it runs the command "node app.js"

To build the docker file

```sh
docker build -t hello-docker .
```

syntax:
docker build -t dockerImageName directoryToBeDockerized

-t - means tag
which is the name that will be used to identify the docker image.

Docker stores its image in a safe place on the device.
To view docker images on your computer, use the command below.

```sh
docker image ls
```

To Run a docker image

```sh
docker run hello-docker
```

### View running docker (Containers) processes

```sh
docker ps -a
```

### To start a container and Interact with it

```sh
docker run -it codewithmosh/hello-world
```

-it means interactive or Interact

## Testing Docker

[https://labs.play-with-docker.com/](https://labs.play-with-docker.com/) is a play ground to test run docker.

You can access your docker image on any computer that uses docker as long is the image has been pushed to dockerhub

```ls
docker pull codewithmosh/
```

## Docker Hub

[https://hub.docker.com](https://hub.docker.com)

## Install ubuntu image on Docker

Downloads ubuntu

```sh
docker pull ubuntu
```

OR

```sh
docker run ubuntu
```

The command will download ubuntu if it's unable to find it locally. After a successfull download it will create a container from the image

To interact and iteract with the  

## Creating a docker image

Creating a docker image requires creating a file called `Dockerfile`, which include some docker commands, that specifies how to build an Image for your application.

For example:

```Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
ENV NODE_ENV=production
CMD node app.js
```

Example 2:

```Dockerfile
FROM node:latest
WORKDIR /fe
COPY package*.json ./
COPY . ./
RUN npm cli
CMD ["npm", "start"]
```

### Common Command Used Dockerfile

- **FROM**
it specifies the base image to use for the new image

syntax

```Dockerfile
FROM image[:tag] [AS name]
```

```Dockerfile
FROM ubuntu:20.4
```

- **WORKDIR**
Sets the working dir for the following (next) instructions.

syntax

```Dockerfile
WORKDIR /path/to/workdir
```

- **COPY**

Copies the files or directories from the build context to the image.

Syntax

```Dockerfile
COPY [--chown=<user>:<group>] <src>... <dest>
```

Sample

```Dockerfile
COPY . /app
```

- **RUN**

Executes command in the shell during image build.

Syntax

```Dockerfile
RUN <command>
```

Sample

```Dockerfile
Run npm run dev
```

- **EXPOSE**

Informs docker that the container will listen on a/some specified network port(s).

Syntax

```Dockerfile
EXPOSE <port> [<port>/<protocol>...]
```

Sample

```Dockerfile
EXPOSE 3000
```

- **ENV**
Sets environment variables during the build process

Syntax

```Dockerfile
ENV KEY=VALUE
```

Sample

```Dockerfile
ENV NODE_ENV=production
```

- **ARG**

Defines the build time variables

Syntax

```Dockerfile
ARG <name> [=<default value>]
```

Sample

```Dockerfile
ARG NODE_VERSION=20
```

- **VOLUME**

Creates a mount point for externally mounted volumes, essentially specifing a location inside your container, where you can connect your storage

Syntax

```Dockerfile
VOLUME ["/data"]
```

Sample

```Dockerfile
VOLUME /myvol
```

- **CMD**

It provides default command to execute when the container starts.

```Dockerfile
CMD ["npm", "run", "dev"]
```

Sample

```Dockerfile
CMD npm run dev
```

- **ENTRYPOINT**
Specifies the default executable to be ran, when the container starts

```Dockerfile
CMD ["executable", "param1", "param2"]
```

Sample

```Dockerfile
CMD executable param1 param2
```

> Is Entrypoint is similar to  CMD, No. Both CMD and Entrypoints are instruction in Docker, for defining the default command to run, when a container starts.
  > The defference is that CMD is much more flexible and can be overridden when running the container, while Entrypoint defines the main command that cannont be easily overridden.
  > CMD - Default executable
  > CMD - Fixed starting point

#### ENTRYPOINT VS CMD

Both ENTRYPOINT and CMD are used to define how a container should run, but they serve distinct purposes and behave differently when combined.

##### ENTRYPOINT

ENTRYPOINT specifies the executabe that the container will run when it starts.

It defines the default command or appliaation for the container, and it's always executed. Arguments passed to the container (via docker run) are appended to the ENTRYPOINT.

FORMAT:
Exec Form (Prefered):
ENTRYPOINT ["executable", "param1", "param2"]
e.g. ENTRYPOINT ["nginx", "-g", "daemon off;"]

It can be overidden at runtime with `docker run --entrypoint`.

USE CASE: Best for defining a container's primary purpose (e.g. a web server, a script runner)

##### CMD

CMD provides default arguments or behavior for the contianer. It can be overridden easily with `docker run`

If ENTRYPOINT is set, CMD provides the default arguments to give to it, if no ENTRYPOINT is defined, CMD specifies the executable and its arguments.

FORMAT:
EXEC FORM: CMD ["executable", "param1", "param2"]
e.g. CMD ["python", "app.py"]

SHELL FORM: CMD command param1 param2
e.g. CMD echo "Hello world"

As Default Parameters: CMD ["param1", "param2"] (when used with ENTRYPOINT)

Example:

ENTRYPOINT for Fixed Behavior
ENTRYPOINT sets the executable and CMD provides it default argument

```Dockerfile
ENTRYPOINT ["echo", "Hello"]
CMD ["World"]
```

Running `docker run myImage`
output: Hello World

Running `docker run myImage Everyone`
output: Hello Everyone (CMD is overridden)

Example:

Use CMD for Felxibility

```Dockerfile
CMD ["nginx", "-g", "daemon off;"]
```

Running `docker run myImage`
Starts Nginx
Running `docker run myImage bash`
Starts Bash

##### Best Practice

Use ENTRYPOINT to define the container's core purpose(e.g. a specific app or script)

Use CMD to provide default arguments that can be customized at runtime

Prefer exec form ["command", "arg1d"] over chell form for both, as it avoids shell overhead and signal handling issues.

## Practical

### Hello Docker

Create a new file called hello-docker

```sh
mkdir hello-docker
cd hello-docker
```

create an new file called app.js and write a javaScript that logs "Hello, Docker!"

```sh
echo "console.log('Hello, Docker!')" > hello.js
```

Create a Docker file

```sh
FROM node:20-alpine
WORKDIR /app
COPY . .
CMD node hello.js
```

**To build**:

```Dockerfile
docker buiid -t hello-docker .
```

-t stands for tag.
Tag is option if it is not provided, it defaults to the latest path.

To view images or the newly created images:

```sh
docker image ls
```

To Run

```sh
docker run hello-docker
```

output: Hello, Docker!

To run docker in shell mode

```sh
docker run -it hello-docker sh
```

then run

```sh
node hello.js
```

## Dockerizing React Apps

```sh
npm create vite@latest my-react-docker
cd my-react-docker
```

Create a Dockerfile

```Dockerfile
FROM node:20-alpine

RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app

COPY pakage*.json .

COPY . .

USER root

RUN chown -R app:app .

USER app

Run npm install

COPY . .

EXPOSE 5173

CMD npm run dev
```

Explanation:

1. FROM node:20-alpine
   First we need to set the base image

2. Run addgroup app && adduser -S -G app app
   Here we set permission to protect our app from bad actors or users trying to exploit it.

   -S is used to create a system user
   -G is used to add the user to a group

   This is done to prevent running the app as a root user. If the app is run as a root user, any vulnerability in the app can be exploited to gain access to the host system.

   It's a good practice to run the app as a non-root user.

3. USER app
   Set the User to app

4. WORKDIR /app
   Set working directory to app

5. COPY package*.json .
   It copies the package.json and package-lock.json to the image.
   This is done before copying the rest of the files to take advantage of Docker's cache.
   If the package.json and package-lock.json files haven't changed, Docker will use the cached dependencies

6. USER root
   Sometimes the ownership of the files in the working directory is changed to roo and thus the app can't access the files and throw an error -> EACCESS: permission denied.
   To avoid this, change the ownership of the files to the root user

7. RUN chown -R app:app .
   Change the ownership of the /app directory to the app user
   `chown -R <user>:<group> <directory>`
   chown command changes the user and/or group ownership of a given file

8. USER app
   Change the user back to app

9. Run npm install
10. COPY . .
11. EXPOSE 5173
12. CMD npm run dev

### .dockerignore

To prevent docker from coping certain files or folder, create a file called `.dockerignore`

```.dockerignore
node_modules/
```

### To build

```sh
docker build -t my-react-docker .
```

### To run

```sh
docker run my-react-docker
```

When you run the image, you would realise that server is runing as expected on [https://localhost:5173](https://localhost:5173), but when you open the url on your computer you would realise that you are unable to access URL, this is because of the docker file is running in an isolate environment.
The port is not accessible from outside the container.

To make our host aware of the server we need to do something called **port mapping**.
Port mapping is a concept in docker that allows us to map ports between a docker container and a host machine.

```sh
docker run -p 5173:5173 react-docker
```

The code above will map the container port to our host machine's port.

But you'd have to update your package.json file to ensure that the add `--host` to `vite` command, so that vite can expose the port.

i.e the inital script

```json
scripts: {
  "dev": "vite
}
```

Will become

```json
scripts: {
  "dev": "vite --host"
}
```

Docker automatically updates the image with the new changes, so when you run the docker image the changes will show up.

## More Commands

### View active containers

```sh
docker ps
```

### View docker containers and images

```sh
docker ps -a
```

### Stop a container

```sh
docker stop <uid>|<name>
```

you can use the first 3 characters of the UID, if after runing the command you get the same character as a response.

### Remove all stopped or inactive containers

```sh
docker container prune
```

### Remove a specific container by Name or Id

```sh
docker rm <uid(first 3 characters)>
```

By default you can't stop a running container but you can forceful remove a container with having to stop the running contain with the `--flag`.

```sh
docker rm <uid(first 3 characters)> --force
```

### Auto update image files

Assuming you created an Image for your app, and you'd like to auto update the changes you make in you locally files while running the docker image.

```sh
docker run -p 5173:5173 -v "${pwd}:/app" -v /app/node_modules react-docker
```

`"${pwd}:/app"`
The react-docker folder on the host, was copied to the /app folder in the image, which make them similar or identical.
So when you map both path while running the image, host chages will be effected in the running container too.

-v stands for volume

-v /app/node_modules - This is done so that any changes in the local host dependencies will trigger a reinstall  when starting the container.

### Publishing your image

Ensure you are logged in

```sh
docker login -u kore4lyf
```

Then enter your password.

To publish

```sh
docker tag react-docker kore4lyf/react-docker
docker push kore4lyf/react-docker
```

To run or use image on a new computer

```sh
docker run kore4lyf/react-docker
// OR
docker use kore4lyf/react-docker
```

## Docker Compose

Docker compose is a tool that allows us to **define** and **manage** multi-container docker applications.
It uses a YAML file to configure the services, networks and volumes, enabling us to run and scale the entire applications with a single command.
With docker compose we don't have to run 10 commands independently/seperatly to run 10 containers.

```sh
docker compose up
```

The YAML file can be created manually, but docker also provides us with a CLI that can generate the file `docker init`.

### Setting up docker compose

Create a new folder or a new project(Directory)
Enter the new directory/folder
then run `docker init`

If you are using docker on windows desktop you'd automatically have access to docker compose, but

If you are running apline or ubuntu, init is not a docker command, it's related to docker compose.
To install docker compose.

```sh
apk add docker-cli-compose
# OR
apt install docker-cli-compose
```

To test

```sh
docker compose version
```

Then try running

```sh
# Windows
docker init
# OR
# Linux
docker compose init
```

when you run the `docker init` command, you will be asked some question so that docker compose can generate the proper files and instruction for you, based on your preference.

4 files would be created for you:

1. .dockerignore
2. compose.yaml
3. Dockerfile
4. README.Docker.md

**.dockerignore**:

```.dockerignore
# Include any files or directories that you don't want to be copied to your
# container here (e.g., local build artifacts, temporary files, etc.).
#
# For more help, visit the .dockerignore file reference guide at
# https://docs.docker.com/go/build-context-dockerignore/

**/.classpath
**/.dockerignore
**/.env
**/.git
**/.gitignore
**/.project
**/.settings
**/.toolstarget
**/.vs
**/.vscode
**/.next
**/.cache
**/*.*proj.user
**/*.dbmdl
**/*.jfm
**/charts
**/docker-compose*
**/compose.y*ml
**/Dockerfile*
**/node_modules
**/npm-debug.log
**/obj
**/secrets.dev.yaml
**/values.dev.yaml
**/build
**/dist
LICENSE
README.md
```

**compose.yaml**:

```yaml
services:
  server:
    build:
      context: .
    environment:
      NODE_ENV: production
    ports:
      - 5173:5173
    volume:
      - .:/app
      - /app/node_modules
```

**Dockerfile**:
You can replace the content of the docker file with the one we use in the React project.

```Dockerfile
FROM node:20-alpine

RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app

COPY pakage*.json .

COPY . .

USER root

RUN chown -R app:app .

USER app

Run npm install

COPY . .

EXPOSE 5173

CMD npm run dev
```

To run or create your docker image, run the command below

```sh
docker compose up
```

If you are running the command on windows and you get and error message saying permission denied.
Close command prompt or VScode and open them again as an administrator.

If you are running on linux you can use the command `sudo docker compose up`

So far What we done is great, the changes in a local directory update in the image, when ever it detects it, and every time we try to run our container and it detects some changes in the `.node_module` it automatically updates it's own `.node_module`.
But this isn't that optimal for DX, every time we make a change to the package file we have to rerun the container.
It don't make changes automatically, when a change is made to the package file (in the host machine) or when we think it needs to rebuild the image.

### Docker compose watch

`docker compose watch` listens to changes and

- Rebuild our app
- Re-running the container

it's a feature that automatically update our container as we work.

With docker compose watch, we can do 3 main things

1. **Sync** - Moves changed files from the host machine to the right directory in the container (making sure that everything stays uptodate).
2. **Rebuild** - The rebuild process **starts** with the creation of new container images and then it updates the services.
This is beneficial when rolling out changes to applications in production. Garanteeing the most recent version of the code is in operation.
3. **Sync-restart** - This merges the sync and restart processes, it begins by syncing modifications from the host files system to the container paths, then restarting the container.
This is important during the development and testing of applications.

## Docker on a fullstack app (MERN)

structure:
|- app/
  |- compose.yaml
  |
  |- frontend/
  |  |- Dockerfile
  |  |- other files
  |
  |- backend/
     |- Dockerfile
     |- other files

**compose.yaml**:
The yaml runs 3 different services.

1. web
2. api
3. db

```yaml
version "3.8"

services:
  web:

  api:

  db:

volumes:
  anime:

```

`version "3.8"` - First we specified the version of docker compose you are using

`services:` - Define the services/containers to be run

`web:` - Any name can be use other than web, but using web is a standard naming convention for frontend.

`api` - service for the the api container

`db` -Service for the db container

`volumes:` We define the volumes to be used by the services

`anime:` - is a new volume name anime

`depends_on:` - this command is use to specify that a services depends on another service 