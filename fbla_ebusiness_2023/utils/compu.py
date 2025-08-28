from random import randint
import uuid
import smtplib
import yagmail
import datetime

from email.message import EmailMessage

def rand_N_digit_int(n):
    range_start = 10**(n-1)
    range_end = (10**n)-1
    return randint(range_start, range_end)

def uuid4():
    return uuid.uuid4()

    
def send_email(gmail_usr, gmail_pswd, _to, _subject, _body):
    sent_from = gmail_usr
    to = _to

    subject = _subject
    body = _body

    email_text = """\
    From: %s
    To: %s
    Subject: %s

    %s
    """ % (sent_from, ", ".join(to), subject, body)

    try:
        smtp_server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        smtp_server.ehlo()
        smtp_server.login(gmail_usr, gmail_pswd)
        smtp_server.sendmail(sent_from, _to, email_text)
        smtp_server.close()
        print ("Email sent successfully!")
    except Exception as ex:
        print ("Something went wrong….",ex)

def available(s_x1, s_y1, s_x2, s_y2):

    x1 = datetime.datetime.strptime(s_x1, "%Y-%m-%d").date()
    y1 = datetime.datetime.strptime(s_y1, "%Y-%m-%d").date()
    x2 = s_x2
    y2 = s_y2

    #x1 = x1-datetime.timedelta(days=1)
    #x2 = x2-datetime.timedelta(days=1)
    y1 = y1-datetime.timedelta(days=1)
    y2 = y2-datetime.timedelta(days=1)


    if (y1<x2 and x1<x2) or (y1>y2 and x1>y2):
        return True
    else:
        return False





# send_email(
#     "elu779@student.fuhsd.org", 
#     "",
#     ["edwardlu.042@gmail.com"],
#     "EMail conf",
#     "Key = 12313"
# )

# import smtplib
# from email.mime.text import MIMEText
# def send_email2(subject, body, sender, recipients, password):
#     msg = MIMEText(body)
#     msg['Subject'] = subject
#     msg['From'] = sender
#     msg['To'] = ', '.join(recipients)
#     smtp_server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
#     smtp_server.login(sender, password)
#     smtp_server.sendmail(sender, recipients, msg.as_string())
#     smtp_server.quit()

# subject = "Email Subject"
# body = "This is the body of the text message"
# sender = "elu779@student.fuhsd.org"
# recipients = ["recipient1@gmail.com", "recipient2@gmail.com"]
# password = ""
# send_email2(subject, body, sender, recipients, password)
