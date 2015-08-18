import Ember from 'ember';
import config from '../config/environment';
import Service from 'ember-gestures/services/-gestures';

let gestures = Ember.merge({}, {
  useCapture: false
});
gestures = Ember.merge(gestures, config.gestures);

export default Service.extend({
  useCapture: gestures.useCapture
});
