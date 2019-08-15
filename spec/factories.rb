FactoryBot.define do
  factory :user do
    first_name { "Drew" }
    last_name { "Rodrigues" }
    sequence(:email) { |i| "example#{i}@tripmates.io" }
    password { "password" }
  end

  factory :trip do
    start_date { Date.today }
    end_date { Date.today + 1 }
    title { "Supai" }
    location { "Arizona" }
    spaces { 5 }
    privacy { "visible" }
    details { "Cool details go here" }

    association :creator, factory: :user, strategy: :build
  end

  factory(:attendee) do
    trip
    user
  end

  factory :message do
    body { "Let's do the thing!" }

    trip
    user
  end
end
