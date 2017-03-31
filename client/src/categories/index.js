import angular from 'angular';

const categoriesModule = angular.module('app.categories', []);

import config from './categories.config';
categoriesModule.config(config);

import CategoriesCtrl from './categories.controller';
categoriesModule.controller('CategoriesCtrl', CategoriesCtrl);

export default categoriesModule;