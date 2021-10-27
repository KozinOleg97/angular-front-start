import {Injectable} from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newReq = req.clone({
      url : ''
      //здесь задать необходимые заголовки
    });

    return next.handle(newReq).pipe(tap(
      (event) => {
        if (event instanceof HttpResponse)
          console.log('server response with ' + req.body);
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status == 401)
            console.log('Unauthorized')
        }
      }
    ));
  }
}
