import React from 'react';
import styles from './FormsControls.module.css';

const FormControl =
  (Element) =>
  ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
      <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
        <div>
          <Element {...input} {...props} />
        </div>
        {hasError && <span>{meta.error}</span>}
      </div>
    );
  };

export const Textarea = FormControl('textarea');
export const Input = FormControl('input');
