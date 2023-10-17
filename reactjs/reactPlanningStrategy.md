# React Planning Stage 

## Step 1 - Identify Each View
- Determine the look and functionality of each view in your app.
- Break the views into components 


## Step 2 - Detertermine what events happen in the app 
- Determine what actions the app or the user is performing on the data. Is the data being set, modified, or deleted?

For example: 
**get the tweets**
So the action type for event this will probably be something like `GET_LIST_OF_TWEETS` or `GET_DATA`.


## Step 3 - Determine what data lives in the store  
- Rememer Redux (and the react-redux bindings!) was meant to solve were:
	- Propagation of props through the entire component tree.
	- Ensuring consistency and predictability of the state across the app.

"Use Redux for state that matters globally or is mutated in complex ways…"
- If data changes, all of the components that use a data will update.


## Step 4:  Built out your action creator in the actions folder
- Use shared.jsx for the actions that load initial data. 

## Step 5:  Set up reducers to handle your the Actions you have created state 



