// vue app
let app = new Vue({
    el: '#app',
    data: {

        // varaibles
        isActive: false,
        currentContact: 0,

        // contacts
        contacts: [ 
            {
            name: 'Michele',
            avatar: '_1',
            isActive: true,
            isVisible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }],
            },
            {
                name: 'Chris',
                avatar: '_2',
                isActive: false,
                isVisible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }],
                }
        ],

        // user
        currentUser: {
            name: 'Kevin',
            avatar: '_me'
        }
},
methods: {
    setActive: function(i){
        // remove active classes from all contacts
        this.contacts.forEach(contact => {
            contact.isActive = false
        });

        // add active classes to the current contact
        if(this.contacts[i].isActive == false){
            this.contacts[i].isActive = true
        }else{
            this.contacts[i].isActive = false
        }

         // tracking the current contact
        this.currentContact = i
    }
}
})