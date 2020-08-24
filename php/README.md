# bigcanvas PHP

This is a Docker-driven implementation of [a tutorial by TechLead on YouTube](https://www.youtube.com/watch?v=t1aXuJkmTg8).

## Setup

### Prerequisites

* A command line
* Docker Compose

### Steps

1. Clone this repository
2. In a command line, navigate to this project's directory within your cloned git repository's location:
    * Ex: `cd /bigcanvas/php`
3. Type `docker-compose up`
4. Visit `http://localhost` in a web browser

## Current Issue

Currently, this needs a Docker container with both PHP and Python. PHP is needed to run the application, and Python is needed to run a script to interface with Firebase.

The current config file does not build and install a Docker container with Python.
