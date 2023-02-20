import { AbstractControl } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
// import { GlobalConfig } from '@cores/_enums';
// import { ROUTING_DEFINED } from '@shares/_enums';
import * as _ from 'lodash';
// import * as moment from 'moment';
// import { environment } from 'src/environments/environment';
// import { cookieHelper } from './cookieHelper';
// import { LocalStorageHelper } from './localStorage';
// import * as XLSX from 'xlsx';
import { Observable, Subject } from 'rxjs';

export class Helpers {
  public static loading = {
    toggle: (enable: boolean) => {
      const loading = document.getElementsByClassName('main-loading');
      if (loading[0] !== undefined) {
        if (enable) {
          loading[0].setAttribute('style', 'display: flex');
        } else {
          loading[0].setAttribute('style', 'display: none');
        }
      }
    },
    setText(text: string) {
      const loading = document.getElementsByClassName('main-loading-text');
      if (loading[0] !== undefined) {
        loading[0].textContent = text;
      }
    }
  }
  // public static dateTime = {
  //   convertDateFromUTC(_value: any, format?: string): string {
  //     if (_.isEmpty(_value)) {
  //       return '';
  //     }
  //     const _date = moment(_value);
  //     if (!moment.isMoment(_date)) {
  //       return '';
  //     }

  //     const __format = format ? format : 'YYYY-MM-DD';
  //     return _date.format(__format);
  //   },
  //   convertDateToUTC(
  //     _value: any,
  //     format?: string,
  //     formatConvert?: string
  //   ): string {
  //     if (_value === '' || _value === null || _value === undefined) {
  //       return '';
  //     }
  //     const __format =
  //       format == null || format === undefined ? format : 'DD/MM/YYYY';
  //     const _date = moment(_value, __format);

  //     if (!moment.isMoment(_date)) {
  //       return '';
  //     }

  //     const __formatConvert =
  //       formatConvert == null || formatConvert === undefined
  //         ? 'x'
  //         : formatConvert;
  //     return _date.format(__formatConvert);
  //   },
  //   convertToUTCfromDate(_value: any, formatConvert?: string): string {
  //     if (_value === '' || _value === null || _value === undefined) {
  //       return '';
  //     }
  //     const _date = moment(_value);

  //     if (!moment.isMoment(_date)) {
  //       return '';
  //     }

  //     const __formatConvert =
  //       formatConvert == null || formatConvert === undefined
  //         ? 'x'
  //         : formatConvert;
  //     return _date.format(__formatConvert);
  //   },
  //   getTimeFromString(_value: string, format?: string, retFormat?: string) {
  //     if (_value === '' || _value === null || _value === undefined) {
  //       return '';
  //     }
  //     const __format = format ? format : 'HH:mm';
  //     const _date = moment.utc(_value, __format);

  //     if (!moment.isMoment(_date)) {
  //       return '';
  //     }

  //     return _date.format(
  //       retFormat == null || retFormat === undefined ? 'HH' : retFormat
  //     );
  //   },
  //   getHourFormat(hour: number, minute: number) {
  //     let text = '';
  //     text =
  //       (hour < 10 ? '0' + hour : hour) +
  //       ':' +
  //       (minute < 10 ? '0' + minute : minute);

  //     return text;
  //   },
  //   getFromUnix(_value: any, retFormat?: string, isUTC?: boolean) {
  //     if (!_value) {
  //       return '';
  //     }
  //     let _date =
  //       _value.toString().length > 10 ?
  //         (isUTC ? moment.utc(_value) : moment(_value)) : moment.unix(_value);

  //     if (isUTC) {
  //       _date = _date.utc();
  //     }
  //     if (!moment.isMoment(_date)) {
  //       return '';
  //     }

  //     return _date.format(
  //       _.isNull(retFormat) || _.isUndefined(retFormat) ? 'DD/MM/YYYY HH:mm' : retFormat
  //     );
  //   },
  //   getTodayWithFormat(format?: string, raw?: any): any {
  //     if (raw != null && raw) {
  //       return moment();
  //     } else {
  //       return moment().format(
  //         format == null || format === undefined ? 'DD/MM/YYYY' : format
  //       );
  //     }
  //   },
  //   getUnixFromMoment(
  //     _value: moment.Moment,
  //     isUTC?: boolean,
  //     toMillSeconds?: boolean
  //   ) {
  //     if (!_value.isValid()) {
  //       return '';
  //     }
  //     if (isUTC) {
  //       _value = _value.utc();
  //     }
  //     return toMillSeconds ? _value.valueOf() : _value.unix();
  //   },
  //   getUnixFromDate(
  //     _value: any,
  //     format?: string,
  //     isUTC?: boolean,
  //     toMilliseconds?: boolean
  //   ) {
  //     if (_value === '' || _value === null || _value === undefined) {
  //       return '';
  //     }
  //     const _date = isUTC
  //       ? moment.utc(
  //         _value,
  //         format == null || format === undefined ? 'DD/MM/YYYY HH:mm' : format
  //       )
  //       : moment(
  //         _value,
  //         format == null || format === undefined ? 'DD/MM/YYYY HH:mm' : format
  //       );

