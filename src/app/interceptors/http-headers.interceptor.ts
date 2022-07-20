import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment as env } from "src/environments/environment";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqClone = req.clone({
      // setHeaders: {
      //   'X-RapidAPI-Key': env.apiKey,
      //   'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
      // },
      setParams: {
        key: env.apiKey
      }
    })

    return next.handle(reqClone)
  }
}
