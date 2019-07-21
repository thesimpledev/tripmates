source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.5.1"

gem "aws-sdk-s3", require: false
gem "bcrypt", "~> 3.1.7"
gem "bootsnap", ">= 1.1.0", require: false
gem "coffee-rails", "~> 4.2"
gem "faker"
gem "jbuilder", "~> 2.5"
gem "jquery-rails"
gem "pg", ">= 0.18", "< 2.0"
gem "puma", "~> 3.11"
gem "rails", "~> 5.2.2"
gem "sass-rails", "~> 5.0"
gem "uglifier", ">= 1.3.0"

group :development, :test do
  gem "byebug", platforms: %i(mri mingw x64_mingw)
  gem "rspec-rails"
  gem "rubocop", "~> 0.67.2", require: false
  gem "simplecov"
end

group :development do
  gem "annotate"
  gem "guard-rspec", "4.2.9"
  gem "guard-livereload", "~>2.5", require: false
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "pry-rails"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "spring"
  gem "web-console", ">= 3.3.0"
end

group :test do
  gem "shoulda-matchers"
  gem "rails-controller-testing"
  gem "factory_bot_rails"
  gem "timecop", "~> 0.8.1"
end

gem "tzinfo-data", platforms: %i(mingw mswin x64_mingw jruby)
