from django.urls import path, include
from .views import Contact,Reserve, Newsletters,Career, LandingContact

urlpatterns = [
  path('send-message/', Contact.as_view(), name='contact_us'),
  path('send-landing-message/', LandingContact.as_view(), name='landing_contact_us'),
  path('send-reserve/', Reserve.as_view(), name='Reserve'),
  path('newsletters/', Newsletters.as_view(), name='Newsletter'),
  path('career/', Career.as_view(), name='Career'),
]
