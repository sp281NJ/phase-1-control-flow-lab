function scuberGreetingForFeet(num){
  // Write your code here!
  
  if(num <= 400){
    return("This one is on me!");
    } else if (num > 400 && num < 2000){
      return("That will be twenty bucks.");
    } else if (num > 2000 && num < 2500){
      return("I will gladly take your thirty bucks.");
    } else if (num > 2500){
      return("No can do.");
    }
    
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

/*else if(distance === 400 || < 2000 ) */

function ternaryCheckCity(city){
  // Write your code here!
  const message = city === 'NYC' ? "Ok, sounds good." : "No go.";
  return (message);

}
ternaryCheckCity('NYC')
ternaryCheckCity('Pittsburgh')


function switchOnCharmFromTip(tip){
  // Write your code here!
  let response;
switch (tip){
  case 'generous':
        response = "Thank you so much.";
        break;
  case 'not as generous':
        response = "Thank you.";
        break;
  case 'thanks for everything':
        response = "Bye.";
        break;
}
return (response);
}
switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous');
switchOnCharmFromTip('thanks for everything');
