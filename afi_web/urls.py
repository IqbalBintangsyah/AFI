from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("overview", views.overview, name="overview"),
    path("our-value", views.ourValue, name="ourValue"),
    path("our-culture", views.ourCulture, name="ourCulture"),
    path("our-team", views.ourTeam, name="ourTeam"),
    path("our-message", views.ourMessage, name="ourMessage"),
    path("development", views.development, name="development"),
    path("investment", views.investment, name="investment"),
    path("consulting", views.consulting, name="consulting"),
    path("epc", views.epc, name="epc"),
    path("onm", views.onm, name="onm"),
    path("data", views.data, name="data"),
    path("kawamura", views.kawamura, name="kawamura"),
    path("nagao", views.nagao, name="nagao"),
    path("wika", views.wika, name="wika"),
    path("maria", views.maria, name="maria"),
    path("asep", views.asep, name="asep"),
    path("rosi", views.rosi, name="rosi"),
    path("andrie", views.andrie, name="andrie"),
    path("kemas", views.kemas, name="kemas"),
    path("ancha", views.ancha, name="ancha"),
    path("recruitment", views.recruitment, name="recruitment"),
    path("where-we-are", views.whereWeAre, name="whereWeAre"),
]