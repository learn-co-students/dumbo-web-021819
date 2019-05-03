class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :title, :bio, :display_name
end
