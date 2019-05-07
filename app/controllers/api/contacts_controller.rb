class Api::ContactsController < ApplicationController
  def index
    render json: Contact.all
  end

  def create
    contact = Contact.new(contact_params)

    if contact.save
      render json: contact
    else
      render json: contact.errors, status: 422
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :subject, :body)
  end
end
