import { HttpInterceptorFn } from '@angular/common/http';

export const myInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('Token'); // Retrieve the token from storage
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(clonedRequest)
  return next(clonedRequest);
};
