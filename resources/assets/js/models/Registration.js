import { Model } from 'vue-mc';
import { string, same, length, ascii, email, required } from 'vue-mc/validation';

export default class Registration extends Model
{

    // Default values set on instantiation.
    defaults() {
        return {
            id                   : null,
            name                 : '',
            email                : '',
            password             : '',
            password_confirmation: '',
        };
    }

    // Validation rules for pre-submission.
    validation() {
        return {
            name                 : required.and(string)
                                           .and(length(3, 24))
                                           .and(ascii),
            email                : required.and(string)
                                           .and(email),
            password             : required.and(string)
                                           .and(length(4, 48)),
            password_confirmation: required.and(same('password')),
        };
    }

    // Return only the first error for each item.
    options() {
        return {
            useFirstErrorOnly: true,
        };
    }

    // Get the route URL from Laravel's internal routes.
    routes() {
        return {
            save: 'register',
        };
    }

}
