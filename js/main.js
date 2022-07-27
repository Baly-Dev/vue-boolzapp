// vue app
let app = new Vue({
    el: '#app',
    data: {

        // varaibles
        currentContact: 0,
        newMessage: '',
        isAdded: false,

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
                    content: 'Hai portato a spasso il cane?',
                    isRecived: false,
                    isSent: true
                },
                {
                    date: '10/01/2020 15:30:55',
                    content: 'No, lo porto tra poco.',
                    isRecived: true,
                    isSent: false
                },
                {
                    date: '10/01/2020 15:30:55',
                    content: 'Spero tu abbia portato il cane.',
                    isRecived: false,
                    isSent: true
                },
                {
                    date: '10/01/2020 16:15:22',
                    content: 'Si, tutto fatto!',
                    isRecived: true,
                    isSent: false
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
                    content: 'Ciao come stai?',
                    isRecived: true,
                    isSent: false
                },
                {
                    date: '10/01/2020 16:15:22',
                    content: 'Tutto bene, tu?',
                    isRecived: false,
                    isSent: true
                },
                {
                    date: '20/03/2020 16:30:00',
                    content: 'Abbastanza bene anche io, grazie.',
                    isRecived: true,
                    isSent: false
                }],
            },
            {
            name: 'Edoardo',
            avatar: '_3',
            isActive: false,
            isVisible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    content: 'Hai portato a spasso il cane?',
                    isRecived: false,
                    isSent: true
                },
                {
                    date: '10/01/2020 15:30:55',
                    content: 'No, lo porto tra poco.',
                    isRecived: true,
                    isSent: false
                },
                {
                    date: '10/01/2020 15:30:55',
                    content: 'Spero tu abbia portato il cane.',
                    isRecived: false,
                    isSent: true
                },
                {
                    date: '10/01/2020 16:15:22',
                    content: 'Si, tutto fatto!',
                    isRecived: true,
                    isSent: false
                }],
            },
            {
            name: 'Travis',
            avatar: '_5',
            isActive: false,
            isVisible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    content: 'Ciao come stai?',
                    isRecived: true,
                    isSent: false
                },
                {
                    date: '10/01/2020 16:15:22',
                    content: 'Tutto bene, tu?',
                    isRecived: false,
                    isSent: true
                },
                {
                    date: '20/03/2020 16:30:00',
                    content: 'Abbastanza bene anche io, grazie.',
                    isRecived: true,
                    isSent: false
                }],
            },
            {
            name: 'Altea',
            avatar: '_6',
            isActive: false,
            isVisible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    content: 'Hai portato a spasso il cane?',
                    isRecived: false,
                    isSent: true
                },
                {
                    date: '10/01/2020 15:30:55',
                    content: 'No, lo porto tra poco.',
                    isRecived: true,
                    isSent: false
                },
                {
                    date: '10/01/2020 15:30:55',
                    content: 'Spero tu abbia portato il cane.',
                    isRecived: false,
                    isSent: true
                },
                {
                    date: '10/01/2020 16:15:22',
                    content: 'Si, tutto fatto!',
                    isRecived: true,
                    isSent: false
                }],
            },
            {
            name: 'Amleto',
            avatar: '_7',
            isActive: false,
            isVisible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    content: 'Ciao come stai?',
                    isRecived: true,
                    isSent: false
                },
                {
                    date: '10/01/2020 16:15:22',
                    content: 'Tutto bene, tu?',
                    isRecived: false,
                    isSent: true
                },
                {
                    date: '20/03/2020 16:30:00',
                    content: 'Abbastanza bene anche io, grazie.',
                    isRecived: true,
                    isSent: false
                }],
                },
            {
            name: 'Attilio',
            avatar: '_8',
            isActive: false,
            isVisible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    content: 'Hai portato a spasso il cane?',
                    isRecived: false,
                    isSent: true
                },
                {
                    date: '10/01/2020 15:30:55',
                    content: 'No, lo porto tra poco.',
                    isRecived: true,
                    isSent: false
                },
                {
                    date: '10/01/2020 15:30:55',
                    content: 'Spero tu abbia portato il cane.',
                    isRecived: false,
                    isSent: true
                },
                {
                    date: '10/01/2020 16:15:22',
                    content: 'Si, tutto fatto!',
                    isRecived: true,
                    isSent: false
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
    getCurrentContact: function(i){
        // tracking the current contact
        this.currentContact = i
    },

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
    },

    addNewMessage: function(currentContact){
        // push new message into messages array
        if(this.newMessage != ''){
            this.contacts[currentContact].messages.push(
                {
                    date: '10/01/2020 15:30:55',
                    content: this.newMessage,
                    isRecived: false,
                    isSent: true
                }
            )
            this.isAdded = true
        }

        // clear the input box
        this.newMessage = ''

        // add reply to the added message
        if(this.isAdded){
            setTimeout(() => {
                this.contacts[currentContact].messages.push(
                    {
                        date: '10/01/2020 15:30:55',
                        content: 'Ok',
                        isRecived: true,
                        isSent: false
                    }
                )
            }, 1000)
            this.isAdded = false
        }   
    }
}
})