import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BigIntSerializerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => this.convertBigIntToString(data))
    );
  }

  private convertBigIntToString(obj: any): any {
    if (obj === null || obj === undefined) {
      return obj;
    }

    if (typeof obj === 'bigint') {
      return obj.toString();
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.convertBigIntToString(item));
    }

    if (typeof obj === 'object') {
      const converted: any = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          converted[key] = this.convertBigIntToString(obj[key]);
        }
      }
      return converted;
    }

    return obj;
  }
}