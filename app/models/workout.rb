class Workout < ActiveRecord::Base

	# Adds patterns for lifting versus running (noncardio versus cardio)
	enum noncardio_pattern: ["daily", "weekly", "monthly", "quarterly", "bi-annually", "yearly"]
	enum cardio_pattern: ["daily", "weekly", "monthly", "quarterly", "bi-annually", "yearly"]

end
