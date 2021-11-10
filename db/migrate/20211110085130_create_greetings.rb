# frozen_string_literal: true

class CreateGreetings < ActiveRecord::Migration[6.0]
  def change
    create_table :greetings do |t|
      t.string :message

      t.timestamps
    end
  end
end
