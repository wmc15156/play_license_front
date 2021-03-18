import { useCallback } from "react";
import axios from "axios";

export const requestPhoneValidation = (phone, skip=true) => {
  if(phone && !skip) {
    axios.post(`/user/phone-validation/provider/${phone}`)
      .then((res) => {
        return true;
      })
  }
}
