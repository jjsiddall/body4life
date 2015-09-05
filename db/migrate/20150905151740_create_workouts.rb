class CreateWorkouts < ActiveRecord::Migration
  def change
    create_table :workouts do |t|
      t.boolean :cardio
      t.string :title

      t.timestamps null: false
    end
  end
end
