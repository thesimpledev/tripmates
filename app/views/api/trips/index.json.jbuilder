
json.set! "trips" do
  @trips.each do |trip|
    json.set! trip.id do
      json.extract! trip, :id, :start_date, :end_date, :image_url, :title, :location, :creator_id
    end
  end
end

json.set! "users" do
  @trips.each do |trip|
    creator = trip.creator

    json.set! creator.id do
      json.extract! creator, :id, :first_name, :last_name, :email
    end
  end
end