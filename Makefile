# https://www.gnu.org/software/make/manual/make.html
PATH := ./node_modules/.bin:$(PATH)
.PHONY: all dev clean dev manifest server config

include .env.dev
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
		docker compose -p $(PROJECT) --env-file ./config/.env.docker -f ./config/compose.yaml up -d

config-docker-down:
		docker compose -p $(PROJECT) -f ./config/compose.yaml down

config-docker-build:
		docker build -t mh/template-node:2.0.0 .
		
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

g-commit: format type pylint
		git commit -m "$(filter-out $@,$(MAKECMDGOALS))"

g-log:
		git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit


%: # https://www.gnu.org/software/make/manual/make.html#Automatic-Variables 
		@: