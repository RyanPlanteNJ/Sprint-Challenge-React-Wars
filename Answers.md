# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
<!-- ReactJS is a multitude of libraries that allow us to write and change code faster and keep up with the ever changing demand. It also allows us to still write JS code within React. What ReactJS also manages to accomplishes, is the speed at which the DOM is updated. This is done because React works of a Virtual DOM. When this Virtual DOM is changed, it compares it to a previous version of the DOM, and only changes the necessary pieces, thus allowing code to run faster without bogging the system down.-->

1. Describe component state.
   <!-- A components is the current data that is currently in there. Whether it be a boolean,a number, or even some sort of id. In order to change its state, change data that is passing through. An example of this would be a baseball game where both teams have the ame amount of points: the state of the game is tied at this point. Once another team gets a run, the state of the game changes.-->

1. Describe props.
<!-- Props are data is being passed down from the parent. In a parent component, when you pass other components into it, you are declaring your variables (i.e. in the most recent sprint species ={charc.species}. In order for us to pass this data to the actual component, props must be enacted and the variable must be called.-->

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
<!-- A side effect is anything affects another component or object outside of the scope the scope that the function is taking place. in order to sync these effects, we first must pull in useState and useEffect. Once this is done, we can use useEffect and useState in conjunction by changing out state in an axios statement if we wanted to-->
