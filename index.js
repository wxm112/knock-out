var CountryViewModel = function(name) {
  this.name = ko.observable(name);
};

var ViewModel = function(){
  var self = this;
  self.firstname = ko.observable("May");
  self.lastname = ko.observable("Wang");
  self.fullname = ko.computed(function(){
    return self.firstname() + " " + self.lastname();
  });
  self.countries = ko.observableArray([
    new CountryViewModel("China"),
    new CountryViewModel("Sweden"),
    new CountryViewModel("Australia")]);
};

var ListModel = function (items) {
    this.items = ko.observableArray([items]);
    this.itemToAdd = ko.observable("");
    this.addItem = function () {
        if (this.itemToAdd() != "") { 
            this.items.push(this.itemToAdd());
            this.itemToAdd(""); // Clear the text box
    };
  }.bind(this);
};


