import Vue from "vue";
// import messagesAr from './strings/validator/messages/ar.js';
// import attributesAr from './strings/validator/attributes/ar.js';
import attributesEn from '@/lang/validator/en.js';
import attributesFr from '@/lang/validator/fr.js';
import attributesEs from '@/lang/validator/es.js';
import VeeValidate, { Validator } from 'vee-validate';

// Validator.localize('ar', ar);

Vue.use(VeeValidate,{
    events: '',
    locale: 'en',
    dictionary: {
      en: { attributes: attributesEn },
      fr: { attributes: attributesFr },
      es: { attributes: attributesEs },
    //   ar: {  attributes: attributesAr }
    }
});
