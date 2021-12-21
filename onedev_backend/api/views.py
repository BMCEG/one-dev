from django.core.mail import EmailMultiAlternatives
from rest_framework import views
from rest_framework.response import Response
from .models import Newsletter
import base64
from django.core.files.base import ContentFile
from .models import CV
from oauth2client.service_account import ServiceAccountCredentials
import gspread
import json
scopes = [
'https://www.googleapis.com/auth/spreadsheets',
'https://www.googleapis.com/auth/drive'
]
credentials = ServiceAccountCredentials.from_json_keyfile_name("landingForm.json", scopes) #access the json key you downloaded earlier 
file = gspread.authorize(credentials) # authenticate the JSON key with gspread
sheet = file.open("OneDev Data")  #open sheet
sheet = sheet.sheet1  #replace sheet_name with the name that corresponds to yours, e.g, it can be sheet1
from datetime import datetime

class Contact(views.APIView):
  def post(self, request, *args, **kwargs):
    try:
      data = request.data
      subject, from_email, to = 'One Dev Reservations', '1onedevelopments@gmail.com', '1onedevelopments@gmail.com'
      text_content = "data['message']"
      html_content = '<div style="padding: 40px 0 30px 0;background-color: #363636;color: white;text-align: center;">' \
                     ' <div style="padding-bottom: 20px;"></div>' \
                     '<h2 class="" style="font-family: bold_bw;">Contact Message</h2> </div>' \
                     '<div class="" style="padding: 40px 0; text-align: center;">' \
                     '<h3 class="email-headers" style="font-family: ub_medium !important; color: #ffffff; ' \
                     'margin-bottom: 20px; background: #363636; color: white; padding: 15px; width: 50%;' \
                     ' margin: auto;"> Name</h3> <h3>' + data['full_name'] + '</h3>' \
                                                                             '<h3 style="font-family: ub_medium !important; color: #ffffff; margin-bottom: 20px;' \
                                                                             ' background: #363636; color: white; padding: 15px; width: 50%; margin: auto;">' \
                                                                             'E-mail</h3> <h3>' + data[
                       'email'] + '</h3>' \
                                  '<h3 style="font-family: ub_medium !important; color: #ffffff; margin-bottom: 20px;' \
                                  ' background: #363636; color: white; padding: 15px; width: 50%; margin: auto;">' \
                                  'Mobile Number</h3> <h3>' + \
                     data['phone'] + '</h3>' \
                                     '<h3 style="font-family: ub_medium !important; color: #ffffff; margin-bottom: 20px;' \
                                     ' background: #363636; color: white; padding: 15px; width: 50%; margin: auto;"> Message</h3>' \
                                     '<p style="width: 50%; margin: auto; margin-top: 20px;' \
                                     ' padding: 20px; border: 1px solid #363636;">' + text_content + ' </p></div>' \
                                                                                                     '<div class="" style="text-align: center;"> <div class="meta__help">' \
                                                                                                     '</div> </div>'
      msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
      msg.attach_alternative(html_content, "text/html")
      msg.send()
      return Response({'error': False})
    except Exception as e:
      print ({'error': str(e)})
      return Response({'error': str(e)})

