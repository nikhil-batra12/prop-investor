import axios from "axios";
import _ from "lodash";

const defaultGetConfig = {
  url: null,
  interpolateParams: {},
  queryParams: {},
  headers: {},
};

const defaultPostConfig = {
  url: null,
  interpolateParams: {},
  body: {},
  queryParams: {},
  headers: {},
};

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
  config = _.merge({}, defaultGetConfig, config);
  let { url, queryParams, interpolateParams, headers } = config;
  console.log(config);
  if (!url) {
    throw Error("URL cannot be null");
  }
  url = interpolateUrl(url, interpolateParams);
  return new Promise((resolve) =>
    axios
      .get(url, { params: queryParams, headers })
      .then((response) => resolve(response))
  );
};

export const postRequest = (config) => {
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
