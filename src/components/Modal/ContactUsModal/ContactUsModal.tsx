import { FC, useState } from 'react';
import { Button, Popconfirm, notification } from 'antd';
import {
  Formik,
  Form,
  FormikHelpers as FormikActions,
  FormikState,
} from 'formik';
import classnames from 'classnames';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { isValidPhoneNumber } from 'react-phone-number-input';

import { contactUsQuery } from 'firebaseApi/queries';

import { EStatusEnum } from 'enums/StatusEnum';
import type { TModalProps } from 'types';

import InteractiveModal from 'components/_modal/InteractiveModal';
import Field from 'components/_formik/Field';
import TextAreaField from 'components/_formik/_base/TextAreaField';
import PhoneField from 'components/_formik/_base/PhoneField';
import ResultModal from 'components/Modal/ResultModal';

import classes from './ContactUsModal.module.scss';

enum EFieldValues {
  idFirstName = 'firstName',
  idLastName = 'lastName',
  idEmail = 'email',
  idMobilePhone = 'mobilePhone',
  idMessage = 'message',
  nameEmail = 'Email',
  nameMobilePhone = 'Telefón',
  labelFirstName = 'Meno',
  labelLastName = 'Priezvisko',
  labelMobilePhone = '912 345 678',
  labelMessage = 'Vaša správa',
}

const validate = { required: true, minLength: 3 };

const initialValues = {
  createdAt: '',
  firstName: '',
  lastName: '',
  email: '',
  mobilePhone: '',
  message: '',
};

type TValues = typeof initialValues;

const ContactUsModal: FC<TModalProps> = ({ handleCancel }) => {
  const [isResponseSuccessful, setIsResponseSuccessful] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const prepareData = (values: TValues) => ({
    createdAt: serverTimestamp(),
    firstName: values.firstName.trim(),
    lastName: values.lastName.trim(),
    email: values.email.trim(),
    mobilePhone: values.mobilePhone !== '' ? values.mobilePhone : null,
    message: values.message.trim(),
  });

  const handleSubmit = async (
    values: TValues,
    actions: FormikActions<TValues>
  ) => {
    const data = prepareData(values);

    const response = await addDoc(contactUsQuery, {
      data,
    }).catch(error => {
      console.error(error.message);
      api.error({
        message: 'Niekde nastala chyba!',
        description: `Dôvod: ${error.message}`,
        placement: 'top',
        duration: 10,
      });
    });

    if (response) {
      actions.resetForm(values as Partial<FormikState<TValues>>);
      setIsResponseSuccessful(isSuccessFul => !isSuccessFul);

      return response;
    }

    return null;
  };

  const phoneValidation = (values: TValues) => {
    const errors: Partial<TValues> = {};

    // Example if mobile phone is set to required
    // Don't forget to pass isRequired prop to <PhoneField />

    // if (!values.mobilePhone) {
    //   errors.mobilePhone = 'Toto pole je potrebné vyplniť!';
    //   return errors;
    // }

    // isValidPhoneNumber is not 100% accurate, in future we have to change it
    // if values.mobilePhone is empty string (not required) it's unnecessary to set this error
    if (!isValidPhoneNumber(values.mobilePhone) && values.mobilePhone !== '') {
      errors.mobilePhone = 'Zadané číslo má nesprávny formát';
    }

    return errors;
  };

  if (isResponseSuccessful) {
    return (
      <ResultModal
        handleCancel={handleCancel}
        title="Vaša správa bola úspešne odoslaná!"
        subTitle="V prípade ďalších otázok nás neváhajte opäť kontaktovať."
        status={EStatusEnum.SUCCESS}
      />
    );
  }

  return (
    <InteractiveModal
      contentClassName={classes.modal}
      isCloseButtonVisible={false}
      handleCloseClick={handleCancel}
    >
      {contextHolder}
      <div className={classes.title}>Zanechajte nám správu</div>
      <Formik
        validate={phoneValidation}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValidating, isSubmitting }) => (
          <Form className={classnames(classes.holder, classes.form)}>
            <div className={classes.wrapper}>
              <div className={classes.wrapper__name}>
                <Field
                  id={EFieldValues.idFirstName}
                  name={EFieldValues.idFirstName}
                  labelTitle={EFieldValues.labelFirstName}
                  validate={validate}
                />
              </div>
              <div className={classes.wrapper__name}>
                <Field
                  id={EFieldValues.idLastName}
                  name={EFieldValues.idLastName}
                  labelTitle={EFieldValues.labelLastName}
                  validate={validate}
                />
              </div>
            </div>

            <div className={classes.holder}>
              <div>
                <Field
                  id={EFieldValues.idEmail}
                  name={EFieldValues.idEmail}
                  labelTitle={EFieldValues.nameEmail}
                  validate={{ ...validate, validEmail: true }}
                />
              </div>
              <div>
                <PhoneField
                  id={EFieldValues.idMobilePhone}
                  name={EFieldValues.idMobilePhone}
                  labelTitle={EFieldValues.nameMobilePhone}
                  placeholder={EFieldValues.labelMobilePhone}
                  isSubmissionExecuting={!isValidating && isSubmitting}
                />
              </div>
            </div>

            <div>
              <Field
                id={EFieldValues.idMessage}
                name={EFieldValues.idMessage}
                labelTitle={EFieldValues.labelMessage}
                validate={validate}
                component={TextAreaField}
              />
            </div>

            <div className={classes.wrapper}>
              <Popconfirm
                title="Pozor! Chystáte sa zavrieť tento formulár"
                description={
                  <div className={classes.wrapper__popover}>
                    Ak zavriete tento formulár, stratíte všetky svoje vyplnené
                    dáta.
                  </div>
                }
                onConfirm={handleCancel}
                okText="Zavrieť"
                cancelText="Naspäť"
                okButtonProps={{ danger: true }}
                disabled={isSubmitting}
              >
                <Button disabled={isSubmitting}>Zrušiť</Button>
              </Popconfirm>

              <Button
                type="primary"
                htmlType="submit"
                disabled={!dirty || isSubmitting}
                loading={isSubmitting}
              >
                Odoslať
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </InteractiveModal>
  );
};

export default ContactUsModal;
