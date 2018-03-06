import GADatasource from './datasource';
import {GAQueryCtrl} from './query_ctrl';
import {GAConfigCtrl} from './config_ctrl';

class GAAnnotationsQueryCtrl {
  static templateUrl = 'partials/annotations.editor.html';
}

export {
  GADatasource as Datasource,
  GAQueryCtrl as QueryCtrl,
  GAConfigCtrl as ConfigCtrl,
  GAAnnotationsQueryCtrl as AnnotationsQueryCtrl,
};
