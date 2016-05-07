.PHONY : all help build

all:
	echo "Hello, nothing to do by default"
	echo "Try 'make help'"

# target: help - Display callable targets.
help:
	egrep "^# target:" [Mm]akefile

# target: build - Bundle your application
build:
	webpack src/app.js build/app.bundle.js
