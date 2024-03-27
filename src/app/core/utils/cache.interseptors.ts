import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
// import { HttpInterceptor } from "./cache";
import { Injectable } from "@angular/core";
import { Observable, of, tap } from "rxjs";

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache: Map<HttpRequest<any>, HttpResponse<any>> = new Map();
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method !== "GET") {
      return next.handle(req);
    }

    const cachedResponse: HttpResponse<any> | any = this.cache.get(req);
    if (cachedResponse) {
      return of(cachedResponse.clone());
    } else {
      return next.handle(req).pipe(
        tap((stateEvent) => {
          if (stateEvent instanceof HttpResponse) {
            this.cache.set(req, stateEvent.clone());
          }
        })
      );
    }
  }
}
