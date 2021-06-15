# Url Shortener 

This project is the implementation of the cloud computing assignment.

## Requirements
A website with the following functionality needs to be developed

### General Requirements
- [x] an arbitrary URL can be entered, the website will return a shortened URL
- [x] when the shortened URL is entered into the browser adressbar, a redirection happens
- [x] arbitrary URLs may be entered, the website returns unique shortened URLs
- [x] an invalid URL has to lead to an error
- [x] the website should return the shortened url in the following format: `http://{Servername/Localhost}/{URL-path}` the Path may only be 5 characters long.

### Framework conditions
- [x] the programming language is subject to the preferences of the implementer
- [x] the code must exist as a Git repository
- [x] a README.md has to be present, which guides users in setting up the shortener
- [x] the website should be started as a docker container    

### Testing requirements
These requirements need to be tested.
- [x] An invalid URL must produce an error
- [x] 1000 arbitary URLs musst produce 1000 unique shortened URLs
- [x] The URL-Path of the shortened URL must not be longer than five characters
- [x] at least two other unit tests have to be present
- [x] the README.md file describes how to execute the tests

## Background
An URL shortener is a service which shortens an arbitary URL. 
This is used to provide short and unproblematic aliases (easier to remember, quicker to enter, ...) for bulky, large and problematic URLs (containing special characters). Such URLs are mainly found on websites that operate with database variables.

## Usage and commands
- [x] Download the source code
- [x] Run deno run --allow-net --allow-read --allow-env mod.ts start the service locally or run docker build -t app . && docker run -it --init -p 3000:3000 app to start the docker container 

## Tests
- [x] Run deno test --allow-read --allow-write to start the unit tests
