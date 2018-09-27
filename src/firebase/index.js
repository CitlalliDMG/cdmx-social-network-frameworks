// Entry poin file to the Firebase module
// Group and sample the module functionalities
// Avoid to react components to access to the configuration and auth files directly

import * as auth from './auth';
import * as db from './db';
import * as firebase from './firebase';

export {
    auth,
    db,
    firebase,
}