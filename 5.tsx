// #################### --TRICK 1-- #######################
const [user, setUser] = React.useState<IUser | null>(null);
// #################### --TRICK 1-- #######################

// #################### --TRICK 2-- #######################
/* 
You can also use type assertions if a state is initialized 
soon after setup and always has a value after:
*/
const [user, setUser] = React.useState<IUser>({} as IUser);
/* 
This temporarily "lies" to the TypeScript compiler that {} is of type IUser.
You should follow up by setting the user state — if you don't, the rest of your 
code may rely on the fact that user is of type IUser and that may lead to runtime errors.
*/
// #################### --TRICK 2-- #######################