  //     if (!moment.isMoment(_date)) {
  //       return '';
  //     }
  //     return toMilliseconds ? _date.valueOf() : _date.unix();
  //   },
  //   /**
  //    * Compare 2 date, string, unix with return value:
  //    * < 0: from larger than
  //    * = 0 : equal
  //    * > 0 : to larger than
  //    * @param _from From date
  //    * @param _to To date
  //    * @param _type Type to diff: to - from
  //    * @param isUnix Using unix to parse
  //    * @param isUTC Using utc
  //    * @returns number or undefined (error)
  //    */
  //   compareDate(
  //     _from: any,
  //     _to: any,
  //     _type?: string,
  //     isUnix?: boolean,
  //     isUTC?: boolean
  //   ): number | undefined {
  //     /**
  //      * Default params if not defined yet
  //      */
  //     _type = _.isEmpty(_type) ? 'second' : _type;
  //     isUnix = _.isUndefined(isUnix) ? false : isUnix;
  //     isUTC = _.isUndefined(isUTC) ? false : isUTC;

  //     let _fDate =
  //       isUnix || _from.toString().length <= 10
  //         ? moment.unix(_from)
  //         : moment(_from);
  //     let _tDate =
  //       isUnix || _to.toString().length <= 10 ? moment.unix(_to) : moment(_to);

  //     if (!moment.isMoment(_fDate) || !moment.isMoment(_fDate)) {
  //       return undefined;
  //     }

  //     if (isUTC) {
  //       _fDate = _fDate.utc();
  //       _tDate = _tDate.utc();
  //     }

  //     return _tDate.diff(_fDate, <moment.unitOfTime.DurationConstructor>_type);
  //   },
  //   /**
  //    * GET duration from-to date inputted
  //    * @param _from From date
  //    * @param _to To date
  //    * @param _type Get by type: days, month, year
  //    * @param isUnix Use unix from two type
  //    * @param isUTC Get by UTC
  //    * @returns number or undefined
  //    */
  //   durationOfDate(
  //     _from: any,
  //     _to: any,
  //     _type?: string,
  //     isUnix?: boolean,
  //     isUTC?: boolean
  //   ): number | undefined {
  //     /**
  //      * Default params if not defined yet
  //      */
  //     _type = _.isEmpty(_type) ? 'second' : _type;
  //     isUnix = _.isUndefined(isUnix) ? false : isUnix;
  //     isUTC = _.isUndefined(isUTC) ? false : isUTC;

  //     let _fDate =
  //       isUnix || _from.toString().length <= 10
  //         ? moment.unix(_from)
  //         : moment(_from);
  //     let _tDate =
  //       isUnix || _to.toString().length <= 10 ? moment.unix(_to) : moment(_to);

  //     if (!moment.isMoment(_fDate) || !moment.isMoment(_fDate)) {
  //       return undefined;
  //     }

  //     if (isUTC) {
  //       _fDate = _fDate.utc();
  //       _tDate = _tDate.utc();
  //     }

  //     const duration = moment.duration(_tDate.diff(_fDate));

  //     return duration.as(<moment.unitOfTime.Base>_type);
  //   },
  //   formatLocalDate(_value: any | moment.Moment, format?: string, isUTC?: boolean) {
  //     if (_value === '' || _value === null || _value === undefined) {
  //       return '';
  //     }
  //     const _date = isUTC ? moment.utc(_value) : moment(_value);

  //     if (!moment.isMoment(_date)) {
  //       return '';
  //     }

