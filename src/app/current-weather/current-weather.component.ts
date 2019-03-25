import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from '../interface'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  constructor(private weatherServeice: WeatherService) {}

  ngOnInit() {
    this.weatherServeice
      .getCurrentWeather('Ramallah', 'Palestine')
      .subscribe(data => (this.current = data))
  }
}
