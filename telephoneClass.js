class Telephone {
  constructor() {
    this.phoneBook = [];
    this.observers = [];
  }

  addPhoneNumber(number) {
    this.phoneBook.push(number);
  }

  removePhoneNumber(number) {
    const index = this.phoneBook.indexOf(number);

    if (index === -1) {
      console.log("Phone number not found");
      return;
    }

    return this.phoneBook.splice(index, 1);
  }

  dialPhoneNumber(number) {
    const indx = this.phoneBook.indexOf(number);

    if (indx === -1) {
      console.log("phone number not found");
      return;
    }

    this.notifyObs(this.phoneBook[indx]);
  }

  subscribe(observer) {
    this.observers.push(observer)
  }

  unsubscribe(observer) {
    const obsIndx = this.observers.indexOf(observer);

    if (obsIndx === -1) {
      console.log(`Observer not found`);
      return;
    }
    this.observers.splice(obsIndx, 1);
  }
  notifyObs(number) {
    return this.observers.forEach((obs, indx) => {
      obs.notify(number, indx);
    })
  }
}


class Observer {
  constructor() { }
  notify(phone_number, index) {
    if (index === 0) {
      console.log(`${phone_number}`);
    } else {
      console.log(`Now dailing ${phone_number}`);
    }
  }
}

const obs1 = new Observer();
const obs2 = new Observer();

const henryPhoneNumber = new Telephone();
henryPhoneNumber.subscribe(obs1);
henryPhoneNumber.subscribe(obs2);

henryPhoneNumber.addPhoneNumber(+2348068507281);
henryPhoneNumber.dialPhoneNumber(+2348068507281);