class LandingContact(views.APIView):
  def post(self, request, *args, **kwargs):
    try:
      data = request.data
      # subject, from_email, to = 'One Dev Reservations', '1onedevelopments@gmail.com', '1onedevelopments@gmail.com'
      # text_content = ""
      # html_content = '<div style="padding: 40px 0 30px 0;background-color: #363636;color: white;text-align: center;">' \
      #                ' <div style="padding-bottom: 20px;"></div>' \
      #                '<h2 class="" style="font-family: bold_bw;">Landing Contact Message</h2> </div>' \
      #                '<div class="" style="padding: 40px 0; text-align: center;">' \
      #                '<h3 class="email-headers" style="font-family: ub_medium !important; color: #ffffff; ' \
      #                'margin-bottom: 20px; background: #363636; color: white; padding: 15px; width: 50%;' \
      #                ' margin: auto;"> Name</h3> <h3>' + data['full_name'] + '</h3>' \
      #                                                                        '<h3 style="font-family: ub_medium !important; color: #ffffff; margin-bottom: 20px;' \
      #                                                                        ' background: #363636; color: white; padding: 15px; width: 50%; margin: auto;">' \
      #                                                                        'E-mail</h3> <h3>' + data[
      #                  'email'] + '</h3>' \
      #                             '<h3 style="font-family: ub_medium !important; color: #ffffff; margin-bottom: 20px;' \
      #                             ' background: #363636; color: white; padding: 15px; width: 50%; margin: auto;">' \
      #                             'Mobile Number</h3> <h3>' + \
      #                data['phone'] + '</h3>' \
      #                                '</div>' \
      #                                                                                                '<div class="" style="text-align: center;"> <div class="meta__help">' \
      #                                                                                                '</div> </div>'
      # msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
      # msg.attach_alternative(html_content, "text/html")
      # msg.send()
      # sheet.update_acell('A1', data['full_name'])
      # sheet.update_acell('B1', data['phone'])
      # sheet.update_acell('C1', data['email'])

      now = datetime.now()
      date = now.strftime("%d/%m/%Y")
      time = now.strftime("%H:%M:%S")

      insertRow = [data['full_name'], data['phone'], '', date, time, data['landing']]
      sheet.append_row(insertRow)
      return Response({'error': False})
    except Exception as e:
      print ({'error': str(e)})
      return Response({'error': str(e)})


class Reserve(views.APIView):
  def post(self, request, *args, **kwargs):
    data = request.data
    subject, from_email, to = 'One Dev Reservations', 'info@dari.life', 'onedevrealestate@gmail.com'
    text_content = ""
    html_content = '<div class="" style="padding: 40px 0 30px 0; ' \
                   'background-color: #363636; color: white; text-align: center;">' \
                   ' <div class="" style="padding-bottom: 20px;">' \
                   '</div>' \
                   '<h2 class="" style="font-family: bold_bw;">Reserve Unit</h2> ' \
                   '</div>' \
                   '<div class="" style="padding: 40px 0; text-align: center;">' \
                   '<h3 class="email-headers"' \
                   'style="font-family: ub_medium !important; color: #ffffff; margin-bottom: 20px;' \
                   ' background: #363636; color: white; padding: 15px; width: 50%; margin: auto;">' \
                   'Contact Information</h3>' \
                   '<div style="">' \
                   ' <div style="padding: 15px;">' \
                   '<label style="font-weight: bold; color: black;">Full Name:</label> <span style="color: black;">' + \
                   data['name'] + '</span>' \
                                  ' </div>' \
                                  '<div style="padding: 15px;">' \
                                  '<label style="font-weight: bold;  color: black;">E-mail:</label> <span style="color: black;">' + \
                   data['email'] + '</span>' \
                                   ' </div>' \
                                   '<div style="padding: 15px;">' \
                                   '<label style="font-weight: bold; color: black;">Mobile Number:</label> <span style="color: black;">' + \
                   data['phone'] + '</span>' \
                                   '</div>' \
                                   '</div>' \
                                   '</div>' \
                                   '<div class="" style="padding: 40px 0; text-align: center;">' \
                                   '<h3 class="email-headers"' \
                                   'style="font-family: ub_medium !important; color: #ffffff; margin-bottom: 20px;' \
                                   ' background: #363636; color: white; padding: 15px; width: 50%; margin: auto;">' \
                                   'Unit Information</h3>' \
                                   '<div style="">' \
                                   '<div style="padding: 15px;">' \
                                   '  <label style="font-weight: bold; color: black;">Project:</label> <span style="color: black;">' + \
                   data['project'] + '</span>' \
                                     '</div>' + \
                   '<div style="padding: 15px;">' \
                   '<label style="font-weight: bold; color: black;">Location:</label> <span style="color: black;">' + \
                   data['location'] + '</span>' \
                                      '</div>' \
                                      ' </div>' \
                                      '<div style="">' \
                                      '<div style="padding: 15px;">' \
                                      ' <label style="font-weight: bold; color:black">Payment Option:</label> <span style="color: black;">' + \
                   data['payment_options'] + '</span>' \
                                             ' </div>'

    msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
    msg.attach_alternative(html_content, "text/html")
    msg.send()
    return Response({'error': False})


