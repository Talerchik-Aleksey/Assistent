import React, { useEffect, useState } from "react";
import { getErrorInformation } from "./ErrorInfo";
import styles from "./Error.module.sass";
import { Link } from "react-router-dom";

interface PageNotFoundProps {
  HTTPErrorCode: number;
}

interface ErrorInformation {
  code: number;
  message: string;
  explane: string;
  tip: string;
  path?: string;
}

export default function ErrorPage({ HTTPErrorCode }: PageNotFoundProps) {
  const [errorInformation, setErrorInformation] = useState<ErrorInformation>(
    getErrorInformation(404)
  );

  useEffect(() => {
    setErrorInformation(getErrorInformation(HTTPErrorCode));
  }, [HTTPErrorCode]);

  return (
    <div className={styles.errorBlock}>
      <div className={styles.errorCodeCircle}>
        <h2>{errorInformation.code}</h2>
      </div>

      <div className={styles.errorTextBlock}>
        <h3>{errorInformation.message}</h3>
        <p className={styles.explane}>{errorInformation.explane}</p>
        <Link to="/updates" className={styles.tip}>
          {errorInformation.tip}
        </Link>
        {errorInformation.path && <p>{errorInformation.path}</p>}
      </div>
    </div>
  );
}
