class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'

  def contact_form(contact)
    @contact = contact
    @specialtext = `Hi, #{contact.name} wants to talk to you.
    mail(to: "jaxonutah@gmail.com", subject: "Someone wants to connect with you")
  end
end
