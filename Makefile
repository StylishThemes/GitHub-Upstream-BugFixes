all: build

test: lint

build: node_modules clean
# avoid 'stream/web is an experimental feature' warning
	node --no-warnings tools/build.js

deps: node_modules

node_modules: package-lock.json
	npm install --no-save
	@touch node_modules

lint: node_modules
	npx stylelint --color *.styl

authors:
	bash tools/authors.sh

clean: node_modules
	node tools/fix-perfectionist.js

install: node_modules
	node tools/install.js

update: node_modules
	npx updates -cu
	npm install
	@touch node_modules package-lock.json

.PHONY: all test build deps lint authors clean install update
