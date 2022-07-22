import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, tap } from "rxjs";

@Injectable()
export class HttpCacheInterceptor implements HttpInterceptor {
  private cache: Map<string, HttpResponse<any>> = new Map();

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') {
      return next.handle(req)
    }

    const cached = this.cache.get(req.urlWithParams)

    if (cached) return of(cached.clone())

    return next
      .handle(req)
      .pipe(
        tap((response) => {
          if (response instanceof HttpResponse) {
            this.cache.set(req.urlWithParams, response.clone())
          }
        })
      )
  }
}
