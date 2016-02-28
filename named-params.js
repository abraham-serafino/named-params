class Parent {
    gave(who, why) {
        const traveller = who,
            destination = why.cashFor;

        // this is not the central example for this post, but it is still an example
        send(traveller, { to: destination });
    }
}

let dad = new Parent(),
    mySister = new Sibling(),
    theMall = new Mall();

dad.gave(mySister, { cashFor: theMall });