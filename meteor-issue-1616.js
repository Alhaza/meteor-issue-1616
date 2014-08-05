if (Meteor.isClient) {  
  Deps.autorun(function(){
    if(Meteor.loggingIn()){
      return;
    }
    if(Meteor.user()){
      Meteor.logoutOtherClients();
    }
  })
}