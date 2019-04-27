from django.shortcuts import render
import requests
from .models import City
from .forms import CityForm

# Create your views here.
def index(request):
    
    url = 'http://api.openweathermap.org/data/2.5/weather?q={}&units=imperial&appid=8dcf5d42dc9f5ae1d1deea7853f67f1f'

    cities=City.objects.all()
    if request.method == 'POST': # only true if form is submitted
        form = CityForm(request.POST) # add actual request data to form for processing
        form.save() # will validate and save if validate

    form = CityForm()
    weather_data=[]
    for city in cities:
        city_weather = requests.get(url.format(city)).json()
        current_weather={
       'city':city,
        'temperature':city_weather['main']['temp'],
       'description':city_weather['weather'][0]['description'],
       'icon':city_weather['weather'][0]['icon']
          }
        weather_data.append(current_weather)    
    content={'weather_data': weather_data,'form':form}

    return render(request,'first/weatherApp.html',content)
