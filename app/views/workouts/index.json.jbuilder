json.array!(@workouts) do |workout|
  json.extract! workout, :id, :cardio, :title
  json.url workout_url(workout, format: :json)
end
