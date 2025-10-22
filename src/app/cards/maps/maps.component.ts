import { MapCacheService } from '../../services/map-cache-service.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [],
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  mapUrl: SafeResourceUrl | null = null;

  constructor(private mapCacheService: MapCacheService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadMapUrl();
    })
  }

  loadMapUrl(): void {
    const cachedUrl = this.mapCacheService.getMapDetails();

    if (cachedUrl) {
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(cachedUrl);
    } else {
      // The URL you want to cache and use
      const url = 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3485.1752254350017!2d75.77839907497541!3d29.130021661316526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDA3JzQ4LjEiTiA3NcKwNDYnNTEuNSJF!5e0!3m2!1sen!2sin!4v1761149135619!5m2!1sen!2sin';

      this.mapCacheService.setMapDetails(url);
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }
}

