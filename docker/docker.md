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

## Testing Docker

[https://labs.play-with-docker.com/](https://labs.play-with-docker.com/) is a play ground to test run docker.

You can access your docker image on any computer that uses docker as long is the image has been pushed to dockerhub

```ls
docker pull codewithmosh/
```

## install ubuntu image on Docker

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

