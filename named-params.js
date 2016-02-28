let send = (traveller, destination) => { console.log("traveller: " + traveller + ", destination: " + destination.to); };

class Parent {
    gave(who, why) {
        const traveller = who,
            destination = why.cashFor;

        // this is not the central example for this post, but it is still an example
        send(traveller, { to: destination });
    }
}

let dad = new Parent(),

    mySister = new (class Sibling {
                        toString() {
                            return 'my sister'
                        }
                    }),

    theMall = new (class Mall {
                        toString() {
                            return 'the mall'
                        }
                    });

dad.gave(mySister, { cashFor: theMall });