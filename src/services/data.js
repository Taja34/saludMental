import { facebook, google } from '../firebase/firebaseConfig';

export const loginProvider = [
    {
      name: "google",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png",
      provider: google,
    },
    {
      name: "facebook",
      image: "https://reposteriaquetayyeya.com/wp-content/uploads/2016/10/facebook-icon-basic-round-social-iconset-s-icons-7.png",
      provider: facebook,
    },
  ];