.PHONY : all help build watch

all:
	echo "Hello, nothing to do by default"
	echo "Try 'make help'"

# target: help - Display callable targets.
help:
	egrep "^# target:" [Mm]akefile

# target: build - Bundle your application
build:
	rm -rf build && \
	node_modules/.bin/riot src/components src/components/components.bundle.js && \
	webpack && \
	node_modules/.bin/babel build -d build && \
	rm src/components/components.bundle.js

# target: watch - Run build on file change
watch:
	./bin/watch
