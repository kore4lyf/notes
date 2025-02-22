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
