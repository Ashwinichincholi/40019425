class Customer {
   private name: string;
   private address: string;
   private mobile:string;
   constructor(name:string, address:string, mobile:string){
  this.name=name;
  this.address=address;
  this.mobile=mobile;
        
}
display(){
    console.log('Name:', this.name);
    console.log('Address:', this.address);
    console.log('Mobile:', this.mobile);
}
}
let customer = new Customer("Ravi", "pune", "873267899");
customer.display();