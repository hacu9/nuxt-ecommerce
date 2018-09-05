const baseURL = {
  baseURL: "http://localhost:8000/api"
};

const AUTH = {
  strategies: {
    local: {
      endpoints: {
        login: {
          url: "auth/login",
          method: "post",
          propertyName: "access_token"
        },
        user: { url: "auth/user", method: "get", propertyName: "user" },
        logout: { url: "auth/logout", method: "get", propertyName: "data" }
      }
    }
  }
};

// strategies: {
//     'laravel.passport': {
//         url: '...',
//             client_id: '...',
//                 client_secret: '...'
//     },
// }

// this.$auth.loginWith('laravel.passport')

const I18N = {
  //   locales: [
  //     {
  //       code: "en",
  //       iso: "en-US",
  //       name: "English"
  //     },
  //     {
  //       code: "fr",
  //       iso: "fr-FR",
  //       name: "Français"
  //     },
  //     {
  //       code: "es",
  //       iso: "es-ES",
  //       name: "Español"
  //     }
  //   ],
  defaultLocale: "en",
  locales: [
    {
      code: "es",
      iso: "es-ES",
      name: "Español",
      langFile: "es-ES.js",
      file: "es-ES.js"
    },
    {
      code: "en",
      iso: "en-US",
      name: "English",
      langFile: "en-US.js",
      file: "en-US.js"
    },
    {
      code: "fr",
      iso: "fr-FR",
      name: "Francais",
      langFile: "fr-FR.js",
      file: "fr-FR.js"
    }
  ],
  lazy: true,
  langDir: "lang/"
  //   vueI18n: {
  //     fallbackLocale: "en"
  //     // messages: { en, fr, es }
  //   }
};

module.exports = {
  baseURL,
  I18N,
  AUTH
};
