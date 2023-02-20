import { Helpers } from "@app/shared/helpers/helpers";
import * as _ from "lodash";
interface IBaseParams {
  pageNumber: number;
  pageSize: number;
  [keys: string]: any;
}
export class ShopParams {

  categories: string[] = [];
  searchKey: string = ''

  constructor(_params: IBaseParams | null) {
    if (_params) {
      if (_params['searchKey'] && !_.isEmpty(_params['searchKey'])) {
        this.searchKey = Helpers.decodeString(_params['searchKey'].trim());
      }
      if (_params['categories'] && !_.isEmpty(_params['categories'])) {
        if (_.isArray(_params['categories'])) {
          this.categories = _params['categories'];
        }
        else if (_.isString(_params['categories'])) {
          try {
            this.categories = _params['categories'].trim().split(',');
          }
          catch { }
        }
      }
    }
  }
}



