class Places < ActiveRecord::Migration[6.1]
  def change
    create_table :places do |t|
      t.string :categories
      t.string :image_url
      t.string :location
      t.string :name
      t.string :price
      t.integer :rating
      t.integer :review_count
      t.string :url

      t.timestamps
    end
  end
end