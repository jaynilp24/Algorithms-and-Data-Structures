console.clear();

class Book {
    constructor(name, author)
    {
        console.log('Book',this);
        this.name= name;
        this.author=author;
    }
    information()
    {
        console.log('Name: ', this.name, '\n', 'Author: ', this.author);
    }
}

class Profile1 extends Book {
    constructor(name, author){
        super(name, author);
        console.log('Profile1',this);
    }
    info2()
    {
        console.log('Science Fiction: ', this.name);
    }
    
}

class Profile2 extends Book {
    constructor(name, author)
    {
        super(name, author);
    }
    info2()
    {
        console.log('Drama: ', this.name);
    }
    
}

book1= new Profile1('Dune','Frank Herbert');
console.log(book1.info2());

book2= new Profile2('Romeo & Juliet','William Shakespeare');
console.log(book2.info2());



