class Trips < ActiveRecord::Migration[6.1]
  create_table :trips do |t|
    t.belongs_to :user
    t.belongs_to :place
  end
end
