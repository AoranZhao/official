'use strict';

// send email
export const send_email_ing = () => ({
    type: 'SEND_EMAIL_ING'
})

export const send_email_done = (data) => ({
    type: 'SEND_EMAIL_DONE',
    data: data
})

export const send_email_err = (err) => ({
    type: 'SEND_EMAIL_ERR',
    err: err
})

export const update_email_body = (data) => ({
    type: "UPDATE_EMAIL_BODY",
    data: data
})