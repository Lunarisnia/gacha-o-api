/**
 *  *********
 *  DEPRECATED
 *  *********
 */

'use strict';

const firstServiceHandle = (param) => {
  if (param) return true;
};

const secondServiceHandle = (param) => {
  if (param) return false;
};

module.exports = {
  firstServiceHandle,
  secondServiceHandle,
};