class Newsletters(views.APIView):
  def post(self, request, *args, **kwargs):
    try:
      data = request.data
      obj, is_created = Newsletter.objects.get_or_create(email=data['email'])
      if is_created:
        subject, from_email, to = 'Customer Message', 'info@dari.life', 'onedevrealestate@gmail.com'
        text_content = ''
        html_content = '<div style="padding: 40px 0 30px 0;background-color: #363636;color: white;text-align: center;">' \
                       ' <div style="padding-bottom: 20px;"></div>' \
                       '<h2 class="" style="font-family: bold_bw;">You have new subscription : ' + data[
                         'email'] + '</h2> </div>'
        msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
        msg.attach_alternative(html_content, "text/html")
        msg.send()
      return Response({'error': False})
    except Exception as e:
      return Response({'error': str(e)})


class Career(views.APIView):
  def post(self, request, *args, **kwargs):
    try:
      data = request.data
      subject, from_email, to = 'Customer career', 'info@dari.life', 'onedevrealestate@gmail.com'
      text_content = data['bio']
      html_content = '<div style="padding: 40px 0 30px 0;background-color: #363636;color: white;text-align: center;">' \
                     ' <div style="padding-bottom: 20px;"></div>' \
                     '<h2 class="" style="font-family: bold_bw;">Career</h2> </div>' \
                     '<div class="" style="padding-top: 30px;text-align: center;">' \
                     '<h3 class="email-headers" style="font-family: ub_medium !important; color: #ffffff; ' \
                     'margin-bottom: 20px; background: #363636; color: white; padding: 15px; width: 50%;' \
                     ' margin: auto;"> Name</h3> <h3>' + data['full_name'] + '</h3>' \
                                                                             '<h3 style="font-family: ub_medium !important; color: #ffffff; margin-bottom: 20px;' \
                                                                             ' background: #363636; color: white; padding: 15px; width: 50%; margin: auto;">' \
                                                                             'E-mail</h3> <h3>' + data[
                       'email'] + '</h3>' \
                                  '<h3 style="font-family: ub_medium !important; color: #ffffff; margin-bottom: 20px;' \
                                  ' background: #363636; color: white; padding: 15px; width: 50%; margin: auto;">' \
                                  'Mobile Number</h3> <h3>' + \
                     data['phone'] + '</h3>' \
                                     '</div>' \
                                     '<div class="" style="text-align: center;">' \
                                     '<h3 class="email-headers" style="font-family: ub_medium !important; color: #ffffff; ' \
                                     'margin-bottom: 20px; background: #363636; color: white; padding: 15px; width: 50%;' \
                                     ' margin: auto;"> Career</h3> <h3>' + data['career'] + '</h3>' \
                                                                                            '<h3 style="font-family: ub_medium !important; color: #ffffff; margin-bottom: 20px;' \
                                                                                            ' background: #363636; color: white; padding: 15px; width: 50%; margin: auto;"> Bio</h3>' \
                                                                                            '<p style="width: 50%; margin: auto; margin-top: 20px;' \
                                                                                            ' padding: 20px; border: 1px solid #363636;">' + text_content + ' </p></div>' \
                                        '<div class="" style="text-align: center;"> <div class="meta__help">' \
                                      '</div> </div>'
      msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
      msg.attach_alternative(html_content, "text/html")
      cv = CV()
      cv.cv = file_converter(data['cv'])
      cv.save()
      msg.attach_file(cv.cv.path)
      msg.send()
      return Response({'error': False})
    except Exception as e:
      return Response({'error': str(e)})


def file_converter(file):
  file_form, file_str = file.split(';base64,')
  ext = file_form.split('/')[-1]
  decoded = ContentFile(base64.b64decode(file_str), name='temp.' + ext)
  return decoded
