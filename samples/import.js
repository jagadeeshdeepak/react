import Person from './export'; // Person is exported here
import prs from './export'; // since its a default export, Person gets exported here

import { data } from './export2'; // since they are not the default, if u to specify in curly brances
import { clean } from './export2';

// assigning aliases to the imports
import { data as Hi } from './export2';

// import many things to an object
import * as bundles from './exprot2';
