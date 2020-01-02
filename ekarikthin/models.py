from django.db import models
from django.core.validators import RegexValidator

class events(models.Model):
    eventCode = models.CharField(max_length=3, primary_key=True)  # event code is of the form C01, S01, T01 etc.
    title = models.CharField(max_length=30, blank=False )
    noOfParticipants = models.IntegerField(default=0, blank=False)
    organizers = models.CharField(max_length=30, blank=False)
    volunteers = models.CharField(max_length=30)
    regFee = models.IntegerField(default=0)
    prizes = models.CharField(max_length=16) # in the form 1st,2nd,3rd  eg: 400,200,100
    timeSlot = models.CharField(max_length=9) # format HHMM-HHMM

    def __str__(self):
        return self.event_code + " - " + self.event_name


class contacts(models.Model):
    contact_id = models.CharField(max_length=4, primary_key=True) # format - O001/V001 
    name = models.CharField(max_length=30)
    email = models.EmailField(max_length=254)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{10,10}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    phno = models.CharField(validators=[phone_regex], max_length=10, blank=False)
    fbLink = models.CharField(max_length=254)
    profileImage = models.ImageField(upload_to='static/ekarikthin/img/contacts/', blank=True, null=True)

    def __str__(self):
        return self.contact_id + " - " + self.name


class registeredUsers(models.Model):
    regNo = models.CharField(max_length=7, primary_key=True) #format eventCode-001   eg C01-001
    name = models.CharField(max_length=30, blank=False)
    emailId = models.EmailField(max_length=254, blank=False)
    password = models.CharField(max_length=16, blank=False, default=emailId)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{10,10}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    phno = models.CharField(validators=[phone_regex], max_length=10, blank=False)
    instName = models.CharField(max_length=100)
    paymentToken = models.OneToOneField('payment', on_delete=models.CASCADE)

    def __str__(self):
        return self.regNo + " - " + self.emailId

class payment(models.Model):
    paymentToken = models.CharField(max_length=256, primary_key=True)
    timeStamp = models.DateTimeField()

