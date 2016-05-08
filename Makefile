.PHONY : all help build watch

all:
	echo "Hello, nothing to do by default"
	echo "Try 'make help'"

# target: help - Display callable targets.
help:
	egrep "^# target:" [Mm]akefile

# target: build - Bundle your application
build:
	npm run build && \
	webpack src/app.js build/app.bundle.js && \
	webpack src/components/components.js build/components.bundle.js && \
	node_modules/.bin/babel build -d build

# target: watch - Run build on file change
watch:
	./bin/watch