  //     return _date.format(
  //       format == null || format === undefined ? 'DD/MM/YYYY HH:mm' : format
  //     );
  //   }
  // }
  public static groupBy(_list: any[], _key: string) {
    if (!_.isUndefined(_list) && !_.isEmpty(_list) && !_.isNull(_list)) {
      const groupedObj = _list.reduce((prev, cur) => {
        if (!prev[cur[_key]]) {
          prev[cur[_key]] = [cur];
        } else {
          prev[cur[_key]].push(cur);
        }
        return prev;
      }, {});
      return Object.keys(groupedObj).map(key => ({
        key,
        value: groupedObj[key]
      }));
    } else {
      return [];
    }
  }
  public static deviceInfo() {
    return {
      timeOpened: new Date(),
      timezone: new Date().getTimezoneOffset() / 60,

      hostname() {
        return window.location.hostname;
      },
      pathname() {
        return window.location.pathname;
      },
      referrer() {
        return document.referrer;
      },
      previousSites() {
        return history.length;
      },

      browserName() {
        return navigator.appName;
      },
      browserEngine() {
        return navigator.product;
      },
      browserVersion1a() {
        return navigator.appVersion;
      },
      browserVersion1b() {
        return navigator.userAgent;
      },
      browserLanguage() {
        return navigator.language;
      },
      browserOnline() {
        return navigator.onLine;
      },
      browserPlatform() {
        return navigator.platform;
      },
      javaEnabled() {
        return navigator.javaEnabled();
      },
      dataCookiesEnabled() {
        return navigator.cookieEnabled;
      },
      dataCookies1() {
        return document.cookie;
      },
      dataCookies2() {
        return decodeURIComponent(
          document.cookie.split(';')[0] === undefined
            ? ''
            : document.cookie.split(';')[0]
        );
      },
      dataStorage() {
        return localStorage;
      },

      sizeScreenW() {
        return screen.width;
      },
      sizeScreenH() {
        return screen.height;
      },
      sizeDocW() {
        return document.activeElement ? document.activeElement.clientWidth : 0;
      },
      sizeDocH() {
        return document.activeElement ? document.activeElement.clientHeight : 0;
      },
      sizeInW() {
        return innerWidth;
      },
      sizeInH() {
        return innerHeight;
      },
      sizeAvailW() {
        return screen.availWidth;
      },
      sizeAvailH() {
        return screen.availHeight;
      },
      scrColorDepth() {
        return screen.colorDepth;
      },
      scrPixelDepth() {
        return screen.pixelDepth;
      }
    };
  }
  /**
   * Substring a string with length and append ...
   * @param str Source string to sub
   * @param length Length to sub
   * @param substr Last index of string to sub, maybe space, ';', '/', '.',...
   * @example: subStringSmarter(item.newS_DESC, 110, ' ')
   */
  public static subStringSmarter(str: string, length: number, substr: string): string {
    if (_.isEmpty(str)) return '';
    if (str.length > length) {
      str = str.substr(0, length);
      const t = str.replace(/^\s+|\s+$/g, '').lastIndexOf(substr);
      if (t < str.length) {
        str = str.substr(0, t) + '...';
      }
    }
    return str;
  }
  /**
   * Get unique array value
   * @param array1
   * @param array2
   * @return array of any
   */
  public static removeDuplicateTwoArray(
    array1: any[],
    array2: any[],
    field: string
  ): any[] {
    const _result: any[] = [];
    const _arr = array1.length > array2.length ? array2 : array1;
    const _arr2 = array1.length > array2.length ? array1 : array2;

    _arr2.forEach((value, index) => {
      const _index = _arr.findIndex(t => t[field] != value[field]);
      if (_index < 0) {
        _result.push(value);
      }
    });

    return _result;
  }

  /**
   * Distinct array values
   * @param inputArray Array inputted
   * @param field Field to distinct, empty if over object
   * @returns array after distinct
   */


  public static isNumberKey(evt: any) {
    const charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode !== 43 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  public static validateNumber(number: any): boolean {
    if (_.isUndefined(number) || _.isNull(number) || _.isEmpty(number)) return false;
    const pattern = new RegExp(/([a-z])|([A-Z])/);
    return pattern.test(number);
  }
  public static validateDate(value: any) {
    const regExp = new RegExp(
      // eslint-disable-next-line max-len
      /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/
    );
    return regExp.test(value) ? false : true;
  }

  public static decodeString(value: string): string {
    return decodeURIComponent(value || '');
  }
  public static scrollToTop(noAnimation: boolean = false) {
    if (noAnimation) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    var scrollStep = -window.scrollY / (300 / 100),
      scrollInterval = setInterval(function () {
        if (window.scrollY != 0) {
          window.scrollBy(0, scrollStep);
        }
        else clearInterval(scrollInterval);
      }, 10);
    //
  }

  /**
   * Get route child data
   * @param firstChild First child of module routing
   * @returns Data or null
   */
  public static getRouteChildData(firstChild: ActivatedRoute | null): null | Data {
    let child = firstChild;
    while (child) {
      if (child.firstChild) {
        child = child.firstChild;
      } else if (child.snapshot.data) {
        return child.snapshot.data;
      }
    }
    return null;
  }

  public static convertObjectToParams = (_obj: any) => {
    if (_obj) {
      let str = "";
      // tslint:disable-next-line:forin
      for (const key in _obj) {
        if (str !== "") {
          str += "&";
        }
        str += key + "=" + encodeURIComponent(_obj[key]);
      }
      return str;
    } else {
      return "";
    }
  }
  public static convertParamsToObject = (_string: string) => {
    // var search = location.search.substring(1);
    if (_string && _string.length > 0 && _string !== '/') {
      return JSON.parse(
        '{"' +
        decodeURI(_string)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
      );
    }
    return undefined;
  }
  public static getParamString = () => {
    return window.location.search.replace(/\?/g, '') || '';
  }


  /**
   * Get value of query params
   * @param key Key of query
   */
  public static getQueryString = (key: string): string => {
    const { search } = window.location
    const params = new URLSearchParams(search)
    const value = params.get(key)
    return value ? value : ''
  }

  /**
   * Get current host like: https://localhost:8000/
   */
  public static getCurrentHost = (): string => window.location.protocol.concat('//').concat(window.location.host)


  /**
   * Get path with /
   * @param paths Array of path
   * @param prefix Key if prefix / is includes
   * @returns string with paths
   */
  public static JoinPaths = (paths: string[], prefix: boolean = false)
    : string => {
    const _pathMatches = paths.join('/');
    return prefix ? `/${_pathMatches}` : _pathMatches;
  }
}
