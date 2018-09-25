import { Model } from 'vue-mc';
import { string, email, required } from 'vue-mc/validation';

export default class Login extends Model
{

    // Default values set on instantiation.
    defaults() {
        return {
            id                   : null,
            email                : '',
            password             : '',
        };
    }

    // Validation rules for pre-submission.
    validation() {
        return {
            email                : required.and(string)
                                           .and(email),
            password             : required.and(string),
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
            save: 'login',
        };
    }

}
