import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, tap } from "rxjs";

@Injectable()
export class HttpCacheInterceptor implements HttpInterceptor {
  private cache: Map<string, HttpResponse<any>>

  constructor() {
    const json = localStorage.getItem('_cache') || '{}'
    const object = JSON.parse(json)

    this.cache = new Map(Object.entries(object))
  }

  private getItem(urlWithParams: string): HttpResponse<any> | undefined {
    return this.cache.get(urlWithParams)
  }

  private setItem(urlWithParams: string, response: HttpResponse<any>): void {
    this.cache.set(urlWithParams, response)

    const object = Object.fromEntries(this.cache.entries())
    const json = JSON.stringify(object)

    localStorage.setItem('_cache', json)
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') {
      return next.handle(req)
    }

    const cached = this.getItem(req.urlWithParams)

    if (cached) return of(new HttpResponse(cached as any).clone())

    return next
      .handle(req)
      .pipe(
        tap((response) => {
          if (response instanceof HttpResponse) {
            this.setItem(req.urlWithParams, response.clone())
          }
        })
      )
  }
}
