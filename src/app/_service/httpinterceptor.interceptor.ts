import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let _token = localStorage.getItem('token');
  console.log(_token);
  let jwtToken = req.clone({
    setHeaders:{
      Authorization: 'Bearer ' + _token,
    }
  })
  return next(jwtToken);
};
