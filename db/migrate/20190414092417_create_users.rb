class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.text :username
      t.text :password
      t.text :email
      t.boolean :enable_notifications
      t.text :firstname
      t.text :lastname
      t.text :token
      t.boolean :is_active
      t.boolean :is_staff

      t.timestamps
    end
  end
end
