import React from "react";
import { Toast } from "react-bootstrap";
import * as helpers from "utils/helpers";
import * as asyncActions from 'utils/asyncActions';
import "./toaster.css";

const toaster = (props: any) => {

  const { showtoaster, status, message, onHideToaster } = props;
  let statusClassName  = null;
  switch (status){
    case asyncActions.SUCCESS: statusClassName='toaster-success'; break;
    case asyncActions.FAILURE: statusClassName= 'toaster-failed';break;
    case asyncActions.WARNING: statusClassName= 'toaster-warning';break;
    default: statusClassName= 'toaster-warning';
  }
  const classNames  = ['m-auto', statusClassName].join(' ');

  return (
    showtoaster ? (
      <div className="toaster-container">
        <Toast className={classNames} onClose={onHideToaster}>
          <Toast.Header>
            <strong className="me-auto">
              {helpers.isFailure(status) && <span>Failure</span>}
              {helpers.isSuccess(status) && <span>Success</span>}
              {helpers.isWarning(status) && <span>Warning</span>}
            </strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </div>
    ): null
  );
};

export default toaster;
