
var ViewModel = function(){
  var self = this;
  self.firstname = ko.observable("May");
  self.lastname = ko.observable("Wang");
  self.fullname = ko.computed(function(){
    return self.firstname() + " " + self.lastname();
  });
};

