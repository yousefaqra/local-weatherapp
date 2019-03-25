import { ICurrentWeather } from '../interface'
import { Observable, of } from 'rxjs'
import { IWeatherService } from './weather.service'

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Jenin',
    country: 'PS',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'Rain',
  }
  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(this.fakeWeather)
  }
}
