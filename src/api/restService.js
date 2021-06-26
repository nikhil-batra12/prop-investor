import axios from "axios";
import _ from "lodash";
import * as helpers from "utils/helpers";

const defaultGetConfig = {
  url: null,
  interpolateParams: {},
  queryParams: {},
};

const defaultPostConfig = {
  url: null,
  interpolateParams: {},
  body: {},
  queryParams: {},
};

const appendToken = (config) =>
  (config.headers = {
    Authorization: helpers.getToken(),
  });

const interpolateUrl = (url, interpolateParams) => {
  if (_.isEmpty(interpolateParams)) {
    return url;
  }
  for (const key in interpolateParams) {
    url = url.replace(`:${key}`, interpolateParams[key]);
  }
  return url;
};

export const getRequest = (config) => {
  appendToken(defaultGetConfig);
  config = _.merge({}, defaultGetConfig, config);
  let { url, queryParams, interpolateParams, headers } = config;
  console.log(config);
  if (!url) {
    throw Error("URL cannot be null");
  }
  console.log(headers);
  url = interpolateUrl(url, interpolateParams);
  return new Promise((resolve) =>
    axios
      .get(url, { params: queryParams, headers })
      .then((response) => resolve(response))
  );
};

export const postRequest = (config) => {
  appendToken(defaultPostConfig);
  config = _.merge({}, defaultPostConfig, config);
  let { url, queryParams, interpolateParams, body, headers } = config;
  if (!url) {
    throw Error("URL cannot be empty");
  }
  url = interpolateUrl(url, interpolateParams);
  return new Promise((resolve) =>
    axios
      .post(url, body, { params: queryParams, headers })
      .then((response) => resolve(response))
  );
};
