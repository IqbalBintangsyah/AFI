from django.shortcuts import render
from django.http import HttpResponse
from django import forms
# Create your views here.

class Login(forms.Form):
    name = forms.CharField(label="username")
    pswd = forms.CharField(label="password")

def login(request):
	return render(request, "afi_web/login.html", {
		"form": Login()	
	})

def index(request):
	return render(request, "afi_web/index.html")

def overview(request):
	return render(request, "afi_web/overview.html")

def ourValue(request):
	return render(request, "afi_web/our_value.html")

def ourCulture(request):
	return render(request, "afi_web/our_culture.html")

def ourTeam(request):
	return render(request, "afi_web/our_team.html")

def ourMessage(request):
	return render(request, "afi_web/our_message.html")

def development(request):
	return render(request, "afi_web/development.html")

def investment(request):
	return render(request, "afi_web/investment.html")

def consulting(request):
	return render(request, "afi_web/consulting.html")

def epc(request):
	return render(request, "afi_web/epc.html")

def onm(request):
	return render(request, "afi_web/onm.html")

def data(request):
	return render(request, "afi_web/data.html")

def kawamura(request):
	return render(request, "afi_web/kawamura.html")

def nagao(request):
	return render(request, "afi_web/nagao.html")

def wika(request):
	return render(request, "afi_web/wika.html")

def maria(request):
	return render(request, "afi_web/maria.html")

def asep(request):
	return render(request, "afi_web/asep.html")

def rosi(request):
	return render(request, "afi_web/rosi.html")

def andrie(request):
	return render(request, "afi_web/andrie.html")

def kemas(request):
	return render(request, "afi_web/kemas.html")

def ancha(request):
	return render(request, "afi_web/ancha.html")

def recruitment(request):
	return render(request, "afi_web/recruitment.html")

def whereWeAre(request):
	return render(request, "afi_web/where_we_are.html")