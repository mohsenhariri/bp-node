PATH := ./node_modules/.bin:$(PATH)
.PHONY: all dev clean dev manifest server config
include .env.dev
include .env.prod
export


ifeq ($(SSL), true)
PROTOCOL := HTTPS
else
PROTOCOL := HTTP
endif
URL := $(PROTOCOL)://$(HOST):$(PORT)


cert:
		if [ ! -d "./certs" ]; then mkdir ./certs; fi
		if [ -f "./certs/openssl.conf" ] ; then \
		openssl req -x509 -new -config ./certs/openssl.conf -out ./certs/cert.pem -keyout ./certs/key.pem ;  else \
		openssl req -x509 -nodes -newkey rsa:4096 -out ./certs/cert.pem -keyout ./certs/key.pem -sha256 -days 365 ;fi


config-docker-up:
		docker compose -p $(PROJECT) -f ./config/compose.yaml up -d

config-docker-down:
		docker compose -p $(PROJECT) -f ./config/compose.yaml down

clean:
		rm -rf $(DIST)/*

server:
		node ./app.js

dev:
		nodemon


test-pach:
		echo $(PATH)

install-dep-prod:
		npm ci

format:
		prettier --write .

test-node:
		node --test

