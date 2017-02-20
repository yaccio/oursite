FROM ruby:2.3

RUN apt-get update
RUN apt-get -y install nodejs

ADD . /wd
WORKDIR /wd
RUN bundle install

EXPOSE 4000
CMD bundle exec jekyll serve
