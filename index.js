var CountryViewModel = function(name) {
  this.name = ko.observable(name);
};

var ViewModel = function() {
  var self = this;
  self.firstname = ko.observable("May");
  self.lastname = ko.observable("Wang");
  self.fullname = ko.computed(function() {
    return self.firstname() + " " + self.lastname();
  });
  self.countries = ko.observableArray([
    new CountryViewModel("China"),
    new CountryViewModel("Sweden"),
    new CountryViewModel("Australia")
  ]);
};

var ListModel = function(items) {
  var self = this;
  self.items = ko.observableArray(items);
  self.itemToAdd = ko.observable("");
  self.addItem = function() {
    if (self.itemToAdd() != "") {
      self.items.push(self.itemToAdd());
      self.itemToAdd(""); // Clear the text box
    }
  };
}