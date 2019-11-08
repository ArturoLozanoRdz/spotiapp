import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  releases:any;

  constructor(private httpClient: HttpClient, private httpHeaders: HttpHeaders) {

  }

  getNewReleases() {

    this.httpHeaders.append('Authorization', 'Bearer BQC1i2IgnAKvJeN6aTZNpEcchoiXjpNth4_qOruVgKZFi67sfkNZEuxvplcSD7DsKWB8IaQ01vSUXggTZso');

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQC1i2IgnAKvJeN6aTZNpEcchoiXjpNth4_qOruVgKZFi67sfkNZEuxvplcSD7DsKWB8IaQ01vSUXggTZso'
    });

    this.httpClient.get('https://api.spotify.com/v1/browse/new-releases', {  }).subscribe(data => {
      console.log(data);
    });
  }

}
