FROM ruby:3.1.0-alpine

# syntax=docker/dockerfile:1

WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install

COPY . ./app
